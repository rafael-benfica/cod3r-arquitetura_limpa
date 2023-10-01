// Na arquitetura hexagonal, esta interface é uma Porta!
// A Porta faz parte do Core da sua aplicação
export default interface ProvedorCriptografia {
    criptografar(texto: string): string
    comparar(
        senha: string,
        senhaCriptografada: string
    ): boolean
}
