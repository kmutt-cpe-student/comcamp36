import { ApiProperty } from '@nestjs/swagger';

export class UploadFileResponseDto {
  @ApiProperty({
    type: 'string',
  })
  face_photo_key: string;

  @ApiProperty({
    type: 'string',
  })
  thai_nationalid_copy_key: string;

  @ApiProperty({
    type: 'string',
  })
  parent_permission_key: string;

  @ApiProperty({
    type: 'string',
  })
  p1_key: string;

  @ApiProperty({
    type: 'string',
  })
  p7_key: string;
}
