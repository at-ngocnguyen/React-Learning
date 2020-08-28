import React from 'react';
import Footer from 'share/footer/footer';
import Header from 'share/header/header';
import './page.scss';

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
