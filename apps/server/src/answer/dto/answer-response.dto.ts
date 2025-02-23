import { ApiProperty } from '@nestjs/swagger';

export class AnswerRegisResponseDto {
  @ApiProperty({
    type: 'string',
  })
  id: string;

  @ApiProperty({
    type: 'string',
  })
  answer1: string;

  @ApiProperty({
    type: 'string',
  })
  answer2: string;

  @ApiProperty({
    type: 'string',
  })
  answer3: string;

  @ApiProperty({
    type: 'string',
  })
  answer4: string;

  @ApiProperty({
    type: 'string',
  })
  answer5: string;

  @ApiProperty({
    type: 'string',
  })
  answer6_1: string;

  @ApiProperty({
    type: 'string',
  })
  answer6_2: string;
}

export class AnswerAcademicResponseDto {
  @ApiProperty({
    type: 'string',
  })
  id: string;

  @ApiProperty({
    type: 'string',
  })
  algo_answer: string;

  @ApiProperty({
    type: 'string',
  })
  chess_notation: string;

  @ApiProperty({
    type: 'number',
  })
  chess_score: number;
}
