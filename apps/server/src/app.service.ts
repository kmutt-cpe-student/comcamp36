import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  isStaging(): string {
    const IS_STAGING = parseInt(process.env.COMCAMP_STAGING) || 0
    return (IS_STAGING === 1) ? ' (Staging env)' : '';
  }
  getHello(): string {
    return 'What are you doing here?' + this.isStaging();
  }
}
