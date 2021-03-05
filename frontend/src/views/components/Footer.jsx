import React from 'react';
import { FaTwitter, FaInstagram, FaYoutube, FaTwitch, FaFacebookSquare } from "react-icons/fa";


function Footer() {
  return (


    <div >


      <div className="row">
        <div className="col-md-12">
          <div className="footer p-3 mt-4 text-center footerJIJO footerjujuju text-light">
            Made By <span className="text-warning font-weight-normal">
              Agustín Díaz Cano
            </span>
              <div>
          <FaTwitter></FaTwitter>
          <FaInstagram></FaInstagram>
          <FaYoutube></FaYoutube>
          <FaTwitch></FaTwitch>
          <FaFacebookSquare></FaFacebookSquare>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;