import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { SessionService } from 'src/session/session.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private session: SessionService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const session = await this.session.findOneById(request.cookies['sid']);
    if (session) {
      const session = await this.session.findOneById(request.cookies['sid']);

      request['session_id'] = session.sid;
      request['user_id'] = session.user_id;
      return true;
    } else {
      throw new UnauthorizedException();
    }
  }
}
