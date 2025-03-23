import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateConfirmInfoDto } from './dto/UpdateConfirmInfo.dto';
import { CreateAnswerConfirmDto } from './dto/CreateAnswerConfirm.dto';
import { UpdateConfirmDto } from './dto/UpdateConfirm.dto';

@Injectable()
export class ConfirmationService {
  constructor(private prisma: PrismaService) {}

  findConfirm(userId: string) {
    return this.prisma.confirmation.findUnique({ where: { user_id: userId } });
  }

  updateConfirmInfo(userId: string, updateConfirmDto: UpdateConfirmInfoDto) {
    return this.prisma.confirmation.update({
      where: { user_id: userId },
      data: {
        ...updateConfirmDto,
        isInfoDone: new Date(),
      },
    });
  }

  updateConfirm(userId: string, updateConfirmDto: UpdateConfirmDto) {
    return this.prisma.confirmation.update({
      where: { user_id: userId },
      data: {
        confirmation_status: updateConfirmDto.confirmation_status,
        isConfirmDone: new Date(),
      },
    });
  }

  async createAnswerConfirm(
    userId: string,
    createAnswerConfirmDto: CreateAnswerConfirmDto,
  ) {
    await this.prisma.confirmation.update({
      where: { user_id: userId },
      data: {
        isAnswerDone: new Date(),
      },
    });
    return this.prisma.answerConfirm.upsert({
      where: { user_id: userId },
      create: {
        user_id: userId,
        ...createAnswerConfirmDto,
      },
      update: {
        ...createAnswerConfirmDto,
      },
    });
  }
}
