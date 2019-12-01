import React from "react";

// reactstrap components
import { Container } from "reactstrap";
//import IndexNavbar from "../Navbars/IndexNavbar";
import "../../views/IndexSections/local.css";
//import ExamplesNavbar from "../Navbars/HomeNavbar.jsx";
import "../../assets/demo/demo.css";

// core components

class ProfilePageHeaders  extends React.Component  {
  componentDidMount() {
    document.body.classList.toggle("pro-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("pro-page");
  }
  render() {
  
  return (
    <>
      
      <div className="wrapper">
       {/* <ExamplesNavbar /> */}
        <div className="section">
        <div
          className="page-header-image parallax"
          style={{
            backgroundImage: "url(" + require("assets/img/bg5.jpg") + ")"
          }}
         
        ></div>
        <Container>
          <div className="ppphoto-container">
            <img alt="..." src={require("assets/img/ryan.jpg")}></img>
          </div>
          <h3 className="pptitle">Ryan Scheinder</h3>
          <p className="pptitle">Photographer</p>
          <div className="content">
            <div className="social-description">
              <h2>26</h2>
              <p>Liked</p>
            </div>
            <div className="social-description">
              <h2>26</h2>
              <p>Visited</p>
            </div>
            <div className="social-description">
              <h2>48</h2>
              <p>Loved</p>
            </div>
            <div className="social-description">
              <h2>48</h2>
              <p>Super Loved</p>
            </div>
          </div>
        </Container>
        </div>
        </div>
    </>
  );
}
}

export default ProfilePageHeaders;
