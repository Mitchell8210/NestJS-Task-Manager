import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { NoteRepository } from './note.repository';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';

@Module({
  imports: [TypeOrmModule.forFeature([NoteRepository]), AuthModule],
  controllers: [NotesController],
  providers: [NotesService]
})
export class NotesModule {}
