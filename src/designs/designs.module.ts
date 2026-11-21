import { Module } from '@nestjs/common';
import { DesignsService } from './designs.service.js';
import { DesignsController } from './designs.controller.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  imports: [PrismaModule],
  controllers: [DesignsController],
  providers: [DesignsService],
})
export class DesignsModule {}