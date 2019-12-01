import React from "react";
//import { Link } from "react-router-dom";
// react plugin used to create switch buttons
import "../../assets/demo/demo.css";
import { Card, Col, Row, Container, CardHeader } from "reactstrap";
import "./local.css";
// core components

class InfoS extends React.Component {
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
            backgroundImage: "url(" + require("assets/img/pagev3.png") + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center",
            minHeight: "500px"
          }}
        >
          <img
            className="div-img"
            alt="..."
            hight="400"
            width="400"
            align="right"
            src={require("assets/img/love1.png")}
          ></img>

          <Container>
            <div className="heading">
              <p className="p-head">
              How does it work​
              </p>
            </div>

            <div className="content-center">
              <Row className="row-grid justify-content-between align-items-center text-left heading">
                <Col>
                  <Card className="cardsofInfo ">
                    <CardHeader>
                      <img
                        className="card-image"
                        alt="..."
                        hight="120px"
                        width="120px"
                        src={require("assets/img/search.png")}
                      ></img>
                      <div className="card-headers">Search</div>
                    </CardHeader>
                    <div className="card-body">
                      <p className="cardp">
                        The simple steps to follow to have a great experience
                        using this sit. All you have to do is follow your gut
                        and your heart!
                      </p>
                    </div>
                  </Card>
                </Col>

                <Col>
                  <Card className="cardsofInfo ">
                    <CardHeader>
                      <img
                        className="card-image"
                        alt="..."
                        hight="90px"
                        width="90px"
                        src={require("assets/img/match.png")}
                      ></img>
                      <div className="card-headers">Match</div>
                    </CardHeader>
                    <div className="card-body">
                      <p className="cardp">
                        Ready to use and easy to <br />
                        setup matching system. You get to choose users profile
                        fields and percentage that impact the matching result!
                      </p>
                    </div>
                  </Card>
                </Col>
                <Col>
                  <Card className="cardsofInfo ">
                    <CardHeader>
                      <img
                        className="card-image"
                        alt="..."
                        hight="500px"
                        width="500px"
                        src={require("assets/img/find.png")}
                      ></img>
                      <div className="card-headers">Find out</div>
                    </CardHeader>
                    <div className="card-body">
                      <p className="cardp">
                        Users get to create a beautiful profile, add images,
                        write on their wall and start making friends.
                      </p>
                    </div>
                  </Card>
                </Col>
                <Col>
                  <Card className="cardsofInfo ">
                    <CardHeader>
                      <img
                        className="card-image"
                        alt="..."
                        hight="130px"
                        width="130px"
                        src={require("assets/img/live.png")}
                      ></img>
                      <div className="card-headers">Live the story</div>
                    </CardHeader>
                    <div className="card-body">
                      <p className="cardp">
                        It is time for a new generation of theme, Seeko is
                        written to match users requests over time.
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
}

export default InfoS;
