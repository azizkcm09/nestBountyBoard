import { Controller, Get, Post, Patch, Param, Body, UseGuards } from '@nestjs/common';
import { BountiesService } from './bounties.service';
import { CreateBountyDto } from './dto/create-bounty.dto';
import { HunterRankGuard } from '../auth/hunter-rank/hunter-rank.guard';

@Controller('bounties')
export class BountiesController {
  constructor(private readonly bountiesService: BountiesService) {}

  @Get()
  findAll() {
    return this.bountiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bountiesService.findOne(Number(id));
  }

  @Post()
  create(@Body() dto: CreateBountyDto) {
    return this.bountiesService.create(dto.target, dto.reward);
  }

  @UseGuards(HunterRankGuard)
  @Patch(':id/claim')
  claim(@Param('id') id: string) {
    return this.bountiesService.updateStatus(Number(id));
  }
}
