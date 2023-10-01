// Na arquitetura hexagonal, esta classe é um Adaptador!

import ProvedorCriptografia from "@/core/usuario/service/ProvedorCriptografia"

// O Adaptador NÃO faz parte do Core da sua aplicação
export default class InverterSenhaCripto
    implements ProvedorCriptografia
{
    criptografar(texto: string): string {
        return texto.split("").reverse().join("")
    }
}
