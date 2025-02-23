import { Module } from '@nestjs/common';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    UsersModule
  ],
  providers: [FilesService],
  controllers: [FilesController],
})
export class FilesModule {}
