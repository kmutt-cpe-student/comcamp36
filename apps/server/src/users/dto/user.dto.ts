import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  @ApiProperty({
    type: 'string',
  })
  id?: string;

  @ApiProperty({
    type: 'string',
  })
  title?: string;

  @ApiProperty({
    type: 'string',
  })
  email?: string;

  @ApiProperty({
    type: 'string',
  })
  fullname?: string;

  @ApiProperty({
    type: 'number',
  })
  age?: number;

  @ApiProperty({
    type: 'string',
  })
  birth?: Date;

  @ApiProperty({
    type: 'string',
  })
  gender?: string;

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
  shirt_size?: string;

  @ApiProperty({
    type: 'boolean',
  })
  everyday_attendence?: boolean;

  @ApiProperty({
    type: 'boolean',
  })
  has_laptop?: boolean;

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

  @ApiProperty({
    type: 'boolean',
  })
  files_done?: boolean;

  @ApiProperty({
    type: 'boolean',
  })
  academic_done?: boolean;

  @ApiProperty({
    type: 'boolean',
  })
  regis_done?: boolean;

  @ApiProperty({
    type: 'boolean',
  })
  info_done?: boolean;
}
