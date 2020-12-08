import {Injectable, UnauthorizedException} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import {UsersService} from '../users/users.service';
import {IUsers} from '../users/interfaces/users.interface';
import * as bcrypt from 'bcrypt';
import {JwtPayload} from './interfaces/jwt.payload';
import {LoginDto} from './dto/login.dto';

@Injectable()
export class LoginService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  
  private async validate(loginDto: LoginDto): Promise<IUsers> {
    return await this.usersService.findByEmail(loginDto.email);
  }
  
  public async login(loginDto: LoginDto): Promise<any | { status: number; message: string }> {
    const userData = await this.validate(loginDto);
    if (!userData) {
      throw new UnauthorizedException();
    }
    
    const isPasswordValid = bcrypt.compareSync(loginDto.password, userData.password,);
    
    if (Boolean(!isPasswordValid)) {
      return {
        expiresIn  : -1,
        accessToken: null,
        user       : null,
        message    : 'Authentication failed, wrong credentials.',
        status     : 400,
      };
    }
    
    const payload = {
      name    : userData.name,
      username: userData.username,
      email   : userData.email,
      userId  : userData.userId,
    };
    
    const accessToken = this.jwtService.sign(payload);
    
    return {
      expiresIn  : 3600,
      accessToken: accessToken,
      user       : payload,
      status     : 200,
      message    : 'Login Success!',
    };
  }
  
  public async validateUserByJwt(payload: JwtPayload) {
    const user = await this.usersService.findByEmail(payload.email);
    if (!user) {
      throw new UnauthorizedException();
    }
    return this.createJwtPayload(user);
  }
  
  protected createJwtPayload(user) {
    const data: JwtPayload = {
      email: user.email,
    };
    
    const jwt = this.jwtService.sign(data);
    
    return {
      expiresIn: 3600,
      token    : jwt,
    };
  }
}
