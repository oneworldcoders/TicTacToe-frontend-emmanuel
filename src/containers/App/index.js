import React from 'react';
import TicTacToe from '../TicTacToe';
import { ToastContainer } from 'react-toastify';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={3000} />
      <TicTacToe />
    </div>
  );
}

export default App;
