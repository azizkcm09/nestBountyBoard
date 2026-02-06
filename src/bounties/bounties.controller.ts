import { Controller, Get, Post, Patch, Param, Body, UseGuards } from '@nestjs/common';
import { BountiesService } from './bounties.service';
import { CreateBountyDto } from './dto/create-bounty.dto';
import { HunterRankGuard } from '../auth/hunter-rank/hunter-rank.guard';

@Controller('bounties')
export class BountiesController {
  constructor(private readonly bountiesService: BountiesService) {}

  @Get()
  async findAll() {
    return await this.bountiesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.bountiesService.findOne(Number(id));
  }

  @Post()
  async create(@Body() dto: CreateBountyDto) {
    return await this.bountiesService.create(dto.target, dto.reward);
  }

  @UseGuards(HunterRankGuard)
  @Patch(':id/claim')
  async claim(@Param('id') id: string) {
    return await this.bountiesService.updateStatus(Number(id));
  }
}
