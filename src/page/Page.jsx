import React from 'react';
import './page.scss'
import Header from '../share/header/header';
import Footer from '../share/footer/footer';
function Page(props) {
  return (
    <div className="homepage">
      <Header />
      <main className="main mt-5 mb-5">
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

export default Page;
