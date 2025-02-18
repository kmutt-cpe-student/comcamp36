import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateUserDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  fullname: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  age: number;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  birth: Date;

  @ApiProperty()
  @IsString()
  @IsOptional()
  gender: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  religion: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  blood_group: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  graduation: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  school: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  course: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  telephone: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  medical_coverage: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  chronic_diseas: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  self_medicine: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  drug_allergic: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  food_allergic: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  perfer_food: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  address: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  home_phone_tel: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  comcamp_attendance: boolean;

  @ApiProperty()
  @IsString()
  @IsOptional()
  size: string; //size เสื้อ

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  everyday_attendence: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  has_laptop: boolean;

  @ApiProperty()
  @IsString()
  @IsOptional()
  travel: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  parent_fullname: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  parent_relation: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  parent_phone: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  has_submit_answer: boolean;
}
