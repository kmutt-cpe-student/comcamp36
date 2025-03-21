import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateConfirmDto } from './dto/UpdateConfirm.dto';
import { CreateAnswerConfirmDto } from './dto/CreateAnswerConfirm.dto';

@Injectable()
export class ConfirmationService {
  constructor(private prisma: PrismaService) {}

  findConfirm(userId: string) {
    return this.prisma.confirmation.findUnique({ where: { user_id: userId } });
  }

  updateConfirm(userId: string, updateConfirmDto: UpdateConfirmDto) {
    const receiptDate = new Date(updateConfirmDto.receipt_datetime);
    return this.prisma.confirmation.update({
      where: { user_id: userId },
      data: {
        ...updateConfirmDto,
        receipt_datetime: receiptDate,
        isAnswerDone: new Date(),
        isConfirmDone: new Date(),
      },
    });
  }

  createAnswerConfirm(
    userId: string,
    createAnswerConfirmDto: CreateAnswerConfirmDto,
  ) {
    return this.prisma.answerConfirm.create({
      data: {
        user_id: userId,
        ...createAnswerConfirmDto,
      },
    });
  }
}
