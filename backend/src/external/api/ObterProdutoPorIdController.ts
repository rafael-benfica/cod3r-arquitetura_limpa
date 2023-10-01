import LoginUsuario from "@/core/usuario/service/LoginUsuario"
import { Express } from "express"
import ProvedorJwt from "./ProvedorJwt"
import ObterProdutoPorId from "@/core/produto/service/ObterProdutoPorId"

export default class ObterProdutoPorIdController {
    constructor(
        servidor: Express,
        casoDeUso: ObterProdutoPorId,
        ...middlewares: any[]
    ) {
        servidor.get(
            "/api/produtos/:id",
            ...middlewares,
            async (req, res) => {
                try {
                    const produto =
                        await casoDeUso.executar({
                            produtoId: (req.params as any)
                                .id,
                            usuario: (req as any).usuario,
                        })

                    res.status(200).send(produto)
                } catch (erro: any) {
                    res.status(400).send(erro.message)
                }
            }
        )
    }
}
