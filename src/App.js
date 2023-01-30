import React from 'react';
import './App.css';
import Calculator from './components/CalculatorApp';
import { store } from './redux/store';
import { Provider } from 'react-redux'

function App() {
  return (
      <React.Fragment>
        <Calculator />
      </ React.Fragment>
  );
}

export default App;
