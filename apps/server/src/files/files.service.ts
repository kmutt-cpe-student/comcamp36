import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { UploadFileDto } from './dto/upload-files.dto';

@Injectable()
export class FilesService {
  AWS_S3_BUCKET = 'comcamp36_user_files';
  s3 = new AWS.S3({
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_KEY,
  });

  async uploadFile(files: UploadFileDto) {
    console.log(files);
    const { face_photo, thai_nationalid_copy, parent_permission, p1, p7 } =
      files;
    const face_photo_res = await this.s3_upload(face_photo);
    const thai_nationalid_copy_res = await this.s3_upload(thai_nationalid_copy);
    const parent_permission_res = await this.s3_upload(parent_permission);
    const p1_res = await this.s3_upload(p1);
    const p7_res = await this.s3_upload(p7);

    return {
      face_photo_filepath: face_photo_res.Location,
      thai_nationalid_copy_filepath: thai_nationalid_copy_res.Location,
      parent_permission_filepath: parent_permission_res.Location,
      p1_filepath: p1_res.Location,
      p7_filepath: p7_res.Location,
    };
  }

  async s3_upload(file: Express.Multer.File) {
    const buffer = file.buffer;
    const name = file.originalname;
    const mimetype = file.mimetype;

    const params = {
      Bucket: this.AWS_S3_BUCKET,
      Key: String(name),
      Body: buffer,
      ACL: 'public-read',
      ContentType: mimetype,
      ContentDisposition: 'inline',
      CreateBucketConfiguration: {
        LocationConstraint: 'ap-south-1',
      },
    };

    try {
      const s3Response = await this.s3.upload(params).promise();
      return s3Response;
    } catch (e) {
      console.log(e);
    }
  }
}
