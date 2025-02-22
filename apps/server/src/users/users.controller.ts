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
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('users')
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
  findAll() {
    return this.usersService.findAll();
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
    return this.usersService.update(id, updateUserDto);
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
