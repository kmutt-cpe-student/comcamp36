import { Module } from '@nestjs/common';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';

@Module({
  providers: [FilesService],
  controllers: [FilesController],
})
export class FilesModule {}
