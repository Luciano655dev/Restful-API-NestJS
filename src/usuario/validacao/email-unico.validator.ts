/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common"
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator"
import { UsuarioRepository } from "../usuario.repository"

@Injectable()
@ValidatorConstraint({ async: true })
export class emailUnicoValidator implements ValidatorConstraintInterface {

    constructor(private usuarioRepository: UsuarioRepository){}

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const usuarioComEmailExiste = await this.usuarioRepository.existeEmail(value)
        return !usuarioComEmailExiste
    }
}

export const EmailUnico = (opcoesValidacao: ValidationOptions) => {
    return (objeto: Object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesValidacao,
            constraints: [],
            validator: emailUnicoValidator
        })
    }
}
