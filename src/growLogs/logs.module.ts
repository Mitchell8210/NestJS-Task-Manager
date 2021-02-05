import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { GrowRepository } from 'src/grows/grow.repository';
import { GrowsService } from 'src/grows/grows.service';
import { LogRepository } from './log.repository';
import { LogsController } from './logs.controller';
import { LogsService } from './logs.service';

@Module({
  imports: [TypeOrmModule.forFeature([LogRepository]), AuthModule],
  controllers: [LogsController],
  providers: [LogsService, GrowsService, GrowRepository]
})
export class LogsModule {}
