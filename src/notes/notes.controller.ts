import { Body, Controller, Get, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { CreateNoteDto } from './dto/create-note.dto';
import { GetNotesFilter } from './dto/get-notes-filter.dto';
import { NotesService } from './notes.service';

@Controller('notes')
@UseGuards(AuthGuard())
export class NotesController {
    constructor(private notesService: NotesService){}

    @Get()
    getNotes(@Body(ValidationPipe) getNotesFilter: GetNotesFilter, @GetUser() user: User) {
        return this.notesService.getNotes(getNotesFilter, user);
    }

    @Post()
    createNote(@Body(ValidationPipe) createNoteDto: CreateNoteDto, @GetUser() user: User) {
        return this.notesService.createNote(createNoteDto, user);
    }
}
