import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';

import { BountiesService } from './bounties.service';
import { CreateBountyDto } from './dto/create-bounty.dto';

@Controller('bounties')
export class BountiesController {
  constructor(private readonly bountiesService: BountiesService) {}

  // ─────────────────────────────────────────────
  // CREATE BOUNTY
  // POST /bounties
  // ─────────────────────────────────────────────
  @Post()
  create(@Body() createBountyDto: CreateBountyDto) {
    return this.bountiesService.create(createBountyDto);
  }

  // ─────────────────────────────────────────────
  // GET ALL BOUNTIES
  // GET /bounties
  // ─────────────────────────────────────────────
  @Get()
  findAll() {
    return this.bountiesService.findAll();
  }

  // ─────────────────────────────────────────────
  // GET ONE BOUNTY
  // GET /bounties/:id
  // ─────────────────────────────────────────────
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.bountiesService.findOne(id);
  }

  // ─────────────────────────────────────────────
  // UPDATE BOUNTY STATUS
  // PATCH /bounties/:id/status
  // ─────────────────────────────────────────────
  @Patch(':id/status')
  updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status') status: string,
  ) {
    return this.bountiesService.updateStatus(id, status);
  }
}
