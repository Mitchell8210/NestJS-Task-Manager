import { User } from "src/auth/user.entity";
import { Log } from "src/growLogs/log.entity";
import { Grow } from "src/grows/grow.entity";
import { EntityRepository, getRepository, Repository } from "typeorm";
import { CreateNoteDto } from "./dto/create-note.dto";
import { GetNotesFilter } from "./dto/get-notes-filter.dto";
import { Note } from "./note.entity";


@EntityRepository(Note)
export class NoteRepository extends Repository<Note> {

    async getNotes(getNotesFilter: GetNotesFilter, user: User) {
        const {searchId, searchType} = getNotesFilter;
        const query = this.createQueryBuilder('note')
        query.where('note.userId = :userId', {userId: user.id})
        switch(searchType){
            case 'by_grow':
                 query.andWhere('note.growId = :growId', {growId: searchId})
                 break;
            case 'by_log':
                 query.andWhere('note.logId = :logId', {logId: searchId})
                 break;
            case 'by_user':
                 query.andWhere('note.userId = :userId', {userId: user.id})
                 break;
            default :
                console.log("NO SEARCH PARAM PROVIDED")
                break;
        }
        const notes = query.getMany()
        return notes;
    }

    async createNote(createNoteDto: CreateNoteDto, user: User) {
        const { message, logId} = createNoteDto;
        const note = new Note();
        const logRepo = getRepository(Log)
        const log = await logRepo.findOne({id: logId})
        const growRepo = getRepository(Grow)
        const grow = await growRepo.findOne({id: log.growId})

        note.message = message;
        note.log = log;
        note.grow = grow;
        note.user = user;

       await note.save()
       delete note.user;
       delete note.log;
       delete note.grow;
       return note;
    }
}