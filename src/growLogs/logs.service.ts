import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { Grow } from 'src/grows/grow.entity';
import { CreateLogDto } from './dto/create-log.dto';
import { Log } from './log.entity';
import { LogRepository } from './log.repository';

@Injectable()
export class LogsService {
    constructor(
        @InjectRepository(LogRepository)
        private logRepository: LogRepository
    ) {}

    async getLogs(user: User): Promise<Log[]>{
        return this.logRepository.getLogs(user);
    }

    async createLog(createLogDto: CreateLogDto, user: User) {
        return this.logRepository.createLog(createLogDto, user);
    }
}
