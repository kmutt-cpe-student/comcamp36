import { ApiProperty } from '@nestjs/swagger';

export class RegisterInfoPayloadDto {
  @ApiProperty({
    type: 'string',
  })
  fullname?: string;

  @ApiProperty({
    type: 'number',
  })
  age?: number;

  @ApiProperty({
    format: 'date',
    type: 'string',
  })
  birth?: Date;

  @ApiProperty({
    type: 'string',
  })
  religion?: string;

  @ApiProperty({
    type: 'string',
  })
  blood_group?: string;

  @ApiProperty({
    type: 'string',
  })
  graduation?: string;

  @ApiProperty({
    type: 'string',
  })
  school?: string;

  @ApiProperty({
    type: 'string',
  })
  course?: string;

  @ApiProperty({
    type: 'string',
  })
  telephone?: string;

  @ApiProperty({
    type: 'string',
  })
  email?: string;

  @ApiProperty({
    type: 'string',
  })
  medical_coverage?: string;

  @ApiProperty({
    type: 'string',
  })
  chronic_disease?: string;

  @ApiProperty({
    type: 'string',
  })
  self_medicine?: string;

  @ApiProperty({
    type: 'string',
  })
  drug_allergic?: string;

  @ApiProperty({
    type: 'string',
  })
  food_allergic?: string;

  @ApiProperty({
    type: 'string',
  })
  prefer_food?: string;

  @ApiProperty({
    type: 'string',
  })
  address?: string;

  @ApiProperty({
    type: 'string',
  })
  home_phone_tel?: string;

  @ApiProperty({
    type: 'boolean',
  })
  comcamp_attendance?: boolean;

  @ApiProperty({
    type: 'string',
  })
  size?: string;

  @ApiProperty({
    type: 'boolean',
  })
  everyday_attendence?: boolean;

  @ApiProperty({
    type: 'boolean',
  })
  has_laptop?: string;

  @ApiProperty({
    type: 'string',
  })
  travel?: string;

  @ApiProperty({
    type: 'string',
  })
  parent_fullname?: string;

  @ApiProperty({
    type: 'string',
  })
  parent_relation?: string;

  @ApiProperty({
    type: 'string',
  })
  parent_phone?: string;
}

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
