/**
 * Fundamentos da POO
 * Abstração - Herança - Poliformismo
 * @author Lucas Santos da Silva
 */
// Abstração (CLasse Modelo)
class bloco {
    //atributos
    constructor(textura, resistencia){
        this.textura = textura
        this.resistencia = resistencia
    }
    //ações
    criarBloco(){
        console.log("---------------------------------------")
        console.log("┏──┓")
        console.log("┗──┛")
        console.log('Bloco de ${this.textura}')
        console.log('Resistência de ${this.resistencia}')
    }
    construir(){
        console.log("Bloco de ${this.textura} colocado.")
    }
    minerar(){
        console.log("□ □ □ □ Recursos obtidos!")
    }
}

// Herança (Subclasse da classe modelo)
class Enxada extends bloco{
    //atributos
    constructor(textura, resistencia,conquista){
        super(textura, resistencia)
        this.conquista = conquista
    }
    // ações
    criarEnxada(){
    console.log("---------------------------------------------")
    console.log("-_")
    console.log(" /")
    console.log("Enxada de ${this:resistencia}")
    }
    arar(){
        console.log("._._._. Terra arada!")
        if (this.conquista === true){
            console.log("*Conquista obtida!") 
        }
    }
    //polimorfismo (sobrescrever o método existente da classe pai)
    minerar(){
    console.log("♰ Dano atribuído")
}
}

/****** MUNDO ********/
console.clear()
console.log("                                                                     // ) ) ")
console.log("    /|    //| |                                                     //   __  ___  ")
console.log("   //|   // | |    ( )   __      ___      ___      __      ___   __//__  __  ___ ")
console.log("  // |  //  | |   / / //   ) ) //___) ) //   ) ) //  ) ) //   ) ) //      / /   ")
console.log(" //  | //   | |  / / //   / / //       //       //      //   / / //      / /    ")
console.log("//   |//    | | / / //   / / ((____   ((____   //      ((___( ( //      / /     ")

// Instanceamento
const bloco1 = new bloco('Terra', 1)
bloco1.criarBloco()
bloco1.construir()
const bloco2 = new bloco('Madeira', 2)
bloco2.criarBloco()
bloco2.construir()
const bloco3 = new bloco('Pedra', 5)
bloco3.criarBloco()
bloco3.construir()

const enxada1 = new Enxada('Madeira',2, false)
enxada1.criarEnxada()
enxada1.arar()
const enxada2 = new Enxada('Ferro',5, true)
enxada2.criarEnxada()
enxada2.arar()
const enxada3 = new Enxada('Diamante',10, false)
enxada3.criarEnxada()
enxada3.arar()

