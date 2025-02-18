import { Injectable } from '@nestjs/common';
import {
  CreateAnswerRegisDto,
  CreateAnswerAcademicDto,
} from './dto/create-answer.dto';
import {
  UpdateAnswerRegisDto,
  UpdateAnswerAcademicDto,
} from './dto/update-answer.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { AnswerRegis, AnswerAcademic } from '@prisma/client';

@Injectable()
export class AnswerService {
  constructor(private prisma: PrismaService) {}

  //Regis
  createRegis(
    createAnswerRegisDto: CreateAnswerRegisDto,
  ): Promise<AnswerRegis> {
    return this.prisma.answerRegis.create({
      data: {
        userId: createAnswerRegisDto.userId,
        answer1: createAnswerRegisDto.answer1,
        answer2: createAnswerRegisDto.answer2,
        answer3: createAnswerRegisDto.answer3,
        answer4: createAnswerRegisDto.answer4,
        answer5: createAnswerRegisDto.answer5,
        answer6_1: createAnswerRegisDto.answer6_1,
        answer6_2: createAnswerRegisDto.answer6_2,
      },
    });
  }

  findAllRegis(): Promise<AnswerRegis[]> {
    return this.prisma.answerRegis.findMany();
  }

  findOneRegis(id: string): Promise<AnswerRegis> {
    return this.prisma.answerRegis.findUnique({
      where: { id },
    });
  }

  updateRegis(
    id: string,
    updateAnswerRegisDto: UpdateAnswerRegisDto,
  ): Promise<AnswerRegis> {
    return this.prisma.answerRegis.update({
      where: { id },
      data: {
        ...updateAnswerRegisDto,
      },
    });
  }

  //Academic
  createAcademic(
    createAnswerAcademicDto: CreateAnswerAcademicDto,
  ): Promise<AnswerAcademic> {
    return this.prisma.answerAcademic.create({
      data: {
        userId: createAnswerAcademicDto.userId,
        algo_answer: createAnswerAcademicDto.algo_answer,
        chess_notation: createAnswerAcademicDto.chess_notation,
        chess_score: createAnswerAcademicDto.chess_score,
      },
    });
  }

  findAllAcademic(): Promise<AnswerAcademic[]> {
    return this.prisma.answerAcademic.findMany();
  }

  findOneAcademic(id: string): Promise<AnswerAcademic> {
    return this.prisma.answerAcademic.findUnique({
      where: { id },
    });
  }

  updateAcademic(
    id: string,
    updateAnswerAcademicDto: UpdateAnswerAcademicDto,
  ): Promise<AnswerAcademic> {
    return this.prisma.answerAcademic.update({
      where: { id },
      data: {
        ...updateAnswerAcademicDto,
      },
    });
  }
}
