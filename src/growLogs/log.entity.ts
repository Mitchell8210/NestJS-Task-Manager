import { User } from "src/auth/user.entity";
import { Grow } from "src/grows/grow.entity";
import { Note } from "src/notes/note.entity";
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Log extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    name: String;

    @OneToMany((type) => Note, (note) => note.log, {eager: true})
    notes: Note[]


    @ManyToOne((type) => Grow, (grow) => grow.logs, { eager: false })
    grow: Grow;

    @Column()
    growId: Number;

    @ManyToOne((type) => User, (user) => user.logs, {eager: false})
    user: User

    @Column()
    userId: Number;
}