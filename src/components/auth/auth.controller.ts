import {
  Body, Controller, Get, Post, UnauthorizedException, UseGuards, Res, Query, Put,
  BadRequestException,
} from '@nestjs/common';
import { Response } from 'express';
import {ApiBearerAuth, ApiOperation, ApiUseTags} from '@nestjs/swagger';
import {LoginDto} from './dto/login.dto';
import {UsersService} from '../users/services/users.service';
import {Messages} from '../../helpers/enums/messages.enum';
import {JwtResponse} from './interfaces/jwt-response';
import {AuthService} from './auth.service';
import {HashService} from '../core/services/hash.service';
import {ExchangeTokenDto} from './dto/exchangeToken.dto';
import {AuthGuard} from '@nestjs/passport';
import {ReqUser} from '../../helpers/decorators/user.decorator';
import {User} from '../users/user.entity';
import {ChangePasswordDto} from './dto/change-password.dto';
import { VerifyEmailDto } from '../email-verification/dto/verify-email.dto';

@Controller('auth')
@ApiUseTags('Auth')
export class AuthController {

  constructor(
    private readonly usersService: UsersService,
    private readonly hashService: HashService,
    private readonly authService: AuthService,
  ) {}

  @Post('login')
  @ApiOperation({ title: 'Login for generating access token' })
  async login(@Body() payload: LoginDto): Promise<JwtResponse> {
    const user = await this.usersService.findOneByEmail(payload.email, true);

    if (!user) {
      throw new UnauthorizedException(Messages.USER_NOT_FOUND);
    }

    const isValidPassword = await this.hashService.compareHash(payload.password, user.password);

    if (!isValidPassword)  {
      throw new UnauthorizedException(Messages.INVALID_PASSWORD);
    }

    return await this.authService.singIn(user);
  }

  @Post('token')
  @ApiOperation({ title: 'Exchange refresh token for new access token' })
  async exchangeToken(@Body() payload: ExchangeTokenDto): Promise<JwtResponse> {
   return await this.authService.exchangeToken(payload.refreshToken);
  }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  @ApiOperation({ title: 'Login via google' })
  googleLogin() {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  @ApiOperation({ title: 'Callback for google authentication' })
  async googleLoginCallback(@ReqUser() user: User | null, @Res() res: Response): Promise<void> {
    if (user) {
      res.redirect(`/auth/google/success?userId=${user.id}`);
    } else {
      res.redirect('/auth/google/fail');
    }
  }

  @Get('google/success')
  @ApiOperation({ title: 'Google success authentication' })
  async googleSuccess(@Query('userId') userId: string | number): Promise<JwtResponse | void> {
    const user = await this.usersService.findOne(+userId);
    if (user) {
      return await this.authService.singIn(user);

    }
  }

  @Get('google/fail')
  @ApiOperation({ title: 'Google failed authentication' })
  async googleFail(): Promise<UnauthorizedException> {
    return new UnauthorizedException(Messages.FAILED_GOOGLE_AUTH);
  }

  @Put('changePassword')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ title: 'Create new password' })
  async changePassword(@ReqUser() user: User, @Body() payload: ChangePasswordDto): Promise<void> {
    const isValid = await this.hashService.compareHash(payload.oldPassword, user.password);

    if (!isValid) {
      throw new BadRequestException(Messages.INVALID_PASSWORD);
    }

    const newPassword = await this.hashService.generateHash(payload.newPassword);

    return await this.usersService.updateOne(user.id, { password: newPassword });
  }

  @Post('verifyEmail')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ title: 'Verify your email' })
  async verifyEmail(@Body() body: VerifyEmailDto) {

  }
}