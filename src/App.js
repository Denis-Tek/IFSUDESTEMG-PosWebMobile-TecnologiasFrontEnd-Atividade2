import './App.css';
import React, {Component} from 'react';
import UsuarioEntrada from './UsuarioEntrada';
import UsuarioSaida   from './UsuarioSaida';

class App extends Component {

  constructor(props) {
    super(props);    
    this.state = {Nome: 'Jesus'};
  }   

  render(){    
    return (
      <div className="App">
          <UsuarioEntrada nome={this.state.Nome} trataonchange={NovoNome => this.setState({Nome: NovoNome})}></UsuarioEntrada>
          <UsuarioSaida   nome={this.state.Nome}></UsuarioSaida>
      </div>
    )
  }

}

export default App;
