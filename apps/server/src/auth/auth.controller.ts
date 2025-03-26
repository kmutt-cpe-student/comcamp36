import { GoogleOAuthGuard } from './google-oauth.guard';
import {
  Controller,
  Get,
  Res,
  Req,
  UseGuards,
  HttpStatus,
  Post,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { UsersService } from 'src/users/users.service';
import { SessionService } from 'src/session/session.service';
import { AuthGuard } from './auth.guard';
import { ApiResponse } from '@nestjs/swagger';
import { UserResponseDto } from 'src/users/dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UsersService,
    private sessionService: SessionService,
  ) {}

  @Get('me')
  @UseGuards(AuthGuard)
  @ApiResponse({ status: 200, type: UserResponseDto })
  async me(@Req() req: Request) {
    const user = await this.userService.findOne(req['user_id']);
    delete user.id;
    return user;
  }

  @Get()
  @UseGuards(GoogleOAuthGuard)
  async googleAuth() {}

  @Get('google-redirect')
  @UseGuards(GoogleOAuthGuard)
  async googleAuthRedirect(@Req() req: Request, @Res() res: Response) {
    if (req.user) {
      const profile = req.user as { email: string; googleID: string };
      const user = await this.userService.findOneByEmail(profile.email);

      //Exists
      if (user) {
        const session = await this.sessionService.create(user.id);
        res.cookie('sid', session.sid, {
          maxAge: 1000 * 60 * 60 * 24 * 7, // 1 days
          sameSite: 'lax',
          secure: process.env.NODE_ENV === 'production' ? true : false,
          httpOnly: true,
          domain:
            process.env.NODE_ENV === 'production' ? '.comcamp.io' : 'localhost',
        });
        return res.redirect(process.env.CLIENT_REDIRECT_AUTH_URL);
      } else {
        await this.registerNewUser(profile, res);
        return res.redirect(process.env.CLIENT_REDIRECT_AUTH_URL);
      }
    }
  }

  private async registerNewUser(
    profile: { email: string; googleID: string },
    res: Response<any, Record<string, any>>,
  ) {
    const newUser = await this.userService.create({
      email: profile.email,
      google_id: profile.googleID,
    });
    const session = await this.sessionService.create(newUser.id);
    res.cookie('sid', session.sid, {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 days
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production' ? true : false,
      httpOnly: true,
      domain:
        process.env.NODE_ENV === 'production' ? '.comcamp.io' : 'localhost',
    });
  }

  @Post('logout')
  @UseGuards(AuthGuard)
  async logout(@Req() req: Request, @Res() res: Response) {
    await this.sessionService.delete(req['session_id']);
    res.clearCookie('sid');
    return res.status(HttpStatus.OK).send();
  }
}
