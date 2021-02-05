import { User } from 'src/auth/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Environment } from './enums/environment.enum';
import { StrainType } from './enums/strain-type.enum';
import { StartingStage } from './enums/starting-stage.enum';
import { Log } from 'src/growLogs/log.entity';

@Entity()
export class Grow extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column()
  grow_name: String;

  @Column()
  strain_type: StrainType;

  @Column()
  strain_name: String;

  @Column()
  starting_stage: StartingStage;

  @Column()
  number_of_plants: Number;

  @Column()
  environment: Environment;

  @ManyToOne((type) => User, (user) => user.grows, { eager: false })
  user: User;

  @Column()
  userId: Number;

  @OneToMany(type => Log, (log) => log.grow, {eager: true})
  logs: Log
}
