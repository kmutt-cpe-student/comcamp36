import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { AnswerService } from './answer.service';
import {
  CreateAnswerRegisDto,
  CreateAnswerAcademicDto,
} from './dto/create-answer.dto';
import {
  UpdateAnswerRegisDto,
  UpdateAnswerAcademicDto,
} from './dto/update-answer.dto';

@Controller('answer')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  //Regis
  @Post('regis')
  createRegis(@Body() createAnswerDto: CreateAnswerRegisDto) {
    return this.answerService.createRegis(createAnswerDto);
  }

  @Get('regis')
  findAllRegis() {
    return this.answerService.findAllRegis();
  }

  @Get('regis:id')
  findOneRegis(@Param('id') id: string) {
    return this.answerService.findOneRegis(id);
  }

  @Patch('regis:id')
  updateRegis(
    @Param('id') id: string,
    @Body() updateAnswerDto: UpdateAnswerRegisDto,
  ) {
    return this.answerService.updateRegis(id, updateAnswerDto);
  }

  //Academic
  @Post('academic')
  createAcademic(@Body() createAnswerDto: CreateAnswerAcademicDto) {
    return this.answerService.createAcademic(createAnswerDto);
  }

  @Get('academic')
  findAllAcademic() {
    return this.answerService.findAllAcademic();
  }

  @Get('academic:id')
  findAcademic(@Param('id') id: string) {
    return this.answerService.findOneAcademic(id);
  }

  @Patch('academic:id')
  updateAcademic(
    @Param('id') id: string,
    @Body() updateAnswerDto: UpdateAnswerAcademicDto,
  ) {
    return this.answerService.updateAcademic(id, updateAnswerDto);
  }
}
