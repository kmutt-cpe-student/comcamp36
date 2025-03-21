import { Module } from '@nestjs/common';
import { ConfirmationService } from './confirmation.service';
import { ConfirmationController } from './confirmation.controller';

@Module({
  controllers: [ConfirmationController],
  providers: [ConfirmationService],
})
export class ConfirmationModule {}
