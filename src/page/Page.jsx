import React from 'react';
import PathRouter from 'router/PathRouter';
import Footer from 'share/footer/footer';
import Header from 'share/header/header';
import './page.scss';

function Page(props) {
  return (
    <div className="homepage">
      <Header />
      <PathRouter/>
      <Footer />
    </div>
  );
}

export default Page;
