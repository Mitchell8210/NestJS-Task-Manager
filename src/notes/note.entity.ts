import { User } from "src/auth/user.entity";
import { Log } from "src/growLogs/log.entity";
import { Grow } from "src/grows/grow.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Note extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    message: String;

    @CreateDateColumn()
    created_on: Date;

    @UpdateDateColumn()
    updated_on: Date;

    @ManyToOne((type) => User, (user) => user.notes, {eager: false})
    user: User;

    @ManyToOne((type) => Grow, (grow) => grow.id, {eager: false})
    grow: Grow

    @ManyToOne((type) => Log, (log) => log.notes, {eager: false})
    log: Log;

    @Column()
    userId: Number;

    @Column()
    growId: Number;

    @Column()
    logId: Number;

}