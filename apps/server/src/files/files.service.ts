import { Injectable } from '@nestjs/common';
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { UploadFileDto } from './dto/upload-files.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetUrlFileInputDto } from './dto/geturl-file-input.dto';
import { Readable } from 'stream';

@Injectable()
export class FilesService {
  constructor(private prisma: PrismaService) {}

  client = new S3Client({
    forcePathStyle: true,
    region: process.env.S3_REGION,
    endpoint: process.env.S3_ENDPOINT,
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET_KEY,
    },
  });

  async uploadFile(files: UploadFileDto, userId: string) {
    const { face_photo, thai_nationalid_copy, parent_permission, p1, p7 } =
      files;

    let face_photo_key = undefined;
    let thai_nationalid_copy_key = undefined;
    let parent_permission_key = undefined;
    let p1_key = undefined;
    let p7_key = undefined;

    if (face_photo)
      face_photo_key = await this.uploadToS3(
        face_photo[0],
        'face_photo',
        userId,
      );
    if (thai_nationalid_copy)
      thai_nationalid_copy_key = await this.uploadToS3(
        thai_nationalid_copy[0],
        'thai_nationalid_copy',
        userId,
      );
    if (parent_permission)
      parent_permission_key = await this.uploadToS3(
        parent_permission[0],
        'parent_permission',
        userId,
      );
    if (p1) p1_key = await this.uploadToS3(p1[0], 'p1', userId);
    if (p7) p7_key = await this.uploadToS3(p7[0], 'p7', userId);

    await this.prisma.file.upsert({
      where: { userId: userId },
      create: {
        userId: userId,
        face_photo_filepath: face_photo_key,
        thai_nationalid_copy_filepath: thai_nationalid_copy_key,
        parent_permission_filepath: parent_permission_key,
        p1_filepath: p1_key,
        p7_filepath: p7_key,
      },
      update: {
        face_photo_filepath: face_photo_key,
        thai_nationalid_copy_filepath: thai_nationalid_copy_key,
        parent_permission_filepath: parent_permission_key,
        p1_filepath: p1_key,
        p7_filepath: p7_key,
      },
    });
    await this.prisma.user.update({
      where: { id: userId },
      data: {
        files_done: true,
      },
    });

    return {
      face_photo_key,
      thai_nationalid_copy_key,
      parent_permission_key,
      p1_key,
      p7_key,
    };
  }

  async uploadReceipt(receipt: Express.Multer.File, userId: string) {
    const receipt_key = await this.uploadToS3(receipt, 'receipt', userId);
    await this.prisma.confirmation.update({
      where: { user_id: userId },
      data: {
        receipt_path: receipt_key,
      },
    });
    return receipt_key;
  }

  uploadToS3 = async (
    file: Express.Multer.File,
    fileType: string,
    userId: string,
  ) => {
    const key = this.generateFilename(file.originalname, userId, fileType);

    const params = {
      Bucket: process.env.S3_BUCKET,
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype,
    };

    try {
      const command = new PutObjectCommand(params);
      await this.client.send(command);
      return key;
    } catch (error) {
      console.error('Error uploading to S3:', error);
      throw error;
    }
  };

  async getFile(urls: GetUrlFileInputDto) {
    let face_photo_filepath = '';
    let thai_nationalid_filepath = '';
    let parent_permission_filepath = '';
    let p1_filepath = '';
    let p7_filepath = '';

    if (urls.face_photo_key)
      face_photo_filepath = await this.getUrl(urls.face_photo_key);
    if (urls.thai_nationalid_copy_key)
      thai_nationalid_filepath = await this.getUrl(
        urls.thai_nationalid_copy_key,
      );
    if (urls.parent_permission_key)
      parent_permission_filepath = await this.getUrl(
        urls.parent_permission_key,
      );
    if (urls.p1_key) p1_filepath = await this.getUrl(urls.p1_key);
    if (urls.p7_key) p7_filepath = await this.getUrl(urls.p7_key);

    return {
      face_photo_filepath,
      thai_nationalid_filepath,
      parent_permission_filepath,
      p1_filepath,
      p7_filepath,
    };
  }

  async getReceiptFile(receipt_url: string) {
    const receipt_path = await this.getUrl(receipt_url);
    return receipt_path;
  }

  async getBlobs(urls: GetUrlFileInputDto) {
    const blobPromises = Object.entries(urls).map(async ([filename, key]) => {
      const getObjectParams = { Bucket: process.env.S3_BUCKET, Key: key };
      const { Body } = await this.client.send(
        new GetObjectCommand(getObjectParams),
      );

      if (!Body || !(Body instanceof Readable)) {
        throw new Error(`Invalid body received for key: ${key}`);
      }

      const buffer = await this.streamToBuffer(Body);
      return [filename, buffer.toString('base64')]; // Convert to base64
    });

    const blobs = Object.fromEntries(await Promise.all(blobPromises));
    return blobs;
  }

  streamToBuffer = async (readableStream: Readable): Promise<Buffer> => {
    return new Promise((resolve, reject) => {
      const chunks: Uint8Array[] = [];
      readableStream.on('data', (chunk) => chunks.push(chunk));
      readableStream.on('end', () => resolve(Buffer.concat(chunks)));
      readableStream.on('error', reject);
    });
  };

  async getUrl(filename: string) {
    const command = new GetObjectCommand({
      Bucket: process.env.S3_BUCKET,
      Key: filename,
    });

    const signedUrl = await getSignedUrl(this.client, command, {
      expiresIn: 3600,
    });
    return signedUrl;
  }

  async getUserFiles(userId: string) {
    return this.prisma.file.findUnique({ where: { userId: userId } });
  }

  private generateFilename(filename: string, userId: string, fileType: string) {
    const index = filename.lastIndexOf('.');
    const extension = index !== -1 ? filename.slice(index) : '';
    return `${fileType}_${userId}${extension}`;
  }
}
