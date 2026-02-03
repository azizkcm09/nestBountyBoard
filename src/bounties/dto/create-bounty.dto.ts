import { IsString, IsInt, Min } from 'class-validator';

export class CreateBountyDto {
  @IsString()
  target: string;

  @IsInt()
  @Min(1000)
  reward: number;
}
