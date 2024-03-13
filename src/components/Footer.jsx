

import React from 'react';
import "../style/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>About Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan turpis euismod tortor fringilla, eu facilisis nunc tincidunt.</p>
          </div>
          <div className="col-md-6">
            <h4>Contact Us</h4>
            <p>Email: example@example.com</p>
            <p>Phone: 123-456-7890</p>

          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <p className="text-center">© 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
       
      </div>
    </footer>
  );
}

export default Footer;


