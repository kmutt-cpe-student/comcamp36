import { ApiProperty } from '@nestjs/swagger';

export class UpsertAnswerRegisDto {
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

export class UpsertAnswerAcademicDto {
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
