import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Req,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBody, ApiConsumes, ApiResponse } from '@nestjs/swagger';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { FilesService } from './files.service';
import { UploadFileDto } from './dto/upload-files.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import type { Request } from 'express';
import { UploadFileResponseDto } from './dto/upload-file-response.dto';
import { UserFilesResponseDto } from './dto/user-files-response.dto';
import { GetUrlFileInputDto } from './dto/geturl-file-input.dto';

@Controller('files')
@UseGuards(AuthGuard)
export class FilesController {
  constructor(private filesService: FilesService) {}

  @ApiConsumes('multipart/form-data')
  @ApiResponse({
    status: 200,
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        face_photo: {
          type: 'string',
          format: 'binary',
        },
        thai_nationalid_copy: {
          type: 'string',
          format: 'binary',
        },
        parent_permission: {
          type: 'string',
          format: 'binary',
        },
        p1: {
          type: 'string',
          format: 'binary',
        },
        p7: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @Post('upload')
  @ApiResponse({ status: 200, type: UploadFileResponseDto })
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'face_photo', maxCount: 1 },
      { name: 'thai_nationalid_copy', maxCount: 1 },
      { name: 'parent_permission', maxCount: 1 },
      { name: 'p1', maxCount: 1 },
      { name: 'p7', maxCount: 1 },
    ]),
  )
  uploadFile(@UploadedFiles() files: UploadFileDto, @Req() req: Request) {
    return this.filesService.uploadFile(files, req['user_id']);
  }

  @Post('getblobs')
  @ApiResponse({ status: 200, type: UserFilesResponseDto })
  getBlobs(@Body() urls: GetUrlFileInputDto) {
    return this.filesService.getBlobs(urls);
  }

  @Post('geturl')
  @ApiResponse({ status: 200, type: UserFilesResponseDto })
  getFiles(@Body() urls: GetUrlFileInputDto) {
    return this.filesService.getFile(urls);
  }

  @Get('user-files')
  @ApiResponse({ status: 200, type: UserFilesResponseDto })
  getUserFiles(@Req() req: Request) {
    if (!req['user_id']) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return this.filesService.getUserFiles(req['user_id']);
  }
}
