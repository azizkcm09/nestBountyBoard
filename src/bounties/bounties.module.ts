import { Module } from '@nestjs/common';
import { BountiesController } from './bounties.controller';
import { BountiesService } from './bounties.service';
import { HunterRankGuard } from '../auth/hunter-rank/hunter-rank.guard';

@Module({
  controllers: [BountiesController],
  providers: [BountiesService, HunterRankGuard],
})
export class BountiesModule {}
