import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class HunterRankGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const rank = request.headers['x-hunter-rank'];

    return rank === 'Master';
  }
}
