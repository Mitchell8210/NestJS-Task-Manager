import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { CreateGrowDto } from './dto/create-grow.dto';
import { Grow } from './grow.entity';
import { GrowRepository } from './grow.repository';

@Injectable()
export class GrowsService {
  constructor(
    @InjectRepository(GrowRepository)
    private growRepository: GrowRepository,
  ) {}

  async getGrows(user: User): Promise<Grow[]> {
    return this.growRepository.getGrows(user);
  }

  async createGrow(createGrowDto: CreateGrowDto, user: User): Promise<Grow> {
    return this.growRepository.createGrow(createGrowDto, user);
  }
}
