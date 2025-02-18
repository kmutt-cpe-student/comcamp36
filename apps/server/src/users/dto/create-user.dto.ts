import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  google_id: string;

  @ApiProperty()
  email: string;
}
