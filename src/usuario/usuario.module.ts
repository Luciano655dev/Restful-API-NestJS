/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioRepository } from "./usuario.repository";
import { emailUnicoValidator } from "./validacao/email-unico.validator";

@Module({
    controllers: [UsuarioController],
    providers: [UsuarioRepository, emailUnicoValidator]
})
export class UsuarioModule{}