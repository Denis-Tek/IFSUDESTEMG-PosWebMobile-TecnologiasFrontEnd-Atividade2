import React, {Component} from 'react';

class UsuarioEntrada extends Component{
 
  render(){
    return(
      <div className="login">
        <input type="text" 
               value={this.props.nome} 
               onChange={event => this.props.trataonchange(event.target.value)} 
               title="Experimente alguém diferente de Jesus e depois retorne para Jesus"></input>
      </div>
    );
  }

}

export default UsuarioEntrada;