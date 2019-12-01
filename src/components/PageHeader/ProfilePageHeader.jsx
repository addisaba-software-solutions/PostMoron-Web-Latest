import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
// reactstrap components
import {
  Button,

  CardHeader,

  CardFooter,
  CardBody,
  Container,
  Row,
  Col,
  Card
} from "reactstrap";
//import IndexNavbar from "../Navbars/IndexNavbar";
import "../../views/IndexSections/local.css";
import ExamplesNavbar from "../Navbars/HomeNavbar.jsx";
import ProfilePageHeaders from "./ProfilePageHeaders"
import axios from 'axios'
import { connect } from 'react-redux'
import API from './../../api.jsx'
import { getProfile, profile } from './../../store/userAction';
import URL from './../../apiImage'

// core components

class ProfilePageHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      errors: {},
    }
  }
  componentDidMount() {
    var email = this.props.location.visited;
    if (email) {
      localStorage.setItem('profile_email', email);
    }
    this.props.getProfile(localStorage.getItem('profile_email'));

    document.body.classList.toggle("pro-pages");

  }
  componentWillUnmount() {
    document.body.classList.toggle("pro-pages");
  }
  getPostById = () => {
    alert();
  }
  like(email) {
    axios.request({
      method: 'get',
      url: API + '/profile-like',
      params: {
        liker: localStorage.getItem('email'),
        liked: email,
      },
    })
      .then((users) => {
        this.props.getProfile(localStorage.getItem('profile_email'));
      })
      .catch(ex => {
        console.log("ex", ex);
      })
  }

  love(email) {

    axios.request({
      method: 'get',
      url: API + '/profile-love',
      params: {
        lover: localStorage.getItem('email'),
        loved: email,
      },
    })
      .then((users) => {
        this.props.getProfile(localStorage.getItem('profile_email'));
      })
      .catch(ex => {
        this.props.getProfile(localStorage.getItem('profile_email'));
      })
  }

  superLoved(email) {
    axios.request({
      method: 'get',
      url: API + '/profile-s_love',
      params: {
        super_lover: localStorage.getItem('email'),
        super_loved: email,
      },
    })
      .then((users) => {
        this.props.getProfile(localStorage.getItem('profile_email'));
      })
      .catch(ex => {
        this.props.getProfile(localStorage.getItem('profile_email'));
      })
  }
  render() {

    return (
      <>
        <ExamplesNavbar />
        {
          this.props.profile.map(data => {
            return (
              <div>
                <div className="wrapper">
                  <div className="wrapper">
                    <div className="section">
                      <div
                        className="page-header-image parallax"
                        style={{
                          backgroundImage: "url(" + require("assets/img/bg5.jpg") + ")"
                        }}

                      ></div>
                      <Container>
                        <div className="ppphoto-container">
                          <img alt="..." src={URL + data.image} ></img>
                        </div>
                        <h3 className="pptitle">{data.firstName} {data.firstName}</h3>
                        <p className="pptitle">{data.email}</p>
                        <div className="content">
                          <div className="social-description">
                            <h2>{data.profile_likes_count}</h2>
                            <p>Liked</p>
                          </div>
                          <div className="social-description">
                            <h2>{data.profile_visited_count}</h2>
                            <p>Visited</p>
                          </div>
                          <div className="social-description">
                            <h2>{data.profile_loves_count}</h2>
                            <p>Loved</p>
                          </div>
                          <div className="social-description">
                            <h2>{data.profile_super_loves_count}</h2>
                            <p>Super Loved</p>
                          </div>
                          <div className="social-description">
                            <h2>
                              <Link style={{ fontSize: "17px" }}
                                className="col-lg-2 "
                                to="/profile-post"
                              ><i class='fa fa-arrow-right glypicon_color faa-passing animated'></i></Link></h2>
                            <p>timelines</p>
                          </div>
                        </div>
                      </Container>
                    </div>
                  </div>
                  <div className="section">

                    <Container>
                      <div className="ppbutton-container">

                        <Button
                          className="btn-icon btn btn-primary   shadow btn-circle btn-lg"
                          color="transparent"
                          type="button"
                          onClick={() => this.like(data.email)}
                        >
                          <img alt="..." src={require("assets/img/mat/liked3.png")} width="30px" height="25px"></img>
                        </Button>


                        <Button
                          className="btn-icon btn btn-primary   shadow btn-circle btn-lg"
                          color="primary"
                          type="button"
                          onClick={() => this.love(data.email)}
                        >
                          <i className="tim-icons icon-heart-2" />
                        </Button>
                        <Button
                          className="btn-icon btn btn-primary   shadow btn-circle btn-lg"
                          color="primary"
                          type="button"
                          onClick={() => this.superLoved(data.email)}
                        >
                          <img alt="..." src={require("assets/img/mat/superloved.png")} width="30px" height="25px"></img>
                        </Button>

                      </div>

                      <Row>
                        <Col>
                          <Card>
                            <CardHeader>
                              <h3 className="ppptitle">About me</h3>

                            </CardHeader>
                            <CardBody>
                              <h5 className="ppdescription">
                                An artist of considerable range, Ryan — the name taken by
                                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                                and records all of his own music, giving it a warm, intimate feel
                                with a solid groove structure. An artist of considerable range.
            </h5>

                            </CardBody>
                            <CardFooter>


                            </CardFooter>

                          </Card>
                        </Col>
                        <Col>

                          <Card>
                            <CardHeader>
                              <h3 className="ppptitle">HOBBIES</h3>

                            </CardHeader>
                            <CardBody>
                              <h5 className="ppdescription">
                                An artist of considerable range, Ryan — the name taken by
                                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                                and records all of his own music, giving it a warm, intimate feel
                                with a solid groove structure. An artist of considerable range.
            </h5>

                            </CardBody>
                            <CardFooter>


                            </CardFooter>

                          </Card>
                        </Col>

                      </Row>
                      <Row>
                        <Col>

                          <Card width="500px" height="500px">
                            <CardHeader>
                              <h3 className="ppptitle">Photos</h3>

                            </CardHeader>
                            <CardBody className="justify-content-md-center">
                              <Row className="justify-content-md-center" width="500px" height="500px">
                                <Col>

                                  <img alt="..." src={URL + data.image} width="200px" height="200px"></img>
                                </Col>
                                <Col>
                                  <img alt="..." src={URL + data.image} width="200px" height="200px"></img>
                                </Col>
                                <Col>
                                  <img alt="..." src={URL + data.image} width="200px" height="200px"></img>
                                </Col>
                                <Col>
                                  <img alt="..." src={URL + data.image} width="200px" height="200px"></img>
                                </Col>
                              </Row>


                            </CardBody>
                            <CardFooter>


                            </CardFooter>

                          </Card>

                        </Col>
                      </Row>
                    </Container>
                  </div>
                </div>
              </div>
            )
          })
        }
      </>
    );
  }
}
function mapStateToProps(state) {
  return {
    profile: state.capd.profile,
  }
}


const mapDispatchToProps = {
  getProfile
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePageHeader);
