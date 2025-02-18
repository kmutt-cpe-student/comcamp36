import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ApiConsumes, ApiResponse } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilesService } from './files.service';
import { UploadFileDto } from './dto/upload-files.dto';

@Controller('files')
export class FilesController {
  constructor(private filesService: FilesService) {}

  @ApiConsumes('multipart/form-data')
  @ApiResponse({
    status: 200,
  })
  @Post('upload')
  @UseInterceptors(FileInterceptor('files'))
  uploadFile(
    @UploadedFile()
    files: UploadFileDto,
  ) {
    return this.filesService.uploadFile(files);
  }
}
