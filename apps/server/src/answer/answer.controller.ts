import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  HttpException,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { AnswerService } from './answer.service';
import {
  CreateAnswerRegisDto,
  CreateAnswerAcademicDto,
} from './dto/create-answer.dto';
import {
  UpdateAnswerRegisDto,
  UpdateAnswerAcademicDto,
} from './dto/update-answer.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('answer')
@UseGuards(AuthGuard)
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  //Regis
  @Post('regis')
  async createRegis(@Body() createAnswerDto: CreateAnswerRegisDto) {
    const answerRegis = await this.answerService.createRegis(createAnswerDto);
    if (!answerRegis) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return answerRegis;
  }

  @Get('regis')
  findAllRegis() {
    return this.answerService.findAllRegis();
  }

  @Get('regis:id')
  async findOneRegis(@Param('id') id: string) {
    const answerRegis = await this.answerService.findOneRegis(id);
    if (!answerRegis) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return answerRegis;
  }

  @Patch('regis:id')
  updateRegis(
    @Param('id') id: string,
    @Body() updateAnswerDto: UpdateAnswerRegisDto,
  ) {
    const answerRegis = this.answerService.updateRegis(id, updateAnswerDto);
    if (!answerRegis) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return answerRegis;
  }

  //Academic
  @Post('academic')
  async createAcademic(@Body() createAnswerDto: CreateAnswerAcademicDto) {
    const answerAcademic =
      await this.answerService.createAcademic(createAnswerDto);
    if (!answerAcademic) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return answerAcademic;
  }

  @Get('academic')
  findAllAcademic() {
    return this.answerService.findAllAcademic();
  }

  @Get('academic:id')
  async findAcademic(@Param('id') id: string) {
    const answerAcademic = await this.answerService.findOneAcademic(id);
    if (!answerAcademic) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return answerAcademic;
  }

  @Patch('academic:id')
  async updateAcademic(
    @Param('id') id: string,
    @Body() updateAnswerDto: UpdateAnswerAcademicDto,
  ) {
    const answerAcademic = await this.answerService.updateAcademic(
      id,
      updateAnswerDto,
    );
    if (!answerAcademic) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return answerAcademic;
  }
}
