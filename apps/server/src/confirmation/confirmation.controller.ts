import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ConfirmationService } from './confirmation.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { UpdateConfirmDto } from './dto/UpdateConfirm.dto';
import { CreateAnswerConfirmDto } from './dto/CreateAnswerConfirm.dto';
import { ApiResponse } from '@nestjs/swagger';
import { ConfirmResponseDto } from './dto/ConfirmResponse.dto';
import { AnswerConfirmResponseDto } from './dto/AnswerConfirmResponse.dto';

@Controller('confirmation')
@UseGuards(AuthGuard)
export class ConfirmationController {
  constructor(private readonly confirmationService: ConfirmationService) {}

  @Get('user-confirmation')
  @ApiResponse({ status: 200, type: ConfirmResponseDto })
  async getUserConfirmation(@Req() req: Request) {
    if (!req['user_id']) {
      throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
    }
    const confirm = await this.confirmationService.findConfirm(req['user_id']);
    if (!confirm) {
      return { isPassed: false, confirm: null };
    }
    return { isPassed: true, confirm };
  }

  @Post('user-confirmation')
  @ApiResponse({ status: 200, type: ConfirmResponseDto })
  async updateUserConfirmation(
    @Req() req: Request,
    @Body() updateConfirmDto: UpdateConfirmDto,
  ) {
    if (!req['user_id']) {
      throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
    }
    const confirm = await this.confirmationService.findConfirm(req['user_id']);
    if (!confirm) {
      throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
    }
    return this.confirmationService.updateConfirm(
      req['user_id'],
      updateConfirmDto,
    );
  }

  @Post('user-answer-confirmation')
  @ApiResponse({ status: 200, type: AnswerConfirmResponseDto })
  async createUserAnswerConfirmation(
    @Req() req: Request,
    @Body() createAnswerConfirmDto: CreateAnswerConfirmDto,
  ) {
    if (!req['user_id']) {
      throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
    }
    const confirm = await this.confirmationService.findConfirm(req['user_id']);
    if (!confirm) {
      throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
    }
    return this.confirmationService.createAnswerConfirm(
      req['user_id'],
      createAnswerConfirmDto,
    );
  }
}
