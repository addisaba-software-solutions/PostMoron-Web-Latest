import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  
  Container,Row,Col
} from "reactstrap";
import '../../views/IndexSections/local.css'
// core components

class ThirdPage extends React.Component  {
  componentDidMount() {
    document.body.classList.toggle("third-form");
  }
  componentWillUnmount() {
    document.body.classList.toggle("third-form");
  }
  render() {
        return ( 
          <>
        
        
        
        
        <div
        className="section section-signup"
        style={{
          backgroundImage: "url(" + require("assets/img/page4.png") + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "700px"
        }}
      >
        <Container>
        <div >
        <img
              alt="..."
            
              hight="400"
              width="400"
              align="right"
              src={require("assets/img/love1.png")}
            ></img>
            
          </div>
         
          
       
          <Row className="row_pad">
    <Col className="col-sm">
    <img
              alt="..."
              width="100px"
              hight="100px"
              className="img-fluid rounded-circle shadow-lg"
              align="right"
              src={require("assets/img/ryan.jpg")}
            ></img>
    </Col>
    <Col className="col-sm">
    <img
              alt="..."
              width="100px"
              hight="100px"
              className="img-fluid rounded-circle shadow-lg"
              align="right"
              src={require("assets/img/ryan.jpg")}
            ></img>
    </Col>
    <Col className="col-sm">
    <img
              alt="..."
              width="100px"
              hight="100px"
              className="img-fluid rounded-circle shadow-lg"
              align="right"
              src={require("assets/img/ryan.jpg")}
            ></img>
    </Col>
    <Col className="col-sm">
    <img
              alt="..."
              width="100px"
              hight="100px"
              className="img-fluid rounded-circle shadow-lg"
              align="right"
              src={require("assets/img/ryan.jpg")}
            ></img>
    </Col>
    <Col className="col-sm">
    <img
              alt="..."
              width="100px"
              hight="100px"
              className="img-fluid rounded-circle shadow-lg"
              align="right"
              src={require("assets/img/ryan.jpg")}
            ></img>
    </Col>
    <Col className="col-sm">
    <img
              alt="..."
              width="100px"
              hight="100px"
              className="img-fluid rounded-circle shadow-lg"
              align="right"
              src={require("assets/img/ryan.jpg")}
            ></img>
    </Col>
  </Row>

  <Row className="row_pad">
    <Col className="col-sm">
    <img
              alt="..."
              width="100px"
              hight="100px"
              className="img-fluid rounded-circle shadow-lg"
              align="right"
              src={require("assets/img/ryan.jpg")}
            ></img>
    </Col>
    <Col className="col-sm">
    <img
              alt="..."
              width="100px"
              hight="100px"
              className="img-fluid rounded-circle shadow-lg"
              align="right"
              src={require("assets/img/ryan.jpg")}
            ></img>
    </Col>
    <Col className="col-sm">
    <img
              alt="..."
              width="100px"
              hight="100px"
              className="img-fluid rounded-circle shadow-lg"
              align="right"
              src={require("assets/img/ryan.jpg")}
            ></img>
    </Col>
    <Col className="col-sm">
    <img
              alt="..."
              width="100px"
              hight="100px"
              className="img-fluid rounded-circle shadow-lg"
              align="right"
              src={require("assets/img/ryan.jpg")}
            ></img>
    </Col>
    <Col className="col-sm">
    <img
              alt="..."
              width="100px"
              hight="100px"
              className="img-fluid rounded-circle shadow-lg"
              align="right"
              src={require("assets/img/ryan.jpg")}
            ></img>
    </Col>
    <Col className="col-sm">
    <img
              alt="..."
              width="100px"
              hight="100px"
              className="img-fluid rounded-circle shadow-lg"
              align="right"
              src={require("assets/img/ryan.jpg")}
            ></img>
    </Col>
  </Row>

  <Row className="row_pad">
    <Col className="col-sm">
    <img
              alt="..."
              width="100px"
              hight="100px"
              className="img-fluid rounded-circle shadow-lg"
              align="right"
              src={require("assets/img/ryan.jpg")}
            ></img>
    </Col>
    <Col className="col-sm">
    <img
              alt="..."
              width="100px"
              hight="100px"
              className="img-fluid rounded-circle shadow-lg"
              align="right"
              src={require("assets/img/ryan.jpg")}
            ></img>
    </Col>
    <Col className="col-sm">
    <img
              alt="..."
              width="100px"
              hight="100px"
              className="img-fluid rounded-circle shadow-lg"
              align="right"
              src={require("assets/img/ryan.jpg")}
            ></img>
    </Col>
    <Col className="col-sm">
    <img
              alt="..."
              width="100px"
              hight="100px"
              className="img-fluid rounded-circle shadow-lg"
              align="right"
              src={require("assets/img/ryan.jpg")}
            ></img>
    </Col>
    <Col className="col-sm">
    <img
              alt="..."
              width="100px"
              hight="100px"
              className="img-fluid rounded-circle shadow-lg"
              align="right"
              src={require("assets/img/ryan.jpg")}
            ></img>
    </Col>
    <Col className="col-sm">
    <img
              alt="..."
              width="100px"
              hight="100px"
              className="img-fluid rounded-circle shadow-lg"
              align="right"
              src={require("assets/img/ryan.jpg")}
            ></img>
    </Col>
  </Row>

  
  <Link
            className="btn-icon btn btn-primary   shadow btn-circle btn-b   mar_center "
            tag={Link}
            to="/fourth-form"
            id="btn-submit"
            onClick={this}
          >
             <img alt="..." className="faa-passing animated downs"  src={require("assets/img/firstform/arrow.png")} width="20px" height="20px"></img>
            
          </Link>
   


















        </Container>
      </div>
        
        
     
        </> );
    }
  }

 
export default ThirdPage;