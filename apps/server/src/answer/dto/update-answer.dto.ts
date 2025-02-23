import { ApiProperty } from '@nestjs/swagger';

export class UpdateAnswerRegisDto {
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

export class UpdateAnswerAcademicDto {
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
    type: 'number',
    required: false,
  })
  chess_score?: number;
}
