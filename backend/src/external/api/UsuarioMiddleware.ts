import Erros from "@/core/shared/Erros"
import { Request, Response, NextFunction } from "express"
import ProvedorJwt from "./ProvedorJwt"
import Usuario from "@/core/usuario/model/Usuario"
import RepositorioUsuario from "@/core/usuario/service/RepositorioUsuario"

export default function UsuarioMiddleware(
    repositorio: RepositorioUsuario
) {
    return async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const acessoNegado = () => {
            res.status(403).send(Erros.TOKEN_INVALIDO)
        }

        const token = req.headers.authorization?.replace(
            "Bearer ",
            ""
        )

        if (!token) {
            acessoNegado()
            return
        }

        const provedorJwt = new ProvedorJwt(
            process.env.JWT_SECRET!
        )
        const usuarioToken = provedorJwt.obter(
            token
        ) as Usuario

        const usuario = await repositorio.buscarPorEmail(
            usuarioToken.email
        )

        if (!usuario) {
            acessoNegado()
            return
        }

        ;(req as any).usuario = usuario
        next()
    }
}
