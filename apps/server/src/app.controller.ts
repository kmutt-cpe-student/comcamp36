import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiResponse } from '@nestjs/swagger';
import {
  CheckTelPayloadDto,
  CheckTelResponseDto,
  GetHelloResponseDto,
} from './dto/app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiResponse({ status: 200, type: GetHelloResponseDto })
  getHello(): GetHelloResponseDto {
    return {
      id: 'test',
    };
  }

  @Post()
  @ApiResponse({ status: 200, type: CheckTelResponseDto, isArray: true })
  checkTel(@Body() body: CheckTelPayloadDto) {
    return this.appService.checkTel(body.tel);
  }
}
