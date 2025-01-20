import { ApiProperty } from '@nestjs/swagger';

export class GetHelloResponseDto {
  @ApiProperty()
  id: string;
}

export class CheckTelPayloadDto {
  @ApiProperty()
  tel: string;
}

export class CheckTelResponseDto {
  @ApiProperty()
  tel: string;

  @ApiProperty()
  check: boolean;
}

export class CheckTel2PatloadDto {
  @ApiProperty()
  test: File;
}
