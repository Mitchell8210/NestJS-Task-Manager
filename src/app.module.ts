import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/tpeorm.config';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { GrowsModule } from './grows/grows.module';
import { LogsModule } from './growLogs/logs.module';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    GrowsModule,
    LogsModule,
    NotesModule,
  ],
})
export class AppModule {}
