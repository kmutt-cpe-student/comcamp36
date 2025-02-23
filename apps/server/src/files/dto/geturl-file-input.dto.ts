import { ApiProperty } from '@nestjs/swagger';

export class GetUrlFileInputDto {
  @ApiProperty({
    type: 'string',
    required: false,
  })
  face_photo_key?: string;

  @ApiProperty({
    type: 'string',
    required: false,
  })
  thai_nationalid_copy_key?: string;

  @ApiProperty({
    type: 'string',
    required: false,
  })
  parent_permission_key?: string;

  @ApiProperty({
    type: 'string',
    required: false,
  })
  p1_key?: string;

  @ApiProperty({
    type: 'string',
    required: false,
  })
  p7_key?: string;
}
