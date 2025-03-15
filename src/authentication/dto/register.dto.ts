import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

class RegisterDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(7)
  password: string;
}

export default RegisterDto;
