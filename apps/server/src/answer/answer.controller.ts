import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AnswerService } from './answer.service';
import { AuthGuard } from 'src/auth/auth.guard';
import type { Request } from 'express';
import {
  UpsertAnswerAcademicDto,
  UpsertAnswerRegisDto,
} from './dto/upsert-answer.dto';
import { ApiResponse } from '@nestjs/swagger';
import {
  AnswerAcademicResponseDto,
  AnswerRegisResponseDto,
} from './dto/answer-response.dto';

@Controller('answer')
@UseGuards(AuthGuard)
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  //Regis
  // @Post('regis')
  // async createRegis(@Body() createAnswerDto: CreateAnswerRegisDto) {
  //   const answerRegis = await this.answerService.createRegis(createAnswerDto);
  //   if (!answerRegis) {
  //     throw new HttpException('Not found', HttpStatus.NOT_FOUND);
  //   }
  //   return answerRegis;
  // }

  // @Get('regis')
  // findAllRegis() {
  //   return this.answerService.findAllRegis();
  // }

  @Get('user-regis')
  @ApiResponse({ status: 200, type: AnswerRegisResponseDto })
  findRegisWithUser(@Req() req: Request) {
    if (!req['user_id']) {
      throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
    }
    return this.answerService.findOneRegisWithUser(req['user_id']);
  }

  // @Get('regis/:id')
  // async findOneRegis(@Param('id') id: string) {
  //   const answerRegis = await this.answerService.findOneRegis(id);
  //   if (!answerRegis) {
  //     throw new HttpException('Not found', HttpStatus.NOT_FOUND);
  //   }
  //   return answerRegis;
  // }

  // @Patch('regis/:id')
  // updateRegis(
  //   @Param('id') id: string,
  //   @Body() updateAnswerDto: UpdateAnswerRegisDto,
  // ) {
  //   const answerRegis = this.answerService.updateRegis(id, updateAnswerDto);
  //   if (!answerRegis) {
  //     throw new HttpException('Not found', HttpStatus.NOT_FOUND);
  //   }
  //   return answerRegis;
  // }

  @Post('user-regis')
  @ApiResponse({ status: 200, type: AnswerRegisResponseDto })
  upsertRegisWithUser(
    @Req() req: Request,
    @Body() upsertAnswerRegisDto: UpsertAnswerRegisDto,
  ) {
    if (!req['user_id']) {
      throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
    }
    return this.answerService.upsertRegisWithUser(
      req['user_id'],
      upsertAnswerRegisDto,
    );
  }

  //Academic
  // @Post('academic')
  // async createAcademic(@Body() createAnswerDto: CreateAnswerAcademicDto) {
  //   const answerAcademic =
  //     await this.answerService.createAcademic(createAnswerDto);
  //   if (!answerAcademic) {
  //     throw new HttpException('Not found', HttpStatus.NOT_FOUND);
  //   }
  //   return answerAcademic;
  // }

  // @Get('academic')
  // findAllAcademic() {
  //   return this.answerService.findAllAcademic();
  // }

  // @Get('academic/:id')
  // async findAcademic(@Param('id') id: string) {
  //   const answerAcademic = await this.answerService.findOneAcademic(id);
  //   if (!answerAcademic) {
  //     throw new HttpException('Not found', HttpStatus.NOT_FOUND);
  //   }
  //   return answerAcademic;
  // }

  @Get('user-academic')
  @ApiResponse({ status: 200, type: AnswerAcademicResponseDto })
  findAcademicWithUser(@Req() req: Request) {
    if (!req['user_id']) {
      throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
    }
    return this.answerService.findOneAcademicWithUser(req['user_id']);
  }

  @Post('user-academic')
  @ApiResponse({ status: 200, type: AnswerAcademicResponseDto })
  upsertAcademicWithUser(
    @Req() req: Request,
    @Body() upsertAnswerAcademicDto: UpsertAnswerAcademicDto,
  ) {
    if (!req['user_id']) {
      throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
    }
    return this.answerService.upsertAcademicWithUser(
      req['user_id'],
      upsertAnswerAcademicDto,
    );
  }

  // @Patch('academic/:id')
  // async updateAcademic(
  //   @Param('id') id: string,
  //   @Body() updateAnswerDto: UpdateAnswerAcademicDto,
  // ) {
  //   const answerAcademic = await this.answerService.updateAcademic(
  //     id,
  //     updateAnswerDto,
  //   );
  //   if (!answerAcademic) {
  //     throw new HttpException('Not found', HttpStatus.NOT_FOUND);
  //   }
  //   return answerAcademic;
  // }
}
