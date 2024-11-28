import Veiculo from "./Veiculo";

export default class Caminhao extends Veiculo {
    //metodos
    calcularTempo(distancia: number): number {
        return distancia / 60;
    }

    descrição(): void {
        console.log('Este é um caminhão');
    }
}