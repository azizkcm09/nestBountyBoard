import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BountiesController } from './bounties.controller';
import { BountiesService } from './bounties.service';
import { Bounty } from './bounty.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bounty])],
  controllers: [BountiesController],
  providers: [BountiesService],
})
export class BountiesModule {}
