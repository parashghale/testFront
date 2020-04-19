import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <MDBFooter  className="font-small pt-4 mt-4 footer footer-sec p-5">
      <MDBContainer fluid className=" footer-body text-center p-5">
        <MDBRow>
          <MDBCol md="12">
          <img className="img-property" src="/logo1.png" alt="logo" />
          <h2 className="pb-3">Grihasti Real Estate</h2>
            <p>22C Batch , Softwarica College of IT</p>
            <p>Info@Grihasti.com</p>
            <p>Phone: (+977-9812774720)</p>
            
          </MDBCol>
          <MDBCol md="12" className="text-center">
            
            <ul className="footer-ul">
              <li className="list-unstyled text-center footer-nav">
                <Link to="/">Home</Link>
              </li>
              <li className="list-unstyled text-center  footer-nav">
               <Link to="/about">About us</Link>
              </li>
              <li className="list-unstyled text-center  footer-nav">
              <Link to="/contact">Contact us</Link>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <Link to="/">Grihasti.com</Link>
        </MDBContainer>
      </div>
    </MDBFooter>


  );
}

export default Footer;