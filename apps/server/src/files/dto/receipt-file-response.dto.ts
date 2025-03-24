import { ApiProperty } from '@nestjs/swagger';

export class ReceiptFileResponseDto {
  @ApiProperty({
    type: 'string',
  })
  receipt_path: string;
}
