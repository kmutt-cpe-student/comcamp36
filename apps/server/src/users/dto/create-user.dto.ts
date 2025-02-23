import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    type: 'string',
    required: true,
  })
  google_id: string;

  @ApiProperty({
    type: 'string',
    required: true,
  })
  email: string;
}
