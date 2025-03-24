import { ApiProperty } from '@nestjs/swagger';

export class UpdateConfirmDto {
  @ApiProperty({
    type: 'string',
    required: true,
  })
  confirmation_status: string;
}
