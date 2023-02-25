/* eslint-disable prettier/prettier */
import {  IsEmail, MinLength, IsNotEmpty, IsOptional } from 'class-validator'
import { EmailUnico } from '../validacao/email-unico.validator';

export class AtualizaUsuarioDTO{

    @IsNotEmpty({ message: 'O nome não pode ser vazio' })
    @IsOptional()
    nome: string;

    @IsEmail(undefined, { message: 'O email informado é inválido' })
    @EmailUnico({message: "Já existe um usuário com este email"})
    @IsOptional()
    email: string;

    @MinLength(6, { message: 'A senha precisa conter pelo menos 6 dígitos' })
    @IsOptional()
    senha: string;
}