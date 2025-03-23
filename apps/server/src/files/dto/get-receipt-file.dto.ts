import { ApiProperty } from '@nestjs/swagger';

export class GetReceiptFileDto {
  @ApiProperty({
    type: 'string',
  })
  receipt_key: string;
}
