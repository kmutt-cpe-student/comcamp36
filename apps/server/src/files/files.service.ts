import { Injectable } from '@nestjs/common';
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { UploadFileDto } from './dto/upload-files.dto';

@Injectable()
export class FilesService {
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

    let face_photo_key = '';
    let thai_nationalid_copy_key = '';
    let parent_permission_key = '';
    let p1_key = '';
    let p7_key = '';

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

    return {
      face_photo_key,
      thai_nationalid_copy_key,
      parent_permission_key,
      p1_key,
      p7_key,
    };
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

  async getFile(filename: string) {
    const command = new GetObjectCommand({
      Bucket: process.env.S3_BUCKET,
      Key: filename,
    });

    const signedUrl = await getSignedUrl(this.client, command, {
      expiresIn: 3600,
    });
    return signedUrl;
  }

  private generateFilename(filename: string, userId: string, fileType: string) {
    const index = filename.lastIndexOf('.');
    const extension = index !== -1 ? filename.slice(index) : '';
    return `${fileType}_${userId}${extension}`;
  }
}
