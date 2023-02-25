/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Get, Put, Param, Delete } from "@nestjs/common";
import { CriaUsuarioDTO } from "./dto/CriaUsuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { UsuarioRepository } from "./usuario.repository";
import { v4 as uuid } from 'uuid'
import { ListaUsuarioDTO } from "./dto/ListaUsuario.dto";
import { AtualizaUsuarioDTO } from "./dto/AtualizaUsuario.dto";

@Controller('/usuarios')
export class UsuarioController {

    constructor(private usuarioRepository: UsuarioRepository) {}

    @Post()
    async criaUsuario(@Body() dadosUsuario: CriaUsuarioDTO){
        const usuarioEntity = new UsuarioEntity()
        usuarioEntity.email = dadosUsuario.email
        usuarioEntity.senha = dadosUsuario.senha
        usuarioEntity.nome = dadosUsuario.nome
        usuarioEntity.id = uuid()

        this.usuarioRepository.salvar(usuarioEntity)
        return { id: new ListaUsuarioDTO(usuarioEntity.id, usuarioEntity.nome), menssagem: 'Usuario criado com sucesso!' };
    }

    @Get()
    async listUsuarios(){
        const usuariosSalvos = await this.usuarioRepository.listar()
        const usuarioLista = usuariosSalvos.map(
            usuario => new ListaUsuarioDTO(
                usuario.id,
                usuario.nome
            )
        )
        return usuarioLista
    }

    @Put('/:id')
    async atualizaUsuario(@Param('id') id: string, @Body() novosDados: AtualizaUsuarioDTO){
        const usuarioAtualizado = this.usuarioRepository.atualiza(id, novosDados)

        return {
            usuario: usuarioAtualizado,
            mensagem: 'Usuario atualizado com sucesso'
        }
    }

    @Delete('/:id')
    async removeUsuario(@Param('id') id: string){
        const usuarioRemovido = await this.usuarioRepository.remove(id)

        return {
            usuario: usuarioRemovido,
            mensagem: 'Usuario removido com sucesso'
        }
    }

}
