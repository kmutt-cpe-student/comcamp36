import { ApiProperty } from '@nestjs/swagger';

export class RegsiterFilesPayloadDto {
  @ApiProperty({
    format: 'binary',
    type: 'string',
    additionalProperties: false,
  })
  face_photo?: Express.Multer.File;

  @ApiProperty({
    format: 'binary',
    type: 'string',
    additionalProperties: false,
  })
  thai_nationalid_copy?: Express.Multer.File;

  @ApiProperty({
    format: 'binary',
    type: 'string',
    additionalProperties: false,
  })
  parent_permission?: Express.Multer.File;

  @ApiProperty({
    format: 'binary',
    type: 'string',
    additionalProperties: false,
  })
  p1?: Express.Multer.File;

  @ApiProperty({
    format: 'binary',
    type: 'string',
    additionalProperties: false,
  })
  p7?: Express.Multer.File;
}
