import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class DesignsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.design.findMany();
  }

  findOne(id: string) {
    return this.prisma.design.findUnique({
      where: { id },
    });
  }

  create(data: any) {
    return this.prisma.design.create({
      data,
    });
  }

  update(id: string, data: any) {
    return this.prisma.design.update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.design.delete({
      where: { id },
    });
  }
}