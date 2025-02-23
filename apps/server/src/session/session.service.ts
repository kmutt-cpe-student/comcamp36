import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Session } from '@prisma/client';

@Injectable()
export class SessionService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Session[]> {
    return this.prisma.session.findMany();
  }

  async findOneById(id: string): Promise<Session> {
    return this.prisma.session.findUnique({ where: { sid: id } });
  }

  async create(userId: string) {
    const now = new Date();
    now.setDate(now.getDate() + 5);
    const newSession = await this.prisma.session.create({
      data: {
        user_id: userId,
        expire: now,
      },
    });
    return newSession;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.session.delete({ where: { sid: id } });
    return;
  }
}
