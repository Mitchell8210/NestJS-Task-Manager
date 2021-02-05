import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { GrowsService } from 'src/grows/grows.service';
import { CreateLogDto } from './dto/create-log.dto';
import { Log } from './log.entity';
import { LogsService } from './logs.service';

@Controller('logs')
@UseGuards(AuthGuard())
export class LogsController {
    constructor(
        private logsService: LogsService,
        private growsService: GrowsService
    ) {}

    @Get()
    getLogs(@GetUser() user: User): Promise<Log[]> {
        return this.logsService.getLogs(user);
    }

    @Post()
    async createLog(@Body() createLogDto: CreateLogDto, @GetUser() user: User) {
        const {grow_id} = createLogDto;
        // const grow = await this.growsService.getGrowById(grow_id);
        return this.logsService.createLog(createLogDto, user); 
    }
}
