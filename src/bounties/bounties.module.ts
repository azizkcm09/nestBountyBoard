import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BountiesController } from './bounties.controller';
import { BountiesService } from './bounties.service';
import { Bounty } from './bounty.entity';
import { Planet } from 'src/planets/planet.entity/planet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bounty,Planet])],
  controllers: [BountiesController],
  providers: [BountiesService],
})
export class BountiesModule {}
