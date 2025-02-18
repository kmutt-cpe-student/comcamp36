import {
  Body,
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { Get } from '@nestjs/common';
import { ApiConsumes, ApiResponse } from '@nestjs/swagger';
import {
  RegisterInfoPayloadDto,
  RegsiterFilesPayloadDto,
} from './dto/register.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('register')
export class RegisterController {
  @Get() register() {
    return 'Register endpoint';
  }

  @Post('/info')
  @ApiResponse({
    status: 200,
  })
  async registerInfo(@Body() body: RegisterInfoPayloadDto) {
    console.log(body);
    return 'register info endpoint';
  }

  @Post('/files')
  @ApiConsumes('multipart/form-data')
  @ApiResponse({
    status: 200,
  })
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'face_photo', maxCount: 1 },
      {
        name: 'thai_nationalid_copy',
        maxCount: 1,
      },
    ]),
  )
  async registerFile(
    @Body() body: RegsiterFilesPayloadDto,
    @UploadedFiles()
    files: {
      face_photo?: Express.Multer.File[];
      thai_nationalid_copy?: Express.Multer.File[];
    },
  ) {
    console.log(files);
    return 'Register endpointd';
  }
}
