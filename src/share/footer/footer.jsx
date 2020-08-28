import React from 'react';
import avatar from 'assets/images/avatar.jpg';
import './footer.scss'
function Footer(props) {
  return (
    <footer className="footer">
      <img src={avatar} alt="" />
      <section>
        <h3>Ngoc Nguyen</h3>
        <p className="my_job"><i>Associate Software Engineer</i></p>
        <p><span>P</span> (+84)779592626</p>
        <a className="my_email" href="mailto: nguyenthusongngoc@gmail.com"><span>E</span>: <i>nguyenthusongngoc@gmail.com</i></a>
      </section>

    </footer>
  );
}

export default Footer;
