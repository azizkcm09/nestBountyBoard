export interface Bounty {
  id: number;
  target: string;
  reward: number;
  status: 'OPEN' | 'CLAIMED';
}
