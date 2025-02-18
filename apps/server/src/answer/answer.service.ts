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
  createRegis(createAnswerRegisDto: CreateAnswerRegisDto) {
    console.log(createAnswerRegisDto);
    return 'This action adds a new answer';
  }

  findAllRegis(): Promise<AnswerRegis[]> {
    return this.prisma.answerRegis.findMany();
  }

  findOneRegis(id: string) {
    return `This action returns a #${id} answer`;
  }

  updateRegis(id: string, updateAnswerRegisDto: UpdateAnswerRegisDto) {
    console.log(updateAnswerRegisDto);
    return `This action updates a #${id} answer`;
  }

  //Academic
  createAcademic(createAnswerAcademicDto: CreateAnswerAcademicDto) {
    console.log(createAnswerAcademicDto);
    return 'This action adds a new answer';
  }

  findAllAcademic(): Promise<AnswerAcademic[]> {
    return this.prisma.answerAcademic.findMany();
  }

  findOneAcademic(id: string) {
    return `This action returns a #${id} answer`;
  }

  updateAcademic(id: string, updateAnswerAcademicDto: UpdateAnswerAcademicDto) {
    console.log(updateAnswerAcademicDto);
    return `This action updates a #${id} answer`;
  }
}
