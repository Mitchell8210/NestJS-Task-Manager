import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { CreateGrowDto } from './dto/create-grow.dto';
import { Grow } from './grow.entity';
import { GrowsService } from './grows.service';

@Controller('grows')
@UseGuards(AuthGuard())
export class GrowsController {
  constructor(private growsService: GrowsService) {}

  @Get()
  getGrows(@GetUser() user: User): Promise<Grow[]> {
    return this.growsService.getGrows(user);
  }

  @Post()
  createGrow(
    @Body(ValidationPipe) createGrowDto: CreateGrowDto,
    @GetUser() user: User,
  ): Promise<Grow> {
    return this.growsService.createGrow(createGrowDto, user);
  }
}
