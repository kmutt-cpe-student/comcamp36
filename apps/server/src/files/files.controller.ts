import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Req,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBody, ApiConsumes, ApiResponse } from '@nestjs/swagger';
import {
  FileFieldsInterceptor,
  FileInterceptor,
} from '@nestjs/platform-express';
import { FilesService } from './files.service';
import { UploadFileDto } from './dto/upload-files.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import type { Request } from 'express';
import { UploadFileResponseDto } from './dto/upload-file-response.dto';
import { UserFilesResponseDto } from './dto/user-files-response.dto';
import { UsersService } from 'src/users/users.service';
import { GetReceiptFileDto } from './dto/get-receipt-file.dto';
import { UploadReceiptResponseDto } from './dto/upload-receipt-response.dto';
import { ReceiptFileResponseDto } from './dto/receipt-file-response.dto';
import { GetUrlFileInputDto } from 'src/files/dto/geturl-file-input.dto';

@Controller('files')
@UseGuards(AuthGuard)
export class FilesController {
  constructor(
    private filesService: FilesService,
    private usersService: UsersService,
  ) {}

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
  async uploadFile(@UploadedFiles() files: UploadFileDto, @Req() req: Request) {
    const user = await this.usersService.findOne(req['user_id']);
    if (user.has_submit_answer) {
      throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
    }
    return this.filesService.uploadFile(files, req['user_id']);
  }

  @Post('upload-receipt')
  @ApiResponse({ status: 200, type: UploadReceiptResponseDto })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  uploadReceipt(
    @UploadedFile() file: Express.Multer.File,
    @Req() req: Request,
  ): Promise<UploadReceiptResponseDto> {
    if (!req['user_id']) {
      throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
    }
    return this.filesService.uploadReceipt(file, req['user_id']);
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
  async getUserFiles(@Req() req: Request): Promise<UserFilesResponseDto> {
    if (!req['user_id']) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    const files = await this.filesService.getUserFiles(req['user_id']);
    if (!files) {
      throw new HttpException('Files not found', HttpStatus.NOT_FOUND);
    }

    const url = await this.filesService.getFile({
      face_photo_key: files.face_photo_filepath,
      thai_nationalid_copy_key: files.thai_nationalid_copy_filepath,
      parent_permission_key: files.parent_permission_filepath,
      p1_key: files.p1_filepath,
      p7_key: files.p7_filepath,
    });

    return {
      face_photo: {
        name: files.face_photo_filepath,
        url: url.face_photo_filepath,
      },
      thai_nationalid_copy: {
        name: files.thai_nationalid_copy_filepath,
        url: url.thai_nationalid_filepath,
      },
      parent_permission: {
        name: files.parent_permission_filepath,
        url: url.parent_permission_filepath,
      },
      p1: {
        name: files.p1_filepath,
        url: url.p1_filepath,
      },
      p7: {
        name: files.p7_filepath,
        url: url.p7_filepath,
      },
    };
  }

  @Post('get-receipt')
  @ApiResponse({ status: 200, type: ReceiptFileResponseDto })
  async getReceipt(
    @Req() req: Request,
    @Body() body: GetReceiptFileDto,
  ): Promise<ReceiptFileResponseDto> {
    if (!req['user_id']) {
      throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
    }
    const receipt_filepath = await this.filesService.getReceiptFile(
      body.receipt_key,
    );
    return receipt_filepath;
  }
}
