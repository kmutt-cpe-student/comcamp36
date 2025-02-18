import { ApiProperty } from '@nestjs/swagger';

export class RegisterInfoPayloadDto {
  @ApiProperty({
    type: 'string',
    required: false,
  })
  fullname?: string;

  @ApiProperty({
    type: 'number',
    required: false,
  })
  age?: number;

  @ApiProperty({
    format: 'date',
    type: 'string',
    required: false,
  })
  birth?: Date;

  @ApiProperty({
    type: 'string',
    required: false,
  })
  religion?: string;

  @ApiProperty({
    type: 'string',
    required: false,
  })
  blood_group?: string;

  @ApiProperty({
    type: 'string',
    required: false,
  })
  graduation?: string;

  @ApiProperty({
    type: 'string',
    required: false,
  })
  school?: string;

  @ApiProperty({
    type: 'string',
    required: false,
  })
  course?: string;

  @ApiProperty({
    type: 'string',
    required: false,
  })
  telephone?: string;

  @ApiProperty({
    type: 'string',
    required: false,
  })
  email?: string;

  @ApiProperty({
    type: 'string',
    required: false,
  })
  medical_coverage?: string;

  @ApiProperty({
    type: 'string',
    required: false,
  })
  chronic_disease?: string;

  @ApiProperty({
    type: 'string',
    required: false,
  })
  self_medicine?: string;

  @ApiProperty({
    type: 'string',
    required: false,
  })
  drug_allergic?: string;

  @ApiProperty({
    type: 'string',
    required: false,
  })
  food_allergic?: string;

  @ApiProperty({
    type: 'string',
    required: false,
  })
  prefer_food?: string;

  @ApiProperty({
    type: 'string',
    required: false,
  })
  address?: string;

  @ApiProperty({
    type: 'string',
    required: false,
  })
  home_phone_tel?: string;

  @ApiProperty({
    type: 'boolean',
    required: false,
  })
  comcamp_attendance?: boolean;

  @ApiProperty({
    type: 'string',
    required: false,
  })
  size?: string;

  @ApiProperty({
    type: 'boolean',
    required: false,
  })
  everyday_attendence?: boolean;

  @ApiProperty({
    type: 'boolean',
    required: false,
  })
  has_laptop?: string;

  @ApiProperty({
    type: 'string',
    required: false,
  })
  travel?: string;

  @ApiProperty({
    type: 'string',
    required: false,
  })
  parent_fullname?: string;

  @ApiProperty({
    type: 'string',
    required: false,
  })
  parent_relation?: string;

  @ApiProperty({
    type: 'string',
    required: false,
  })
  parent_phone?: string;
}

export class RegsiterFilesPayloadDto {
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

export class RegisterRegisPayloadDto {
  @ApiProperty({
    type: 'string',
    required: false,
  })
  answer1?: string;

  @ApiProperty({
    type: 'string',
    required: false,
  })
  answer2?: string;

  @ApiProperty({
    type: 'string',
    required: false,
  })
  answer3?: string;

  @ApiProperty({
    type: 'string',
    required: false,
  })
  answer4?: string;

  @ApiProperty({
    type: 'string',
    required: false,
  })
  answer5?: string;

  @ApiProperty({
    type: 'string',
    required: false,
  })
  answer6_1?: string;

  @ApiProperty({
    type: 'string',
    required: false,
  })
  answer6_2?: string;
}

export class RegisterAcademicPayloadDto {
  @ApiProperty({
    type: 'string',
    required: false,
  })
  algo_answer?: string;

  @ApiProperty({
    type: 'string',
    required: false,
  })
  chess_notation?: string;

  @ApiProperty({
    type: 'string',
    required: false,
  })
  chess_score?: string;
}
