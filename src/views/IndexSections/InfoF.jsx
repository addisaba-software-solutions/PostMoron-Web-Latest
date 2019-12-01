import React from "react";
//import { Link } from "react-router-dom";
// react plugin used to create switch buttons

import { Container, Col, Card, Row,CardHeader } from "reactstrap";
import "./local.css";
// core components

function InfoF() {
  return (
    <>
      <div
        className="section section-signup"
        style={{
          backgroundImage: "url(" + require("assets/img/pagev2.png") + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "500px"
        }}
      ><img
            className="div-img"
            alt="..."
            hight="400"
            width="400"
            align="right"
            src={require("assets/img/love1.png")}
          ></img>

        <Container>
          
         
            <div className="heading">
              <p>
                {" "}
                Our dating platform is like a breath of fresh air.
                <br />
                Clean and trendy design with ready to use features we are sure
                you will love.
              </p>
            </div>
          
          <div className="content-center">
           
              <Row className="row-grid justify-content-between align-items-center text-left heading">
                
                <Col>
                <Card className="cardsofInfo ">
                <CardHeader>
                     
                      <div className="card-headers2">Simple to use</div>
                    </CardHeader>
                  <div className="card-body">
                    <p className="cardp2">
                    Simple steps to follow to have a matching connection.
                    </p>
                   
                  </div>
                </Card>
              </Col>

              <Col>
              <Card className="cardsofInfo ">
                <CardHeader>
                     
                      <div className="card-headers2">Smart Matching</div>
                    </CardHeader>
                  <div className="card-body">
                    <p className="cardp2">
                    Create connections with users that are like you.
                    </p>
                   
                  </div>
                </Card>
              </Col>
              <Col>
              <Card className="cardsofInfo ">
                <CardHeader>
                     
                      <div className="card-headers2">Filter very fast</div>
                    </CardHeader>
                  <div className="card-body">
                    <p className="cardp2">
                    Don’t waste your time! Find only what you are interested in!
                    </p>
                   
                  </div>
                </Card>
              </Col>
              <Col>
              <Card className="cardsofInfo ">
                <CardHeader>
                     
                      <div className="card-headers2">Cool community</div>
                    </CardHeader>
                  <div className="card-body">
                    <p className="cardp2">
                    BuddyPress network is full of cool members.
                    </p>
                   
                  </div>
                </Card>
              </Col>
              </Row>
            </div>
        </Container>
      </div>
    </>
  );
}

export default InfoF;
