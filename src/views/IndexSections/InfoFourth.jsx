import React from "react";
//import { Link } from "react-router-dom";
// react plugin used to create switch buttons
import "../../assets/demo/demo.css";
import { Card, Col, Row, Container, CardHeader } from "reactstrap";
import "./local.css";
// core components

class InfoFourth extends React.Component {
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
            backgroundImage: "url(" + require("assets/img/pagev7.png") + ")",
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
            <div className="content-center">
              <Row className="row-grid justify-content-between align-items-center text-left">
                <Col>
                  <Card className="cardsofInfo ">
                    <CardHeader>
                      <div className="card-headerss">Simple membership</div>
                    </CardHeader>
                    <div className="card-body">
                      <p className="cardpp">
                        Choose from one of our membership levels<br /> and unlock
                        features you need.
                      </p>
                    </div>{" "}
                    <img
                      className="make-top2"
                      alt="..."
                      hight="300px"
                      width="300px"
                      src={require("assets/img/member.png")}
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

export default InfoFourth;
