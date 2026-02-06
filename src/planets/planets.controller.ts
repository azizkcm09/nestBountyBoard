import {
  Controller,
  Post,
  Get,
  Patch,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { PlanetsService } from './planets.service';

@Controller('planets')
export class PlanetsController {
  constructor(private readonly planetsService: PlanetsService) {}

  @Post()
  create(@Body('name') name: string) {
    return this.planetsService.create(name);
  }

  @Get()
  findAll() {
    return this.planetsService.findAll();
  }

  @Patch(':id/destroy')
  destroy(@Param('id', ParseIntPipe) id: number) {
    return this.planetsService.destroy(id);
  }
}
