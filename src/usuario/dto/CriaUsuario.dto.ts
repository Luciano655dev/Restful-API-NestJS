/* eslint-disable prettier/prettier */
import {  IsEmail, MinLength, IsNotEmpty } from 'class-validator'

export class CriaUsuarioDTO{

    @IsNotEmpty({ message: 'O nome não pode ser vazio' })
    nome: string;

    @IsEmail(undefined, { message: 'O email informado é inválido' })
    email: string;

    @MinLength(6, { message: 'A senha precisa conter pelo menos 6 dígitos' })
    senha: string;
}