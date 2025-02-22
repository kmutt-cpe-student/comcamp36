import {
  Controller,
  Get,
  Param,
  Post,
  Req,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiConsumes, ApiResponse } from '@nestjs/swagger';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { FilesService } from './files.service';
import { UploadFileDto } from './dto/upload-files.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import type { Request } from 'express';

@Controller('files')
@UseGuards(AuthGuard)
export class FilesController {
  constructor(private filesService: FilesService) {}

  @ApiConsumes('multipart/form-data')
  @ApiResponse({
    status: 200,
  })
  @Post('upload')
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

  @Get(':filename')
  getFiles(@Param('filename') filename: string) {
    return this.filesService.getFile(filename);
  }
}
