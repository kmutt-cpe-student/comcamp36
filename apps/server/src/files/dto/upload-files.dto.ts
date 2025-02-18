import { ApiProperty } from '@nestjs/swagger';

export class UploadFileDto {
  @ApiProperty({
    format: 'binary',
    type: 'string',
    additionalProperties: false,
    required: false,
  })
  face_photo?: Express.Multer.File;

  @ApiProperty({
    format: 'binary',
    type: 'string',
    additionalProperties: false,
    required: false,
  })
  thai_nationalid_copy?: Express.Multer.File;

  @ApiProperty({
    format: 'binary',
    type: 'string',
    additionalProperties: false,
    required: false,
  })
  parent_permission?: Express.Multer.File;

  @ApiProperty({
    format: 'binary',
    type: 'string',
    additionalProperties: false,
    required: false,
  })
  p1?: Express.Multer.File;

  @ApiProperty({
    format: 'binary',
    type: 'string',
    additionalProperties: false,
    required: false,
  })
  p7?: Express.Multer.File;
}
