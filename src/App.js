import React from 'react';
import './App.css';
// import './assets/styling/style.scss'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'antd/dist/antd.css';
// import PathRouter from 'Routing/PathRouter';
import Footer from 'layout/Footer';
import Header from 'layout/Header';
import Main from 'layout/Main';

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
    // <PathRouter />
  );
}

export default App;
