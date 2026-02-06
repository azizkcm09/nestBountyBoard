import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BountiesModule } from './bounties/bounties.module';
import { Bounty } from './bounties/bounty.entity';
import { Planet } from './planets/planet.entity';
import { PlanetsModule } from './planets/planets.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Bounty,Planet],
      synchronize: true, // ⚠️ dev only
    }),
    BountiesModule,
    PlanetsModule,
  ],
})
export class AppModule {}
