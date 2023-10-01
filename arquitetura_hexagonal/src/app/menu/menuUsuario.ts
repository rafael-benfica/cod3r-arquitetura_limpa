import TerminalUtil from "@/app/util/TerminalUtil"
import registrarUsuario from "../usuario/registrarUsuario"

export default async function menuUsuario() {
    TerminalUtil.titulo("Usuário")

    const [indice] = await TerminalUtil.menu([
        "1 . Registrar Usuário",
        "voltar",
    ])

    switch (indice) {
        case 0:
            await registrarUsuario()
            break
        default:
            return
    }

    await menuUsuario()
}
