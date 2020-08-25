import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PathRouter from './router/PathRouter';


function App() {
  return (
    <div className="container">
      <PathRouter/>
    </div>
  );
}

export default App;
