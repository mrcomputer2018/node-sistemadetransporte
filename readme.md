# Sistema de Transporte - Exercício sobre Classes Abstratas

## **Descrição do Projeto**

Este projeto é parte de um **exercício de sala de aula** que explora o conceito de **classes abstratas** em TypeScript. Ele simula um sistema de transporte que utiliza diferentes tipos de veículos (como caminhões e motos) para calcular o tempo de viagem com base em uma distância fornecida.

O objetivo é demonstrar como as **classes abstratas** podem ser usadas como modelos para definir comportamentos comuns que devem ser implementados por classes derivadas.

---

## **Conceito de Classes Abstratas**

- Uma **classe abstrata** é uma classe que não pode ser instanciada diretamente. Ela serve como um modelo base para outras classes, definindo propriedades ou métodos que as classes derivadas devem implementar.
- No contexto deste projeto, a classe `Veiculo` é a base abstrata que define métodos e comportamentos que os veículos específicos (como `Moto` e `Caminhao`) devem implementar.

---

## **Arquitetura do Projeto**

### **Classes Abstratas**
1. **`Veiculo`**  
   - Classe abstrata que define a estrutura e os métodos que todos os veículos devem implementar:
     - `calcularTempo(distancia: number): number`: Método abstrato que cada veículo implementa de forma diferente.
     - `descrição(): void`: Método que imprime detalhes do veículo.

### **Classes Derivadas**
1. **`Moto`**  
   - Representa uma motocicleta.
   - Implementa os métodos da classe `Veiculo`, como o cálculo do tempo de viagem, considerando a velocidade média da moto.

2. **`Caminhao`**  
   - Representa um caminhão.
   - Implementa os métodos da classe `Veiculo`, ajustando o cálculo de tempo de viagem com base na velocidade média do caminhão.

---

## **Como Funciona**

1. Instanciamos diferentes veículos (`Moto` e `Caminhao`), que herdam de `Veiculo`.
2. Passamos os veículos para a função `simularViagem`, que:
   - Chama os métodos implementados nas subclasses para descrever o veículo.
   - Calcula o tempo de viagem com base na distância fornecida.

---

### **Exemplo de Uso**
Código principal (`main.ts`):
```typescript
import Caminhao from "./classes/Caminhao";
import Moto from "./classes/Moto";
import Veiculo from "./classes/Veiculo";

const moto: Veiculo = new Moto();
const caminhao: Veiculo = new Caminhao();

function simularViagem(objeto: Veiculo, distancia: number): void {
    console.log("\n==============================");
    objeto.descrição();
    console.log(`A viagem terá uma distância de ${distancia} km`);
    console.log(`O tempo estimado da viagem é de ${(objeto.calcularTempo(distancia)).toFixed(2)} horas`);
}

simularViagem(moto, 200);
simularViagem(caminhao, 600);
```

---

### **Saída Esperada**
```
==============================
Veículo: Moto
A viagem terá uma distância de 200 km
O tempo estimado da viagem é de 2.00 horas

==============================
Veículo: Caminhão
A viagem terá uma distância de 600 km
O tempo estimado da viagem é de 10.00 horas
```

---

## **Conceitos Aplicados**

- **Classes Abstratas:** `Veiculo` é a classe abstrata que define o comportamento comum.
- **Polimorfismo:** A função `simularViagem` utiliza o tipo genérico `Veiculo`, permitindo que funcione tanto com `Moto` quanto com `Caminhao`.
- **Herança:** `Moto` e `Caminhao` herdam de `Veiculo` e implementam os métodos abstratos.

---

## **Como Rodar o Projeto**

1. **Clonar o repositório**:
   ```bash
   git clone https://github.com/suarepo/sistema-transporte.git
   cd sistema-transporte
   ```
2. **Instalar as dependências**:
   ```bash
   npm install
   ```
3. **Compilar o TypeScript**:
   ```bash
   npx tsc
   ```
4. **Executar o código**:
   ```bash
   node dist/main.js
   ```

---

## **Objetivo Educacional**

Este exercício reforça o uso de **classes abstratas** e **polimorfismo**, habilidades fundamentais para a programação orientada a objetos (POO). Ele demonstra como projetar sistemas escaláveis e reutilizáveis usando princípios da POO em TypeScript.

Se tiver dúvidas, consulte o professor ou peça auxílio na sala de aula! 🚀