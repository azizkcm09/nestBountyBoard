import { IsInt, IsNotEmpty, Min } from 'class-validator';

export class CreateBountyDto {
  @IsNotEmpty()
  targetName: string;

  @IsInt()
  @Min(1000)
  reward: number;

  @IsInt()
  planetId: number;
}
