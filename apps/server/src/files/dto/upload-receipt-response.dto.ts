import { ApiProperty } from '@nestjs/swagger';

export class UploadReceiptResponseDto {
  @ApiProperty({
    type: 'string',
  })
  receipt_key: string;
}
