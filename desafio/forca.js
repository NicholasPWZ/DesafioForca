class Forca {
  constructor(pergunta = "") {
    this.pergunta = new Array(...pergunta);
    this.vidas = 6;
    this.letrasChutadas = [];
    this.palavra = new Array(pergunta.length).fill('_');
  }

  chutar(letra) {
    if (letra.length == 1) {
      if (letra.match(/[a-z]/i)) {
        
          if (!this.letrasChutadas.includes(letra)) {
            this.letrasChutadas.push(letra);
          } else {
            return "Esta letra ja foi chutada";
          }
          if (this.pergunta.includes(letra)) {
          for (let j = 0; j < this.pergunta.length; j++) {
            if (letra === this.pergunta[j]) {
              this.palavra[j] = letra;
            }
          }
        } else {
          this.vidas--;
        }
      } else {
        return "Informe uma letra válida";
      }
    } else {
      return "Chute invalido";
    }
  }

  buscarEstado() {
    if (this.vidas === 0) {
      return "perdeu";
    } else if (this.palavra.join("") == this.pergunta.join("")) {
      return "ganhou";
    }

    return "aguardando chute";
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
      vidas: this.vidas, // Quantidade de vidas restantes
      palavra: this.palavra, // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    };
  }
}

module.exports = Forca;
