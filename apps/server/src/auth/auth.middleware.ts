import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { SessionService } from 'src/session/session.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private session: SessionService) {}
  async use(req: Request, res: Response, next: NextFunction) {
    if (req.cookies['sid']) {
      const session = await this.session.findOneById(req.cookies['sid']);
      if (session) {
        req['session_id'] = session.sid;
        req['user_id'] = session.user_id;
      } else {
        req['session_id'] = null;
        req['user_id'] = null;
      }
    } else {
      req['session_id'] = null;
      req['user_id'] = null;
    }
    next();
  }
}
