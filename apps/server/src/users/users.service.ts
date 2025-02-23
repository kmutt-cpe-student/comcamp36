import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.prisma.user.create({
      data: {
        google_id: createUserDto.google_id,
        email: createUserDto.email,
      },
    });
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  findOne(id: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  findOneByEmail(email: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  update(id: string, updateUserDto: UpdateUserDto, birth: Date): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data: {
        title: updateUserDto.title,
        fullname: updateUserDto.fullname,
        age: 16,
        birth: birth,
        gender: updateUserDto.gender,
        religion: updateUserDto.religion,
        blood_group: updateUserDto.blood_group,
        graduation: updateUserDto.graduation,
        school: updateUserDto.school,
        course: updateUserDto.course,
        telephone: updateUserDto.telephone,
        medical_coverage: updateUserDto.medical_coverage,
        chronic_disease: updateUserDto.chronic_diseas,
        self_medicine: updateUserDto.self_medicine,
        drug_allergic: updateUserDto.drug_allergic,
        food_allergic: updateUserDto.food_allergic,
        prefer_food: updateUserDto.prefer_food,
        address: updateUserDto.address,
        home_phone_tel: updateUserDto.home_phone_tel,
        comcamp_attendance: updateUserDto.comcamp_attendance,
        everyday_attendance: updateUserDto.everyday_attendence,
        has_laptop: updateUserDto.has_laptop,
        travel: updateUserDto.travel,
        parent_fullname: updateUserDto.parent_fullname,
        parent_relation: updateUserDto.parent_relation,
        parent_phone: updateUserDto.parent_phone,
        info_done: true,
      },
    });
  }

  remove(id: string): Promise<User> {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
