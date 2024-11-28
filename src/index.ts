import Caminhao from "./classes/Caminhao"
import Moto from "./classes/Moto"
import Veiculo from "./classes/Veiculo"

const moto: Veiculo = new Moto()
const caminhao = new Caminhao()

function simularViagem(objeto: Veiculo, distancia: number): void {
    console.log("\n==============================")
    objeto.descrição()
    console.log(`A viagem terá uma distância de ${distancia} km`)
    console.log(`O tempo estimado da viagem é de ${(objeto.calcularTempo(distancia)).toFixed(2)}horas`)
}

simularViagem (moto, 200)
simularViagem (caminhao, 600)