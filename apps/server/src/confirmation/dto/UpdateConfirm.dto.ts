import { ApiProperty } from '@nestjs/swagger';

export class UpdateConfirmDto {
  @ApiProperty({
    type: 'string',
    required: true,
  })
  nickname: string;

  @ApiProperty({
    type: 'string',
    required: true,
  })
  request_food: string;

  @ApiProperty({
    type: 'boolean',
    required: true,
  })
  haveIpad: boolean;

  @ApiProperty({
    type: 'boolean',
    required: true,
  })
  haveMouse?: boolean;

  @ApiProperty({
    type: 'string',
    required: true,
  })
  os_notebook: string;

  @ApiProperty({
    type: 'string',
    required: true,
  })
  travel: string;

  @ApiProperty({
    type: 'string',
    required: true,
  })
  receipt_datetime: string;
}
