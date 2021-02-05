import { EntityRepository, Repository } from 'typeorm';
import { User } from 'src/auth/user.entity';
import { Grow } from './grow.entity';
import { CreateGrowDto } from './dto/create-grow.dto';

@EntityRepository(Grow)
export class GrowRepository extends Repository<Grow> {
  async getGrows(user: User) {
    const query = this.createQueryBuilder('grow');
    query.where('grow.userId = :userId', { userId: user.id });

    const grows = await query.getMany();
    return grows;
  }

  async getGrowById(id: String): Promise<Grow> {
    const query = this.createQueryBuilder('grow');
    
    query.where('grow.id = :id', {id})
    const grow = query.getOne();
    return grow;
  }

  async createGrow(createGrowDto: CreateGrowDto, user: User) {
    const {
      grow_name,
      strain_name,
      strain_type,
      starting_stage,
      number_of_plants,
      environment,
    } = createGrowDto;

    const grow = new Grow();
    grow.grow_name = grow_name;
    grow.strain_name = strain_name;
    grow.strain_type = strain_type;
    grow.starting_stage = starting_stage;
    grow.number_of_plants = number_of_plants;
    grow.environment = environment;
    grow.user = user;

    await grow.save();
    delete grow.user;
    return grow;
  }
}
