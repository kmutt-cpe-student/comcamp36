import { ApiProperty } from '@nestjs/swagger';

export class UserFilesResponseDto {
  @ApiProperty({
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
      url: {
        type: 'string',
      },
    },
  })
  face_photo: {
    name: string;
    url: string;
  };

  @ApiProperty({
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
      url: {
        type: 'string',
      },
    },
  })
  thai_nationalid_copy: {
    name: string;
    url: string;
  };

  @ApiProperty({
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
      url: {
        type: 'string',
      },
    },
  })
  parent_permission: {
    name: string;
    url: string;
  };

  @ApiProperty({
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
      url: {
        type: 'string',
      },
    },
  })
  p1: {
    name: string;
    url: string;
  };

  @ApiProperty({
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
      url: {
        type: 'string',
      },
    },
  })
  p7: {
    name: string;
    url: string;
  };
}
