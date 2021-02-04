import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { GrowRepository } from './grow.repository';
import { GrowsController } from './grows.controller';
import { GrowsService } from './grows.service';

@Module({
  imports: [TypeOrmModule.forFeature([GrowRepository]), AuthModule],
  controllers: [GrowsController],
  providers: [GrowsService],
})
export class GrowsModule {}
