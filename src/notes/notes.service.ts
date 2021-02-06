import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { CreateNoteDto } from './dto/create-note.dto';
import { GetNotesFilter } from './dto/get-notes-filter.dto';
import { NoteRepository } from './note.repository';

@Injectable()
export class NotesService {
    constructor(
        @InjectRepository(NoteRepository)
        private noteRepository: NoteRepository
    ){}

    async getNotes(getNotesFilter: GetNotesFilter, user: User) {
        return this.noteRepository.getNotes(getNotesFilter, user);
    }

    async createNote(createNoteDto: CreateNoteDto, user: User) {
        return this.noteRepository.createNote(createNoteDto, user);
    }
}
