import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h2>Contact</h2>
            <h1 className="list-unstyled">
              
              <li>Bangkok, Thailand</li>
              <li>Email: Panot5186@gmail.com</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>PRODUCTS</h4>
            <ui className="list-unstyled">
              <li>NIKE</li>
              <li>ADIDAS</li>
              <li>REEBOK</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>ABOUT</h4>
            <ui className="list-unstyled">
              <li>PANOT SINGSITH</li>
              <li>Wutthinun Raroj</li>
              
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;