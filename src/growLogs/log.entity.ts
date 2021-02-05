import { User } from "src/auth/user.entity";
import { Grow } from "src/grows/grow.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Log extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    name: String;

    @Column()
    notes: String;

    @ManyToOne((type) => Grow, (grow) => grow.logs, { eager: false })
    grow: Grow;

    @Column()
    growId: Number;

    @ManyToOne((type) => User, (user) => user.logs, {eager: false})
    user: User

    @Column()
    userId: Number;
}