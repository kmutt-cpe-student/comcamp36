import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import type { Request } from 'express';
import { UserResponseDto } from './dto/user.dto';

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiResponse({
    status: 200,
  })
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    if (!user) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return 'User created successfully';
  }

  @Get()
  @ApiResponse({
    status: 200,
  })
  async findAll() {
    const users = await this.usersService.findAll();
    return users;
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
  })
  async findOne(@Param('id') id: string) {
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  @Patch(':id')
  @ApiResponse({
    status: 200,
  })
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    const birth = new Date(updateUserDto.birth);
    return this.usersService.update(id, updateUserDto, birth);
  }

  @Post('info')
  @ApiResponse({
    status: 200,
    type: UserResponseDto,
  })
  async updateRegister(
    @Req() req: Request,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    if (!req['user_id']) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    const birth = new Date(updateUserDto.birth);
    const user = await this.usersService.update(
      req['user_id'],
      updateUserDto,
      birth,
    );
    return user;
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
  })
  async remove(@Param('id') id: string) {
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    await this.usersService.remove(id);
    return { message: 'success removed' };
  }
}
