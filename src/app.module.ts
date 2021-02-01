import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/tpeorm.config';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TasksModule, TypeOrmModule.forRoot(typeOrmConfig), AuthModule
  ],
})
export class AppModule {}
