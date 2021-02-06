import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Task } from 'src/tasks/task.entity';
import { Grow } from 'src/grows/grow.entity';
import { Log } from 'src/growLogs/log.entity';
import { Note } from 'src/notes/note.entity';
@Entity()
@Unique(['username'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  salt: string;

  @OneToMany((type) => Task, (task) => task.user, { eager: true })
  tasks: Task[];

  @OneToMany((type) => Grow, (grow) => grow.user, { eager: true })
  grows: Grow[];

  @OneToMany((type) => Log, (log) => log.user, {eager: true})
  logs: Log[];

  @OneToMany((type) => Note, (note) => note.user, {eager: true})
  notes: Note[];

  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}
