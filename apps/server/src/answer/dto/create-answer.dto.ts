import { ApiProperty } from '@nestjs/swagger';

export class CreateAnswerRegisDto {
  @ApiProperty({
    type: 'string',
    required: true,
  })
  userId: string;

  @ApiProperty({
    type: 'string',
    required: true,
  })
  answer1: string;

  @ApiProperty({
    type: 'string',
    required: true,
  })
  answer2: string;

  @ApiProperty({
    type: 'string',
    required: true,
  })
  answer3: string;

  @ApiProperty({
    type: 'string',
    required: true,
  })
  answer4: string;

  @ApiProperty({
    type: 'string',
    required: true,
  })
  answer5: string;

  @ApiProperty({
    type: 'string',
    required: true,
  })
  answer6_1: string;

  @ApiProperty({
    type: 'string',
    required: true,
  })
  answer6_2: string;
}

export class CreateAnswerAcademicDto {
  @ApiProperty({
    type: 'string',
    required: true,
  })
  userId: string;

  @ApiProperty({
    type: 'string',
    required: true,
  })
  algo_answer: string;

  @ApiProperty({
    type: 'string',
    required: true,
  })
  chess_notation: string;

  @ApiProperty({
    type: 'number',
    required: true,
  })
  chess_score: number;
}
