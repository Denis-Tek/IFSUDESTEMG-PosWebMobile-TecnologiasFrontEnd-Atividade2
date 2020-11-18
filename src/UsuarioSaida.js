import React, {Component} from 'react';

class UsuarioSaida extends Component{

  Frase = (nome) => {
    if (nome.trim().toUpperCase() == 'JESUS') {
      return '"Disse-lhe Jesus: Eu sou o caminho, e a verdade e a vida; ninguém vem ao Pai, senão por mim." João 14.6'
    } else {
      return '"Porque todos pecaram e destituídos estão da glória de Deus; sendo justificados gratuitamente pela sua graça, pela redenção que há em Cristo Jesus." Romanos 3.23-24'
    }
  }

  render(){
    return(
      <div>
        <p><strong>Seu nome é {this.props.nome.toUpperCase()}!</strong></p>
        <p>{this.Frase(this.props.nome)}</p>
      </div>
    );
  }
}

export default UsuarioSaida;