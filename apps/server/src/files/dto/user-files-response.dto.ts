import { ApiProperty } from '@nestjs/swagger';

export class UserFilesResponseDto {
  @ApiProperty({
    type: 'string',
  })
  id: string;

  @ApiProperty({
    type: 'string',
  })
  face_photo_filepath: string;

  @ApiProperty({
    type: 'string',
  })
  thai_nationalid_copy_filepath: string;

  @ApiProperty({
    type: 'string',
  })
  parent_permission_filepath: string;

  @ApiProperty({
    type: 'string',
  })
  p1_filepath: string;

  @ApiProperty({
    type: 'string',
  })
  p7_filepath: string;
}
