import { ApiProperty } from '@nestjs/swagger';

export class Confirm {
  @ApiProperty({
    type: 'string',
  })
  user_id: string;

  @ApiProperty({
    type: 'string',
  })
  index: string;

  @ApiProperty({
    type: 'string',
  })
  fullname: string;

  @ApiProperty({
    type: 'string',
  })
  nickname?: string;

  @ApiProperty({
    type: 'string',
  })
  request_food?: string;

  @ApiProperty({
    type: 'string',
  })
  Ipad?: boolean;

  @ApiProperty({
    type: 'string',
  })
  os_notebook?: string;

  @ApiProperty({
    type: 'string',
  })
  travel?: string;

  @ApiProperty({
    type: 'string',
  })
  receipt_path?: string;

  @ApiProperty({
    type: 'string',
  })
  receipt_datetime?: Date;

  @ApiProperty({
    type: 'string',
  })
  confirmation_status: string;

  @ApiProperty({
    type: 'string',
  })
  isAnswerDone?: Date;

  @ApiProperty({
    type: 'string',
  })
  isConfirmDone?: Date;
}

export class ConfirmResponseDto {
  @ApiProperty({
    type: 'string',
  })
  isPassed: boolean;

  @ApiProperty({
    type: () => Confirm,
  })
  confirm: Confirm;
}
