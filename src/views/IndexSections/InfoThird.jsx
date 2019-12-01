import React from "react";
//import { Link } from "react-router-dom";
// react plugin used to create switch buttons
import "../../assets/demo/demo.css";
import { Card, Col, Row, Container, CardHeader } from "reactstrap";
import "./local.css";
// core components

class InfoThird extends React.Component {
  componentDidMount() {
    // document.body.classList.toggle("");
  }
  componentWillUnmount() {
    //document.body.classList.toggle("");
  }
  render() {
    return (
      <>
        <div
          className="section section-signup"
          style={{
            backgroundImage: "url(" + require("assets/img/pagev5.png") + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center",
            minHeight: "500px"
          }}
        >
          <img
            className="div-img"
            alt="..."
            hight="350"
            width="350"
            align="right"
            src={require("assets/img/love1.png")}
          ></img>

          <Container>
            <div >
              <Row >
                <Col>
                  <Card className="cardsofInfo ">
                    <CardHeader>
                     
                      <div className="card-headerss">Trust and safetyMatch</div>
                    </CardHeader>
                    <div className="card-body">
                      <p className="cardpp">
                        We are powered by the well know and secure<br /> platform
                        WordPress. We care about your privacy<br /> and make sure your
                        data is super safe.
                      </p>
                    </div> 
                     <img
            className="make-top"
            alt="..."
            hight="250px"
            width="250px"
           
            src={require("assets/img/trust.png")}
          ></img>
                   
                  </Card>
                </Col>
                
              </Row>
            
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default InfoThird;
