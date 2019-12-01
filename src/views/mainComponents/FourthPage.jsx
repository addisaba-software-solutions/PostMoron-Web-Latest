import React from "react";
import { Link } from "react-router-dom";
// react plugin used to create switch buttons
import classnames from "classnames";
import "../../views/IndexSections/local.css";
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";
import axios from 'axios'
import Swal from 'sweetalert2'
import API from './../../api.jsx'
import Error from './../../error/Error.jsx'
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroup,
  Container,
  FormGroup,
  Col
} from "reactstrap";

import Datetime from "react-datetime";
import moment from "moment";
// core components

// var moment = require('moment');
// moment().format();

class FourthPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: "",
      live: "",
      birthday:  moment(),
      firstName: '',
      lastName: '',
      email: "",
      phone: "",
      password: "",
      c_password: "",
      errors: {},
    };
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleBirthday = this.handleBirthday.bind(this);

  }

  state = {
    squares1to6: "",
    squares7and8: ""
  };
  componentDidMount() {
    document.body.classList.toggle("fourth-form");
    document.documentElement.addEventListener("mousemove", this.followCursor);
  }
  componentWillUnmount() {
    document.body.classList.toggle("fourth-form");
    document.documentElement.removeEventListener(
      "mousemove",
      this.followCursor
    );
  }
  followCursor = event => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    this.setState({
      squares1to6:
        "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)",
      squares7and8:
        "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    });
  };

  onFocus = () => {
    this.setState({
      focused: "input-group-focus"
    });
  };
  onBlur = () => {
    this.setState({
      focused: ""
    });
  };

  onSubmit = (e) => {
    e.preventDefault();


    const fd = new FormData();
    // alert(this.state.birthday)

    fd.append('live', this.state.live);
    fd.append('birthday', this.state.birthday);
    fd.append('firstName', this.state.firstName);
    fd.append('lastName', this.state.lastName);
    fd.append('phone', this.state.phone);
    fd.append('password', this.state.password);
    fd.append('confirm_password', this.state.c_password);

    axios.post(API + '/validate-fourth', fd, {
      method: 'post',
    })
      .then((res) => {
        console.log("suc", res.data);
        if (res.data.error) {
          console.log("suc", res.data.error);
          this.setState({
            errors: res.data.error
          })
        }
        else {
          localStorage.setItem('live', this.state.live);
          localStorage.setItem('birthday', this.state.birthday);
          localStorage.setItem('firstName', this.state.firstName);
          localStorage.setItem('lastName', this.state.lastName);
          localStorage.setItem('phone', this.state.phone);
          localStorage.setItem('password', this.state.password);
          localStorage.setItem('confirm_password', this.state.c_password);
          this.props.history.push("/match-form");
        }

      })
      .catch(ex => {
        console.log("error", ex)
        Swal.fire(
          'Error!',
          'Something Went wrong!',
          'error'
        )

      })
  }


  handleFormChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleBirthday = date => {
    this.setState({birthday: date})    
    // this.setState({
    //   [event.target.name]: event.target.value,
    // });
  }


  render() {
    return (
      <>
        <IndexNavbar />
        <div
          className="section section-signup"
          style={{
            backgroundImage: "url(" + require("assets/img/page5.png") + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center",
            minHeight: "700px"
          }}
        >
          <Container>
            <div>
              <img
                alt="..."
                hight="500"
                width="500"
                align="right"
                src={require("assets/img/love1.png")}
              ></img>
            </div>
            <Col className="heading2" sm="4">
              <Card className="card-login card-plain">
                <Form action="" className="form" method="" >
                  <CardHeader className="text-center"></CardHeader>
                  <CardBody>
                    <InputGroup
                      className={classnames({
                        "input-group-focus": this.state.emailFocus
                      })}
                    >
                      <Input
                        placeholder="First Name..."
                        type="text"
                        onFocus={e => this.setState({ emailFocus: true })}
                        onBlur={e => this.setState({ emailFocus: false })}
                        name="firstName"
                        onChange={this.handleFormChange}
                        value={this.state.firstName}
                      />
                    </InputGroup>
                    <Error error={this.state.errors.firstName ? this.state.errors.firstName : null} />
                    <InputGroup
                      className={classnames({
                        "input-group-focus": this.state.emailFocus
                      })}
                    >
                      <Input
                        placeholder="Last Name..."
                        type="text"
                        onFocus={e => this.setState({ emailFocus: true })}
                        onBlur={e => this.setState({ emailFocus: false })}
                        name="lastName"
                        onChange={this.handleFormChange}
                        value={this.state.lastName}
                      />
                    </InputGroup>
                    <Error error={this.state.errors.lastName ? this.state.errors.lastName : null} />
                    <InputGroup
                      className={classnames({
                        "input-group-focus": this.state.emailFocus
                      })}
                    >
                      <Input
                        placeholder="phone..."
                        type="text"
                        onFocus={e => this.setState({ emailFocus: true })}
                        onBlur={e => this.setState({ emailFocus: false })}
                        name="phone"
                        onChange={this.handleFormChange}
                        value={this.state.phone}
                      />
                    </InputGroup>
                    <Error error={this.state.errors.phone ? this.state.errors.phone : null} />
                    <InputGroup
                      className={classnames({
                        "input-group-focus": this.state.emailFocus
                      })}
                    >
                      <Input
                        placeholder="Where do you live?"
                        type="text"
                        onFocus={e => this.setState({ emailFocus: true })}
                        onBlur={e => this.setState({ emailFocus: false })}
                        name="live"
                        onChange={this.handleFormChange}
                        value={this.state.live}
                      />
                    </InputGroup>
                    <Error error={this.state.errors.live ? this.state.errors.live : null} />

                    <FormGroup>
                      <Datetime
                        timeFormat={false}
                        inputProps={{ placeholder: "When’s your birthday ?" }}
                        name="birthday"

                        // onChange={this.handleChange}
                        onChange={(event) => this.handleBirthday(event)}
                        selected={this.state.birthday}
                      />
                      <Error error={this.state.errors.birthday ? this.state.errors.birthday : null} />
                    </FormGroup>



                    <InputGroup
                      className={classnames({
                        "input-group-focus": this.state.emailFocus
                      })}
                    >
                      <Input
                        placeholder="Password..."
                        type="password"
                        onFocus={e => this.setState({ emailFocus: true })}
                        onBlur={e => this.setState({ emailFocus: false })}
                        name="password"
                        onChange={this.handleFormChange}
                        value={this.state.password}
                      ></Input>
                    </InputGroup>
                    <Error error={this.state.errors.password ? this.state.errors.password : null} />

                    <InputGroup
                      className={classnames({
                        "input-group-focus": this.state.emailFocus
                      })}
                    >
                      <Input
                        placeholder="Password..."
                        type="password"
                        onFocus={e => this.setState({ emailFocus: true })}
                        onBlur={e => this.setState({ emailFocus: false })}
                        name="c_password"
                        onChange={this.handleFormChange}
                        value={this.state.c_password}
                      ></Input>
                    </InputGroup>
                    <Error error={this.state.errors.confirm_password ? this.state.errors.confirm_password : null} />
                  </CardBody>
                  <CardFooter className="text-center">
                    <label className="lables">
                      <p>Almost done!</p>
                    </label>
                    <Link
                      to="login-page"
                      className="btn btn-warning shadow    btn-circle"
                      onClick={this.onSubmit}
                    >
                      <i className="fa fa-arrow-right glypicon_color faa-passing animated"></i>
                    </Link>
                    <div>
                      <label className="lables">
                        <p>
                          Be signing up you agree to our Term of Service &
                          privacy Policy
                        </p>
                      </label>
                    </div>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
      </>
    );
  }
}
export default FourthPage;