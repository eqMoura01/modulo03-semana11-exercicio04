import React from 'react';
import './App.css';

class OlaCidade extends React.Component {
  render() {
    const {cidadeNome} = this.props;

    return (
      <h1>Olá, a cidade da vez é {cidadeNome}.</h1>
    )
  }

}

function App() {
  return (
    <div>
      <OlaCidade cidadeNome="floripa" />
      <OlaCidade cidadeNome="blumenoia" />
      <OlaCidade cidadeNome="biguacity" />
      <OlaCidade cidadeNome="paliosa" />
    </div>
  );
}

export default App;
