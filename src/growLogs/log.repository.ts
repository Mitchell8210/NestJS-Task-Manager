import { User } from "src/auth/user.entity";
import { Grow } from "src/grows/grow.entity";
import { EntityRepository, Repository } from "typeorm";
import { CreateLogDto } from "./dto/create-log.dto";
import { Log } from "./log.entity";


@EntityRepository(Log)
export class LogRepository extends Repository<Log> {


    async getLogs(user: User): Promise<Log[]> {
        const query = this.createQueryBuilder('log');
        query.where(`log.userId = :userId`, {userId: user.id})
        const logs = query.getMany();
        return logs;
    }

    async createLog(createLogDto: CreateLogDto, user: User) {
        const { name, grow_id, notes} = createLogDto;
        console.log("WHAT TYPE", user)
        const grow = user.grows.find(grow => grow.id == grow_id);
        const log = new Log()
        log.name = name;
        log.grow = grow;
        log.user = user;
        log.notes = notes;

        await log.save()
        delete log.user;
        delete log.grow;
        return log;
    }   
}