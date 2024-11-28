export default abstract class Veiculo {
    //metodos
    abstract calcularTempo(distancia: number): number;

    descrição(): void {
        console.log('Este é um veículo de transporte');
    }
}