import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { DesignsModule } from './designs/designs.module.js';
import { PrismaModule } from './prisma/prisma.module.js';

@Module({
  imports: [DesignsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}