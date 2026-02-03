import { Injectable } from '@nestjs/common';
import { Bounty } from './bounty.interface';

@Injectable()
export class BountiesService {
  private bounties: Bounty[] = [];
  private idCounter = 1;

  findAll(): Bounty[] {
    return this.bounties;
  }

  findOne(id: number): Bounty | undefined {
    return this.bounties.find(b => b.id === id);
  }

  create(target: string, reward: number): Bounty {
    const bounty: Bounty = {
      id: this.idCounter++,
      target,
      reward,
      status: 'OPEN',
    };

    this.bounties.push(bounty);
    return bounty;
  }

  updateStatus(id: number): Bounty | undefined {
    const bounty = this.findOne(id);
    if (bounty) {
      bounty.status = 'CLAIMED';
    }
    return bounty;
  }
}
