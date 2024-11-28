import Veiculo from "./Veiculo";

export default class Moto extends Veiculo {
    // metodos
    calcularTempo(distancia: number): number {
        return distancia / 90;
    }

    // sobrescrevendo o método descrição
    descrição(): void {
        console.log('Esta é uma moto');
    }
}