import {IsEmail, IsNumber, IsOptional, IsString, MinLength} from 'class-validator';
import {ApiModelProperty} from '@nestjs/swagger';

export class UpdateUserDto {

  @IsOptional()
  @IsString()
  @ApiModelProperty()
  firstName?: string;

  @IsOptional()
  @IsString()
  @ApiModelProperty()
  lastName?: string;

  @IsOptional()
  @IsNumber()
  @ApiModelProperty()
  age?: number;

  @IsOptional()
  @IsEmail()
  @ApiModelProperty()
  email?: string;

}