import corrida from "@/core/fundamentos/corrida"
import TerminalUtil from "../util/TerminalUtil"
import Fusca from "@/core/fundamentos/Fusca"
import { terminal } from "terminal-kit"
import Ferrari from "@/core/fundamentos/Ferrari"
import Carro from "@/core/fundamentos/Carro"
import Civic from "@/core/fundamentos/Civic"

export default async function dip() {
    TerminalUtil.titulo("DIP")

    const [tipo] = await TerminalUtil.selecao(
        "Tipo de Carro?",
        ["Fusca", "Civic", "Ferrari"]
    )

    let carro: Carro

    switch (tipo) {
        case 0:
            carro = new Fusca()
            break
        case 1:
            carro = new Civic()
            break
        default:
            carro = new Ferrari()
            break
    }

    corrida(carro, terminal.red)

    await TerminalUtil.esperarEnter()
}
