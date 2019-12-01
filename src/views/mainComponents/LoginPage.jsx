import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import "../../views/IndexSections/local.css"
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";
// reactstrap components
import axios from 'axios'
import API from './../../api.jsx'
import Error from './../../error/Error.jsx'
import {
  
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  
  InputGroup,
 
  Container,
  Col
} from "reactstrap";

// core components

class LoginPage extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("login-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("login-page");
  }
  constructor(props) {
    super(props);
    this.state = {
      focused: "",
      email:     '',
      password: '',
      isFetching:false,
      isLogging:false,
      errors:{},
    };
    this.handleChange=this.handleChange.bind(this);
    this.handleUserLogin=this.handleUserLogin.bind(this);
  }
   handleChange(event){
  this.setState({
    [event.target.name]:event.target.value,
  });
  }
  handleUserLogin(e) {
    const token=localStorage.getItem('token');
    e.preventDefault();
    const data={
    email:this.state.email,
    password:this.state.password,
  }
  this.setState({
    isFetching:true,
  })

  axios.request({
  method:'get',
  url:API+'/user_login',
  params: data,
  })
  .then(res=>{
    console.log("res",res);
     if(res.data.success){
      console.log(res.data.success);
     localStorage.setItem('token',res.data.success.token);
     localStorage.setItem('id',res.data.success.id);
     localStorage.setItem('firstName',res.data.success.firstName);
     localStorage.setItem('lastName',res.data.success.lastName);
     localStorage.setItem('email',res.data.success.email);     
     localStorage.setItem('image',res.data.success.image);
     this.setState({
       isLogging:true,
     });
}
else{

this.setState({isFetching:false,errors:res.data.error})
}

     })
  .catch(ex =>{
    console.log("error",ex);
    this.setState({isFetching:false,errors:ex.data.error})
  })
  }
 
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
  render() {
    if(this.state.isLogging){
    this.props.history.push("/home");
    }
    return (
      <>
      <IndexNavbar />
        <div className="page-header header-filter">
          <div
            className="page-header-image"
            style={{
              backgroundImage: "url(" + require("assets/img/page7.png") + ")"
            }}
          ></div>
          <div className="content">
            <Container>
              {" "}
              <div className="heading2">
                <h1 align="left"> Login</h1>
              </div>
              <Col className="ml-auto mr-auto" md="4">
                <Card className="card-login card-plain">
                <Form className="form" onSubmit={this.handleUserLogin}>
                    <CardHeader className="text-center"></CardHeader>
                    <CardBody>
                    <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.emailFocus
                            })}
                          >
                            
                            <Input
                              placeholder="Email"
                              type="text"
                              onFocus={e => this.setState({ emailFocus: true })}
                              onBlur={e => this.setState({ emailFocus: false })}
                              name='email'
                             value={this.state.email}
                             onChange={this.handleChange}
                            />
                          </InputGroup>
                <Error  error={this.state.errors.email?this.state.errors.email:null}/> 
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.passwordFocus
                            })}
                          >

                            <Input
                              placeholder="Password"
                              type="password"
                              name='password'
                              value={this.state.password}
                              onChange={this.handleChange}
                              onFocus={e =>
                                this.setState({ passwordFocus: true })
                              }
                              onBlur={e =>
                                this.setState({ passwordFocus: false })

                              }
                            />
                          </InputGroup>
          <Error  error={this.state.errors.password?this.state.errors.password:null}/> 
          <Error  error={this.state.errors.unauthorised?this.state.errors.unauthorised:null}/> 
          
                      <button type='submit'
                        className="btn"
                       
                        tag={Link}
                        to="/match-form"
                        id="btn-submit"
                        onClick={this}
                       
                      
                      >
                       {this.state.isFetching ? (
                          <span>
                            login in... &nbsp;
                            <i className="fa fa-spinner fa-pulse fa-fw" />
                          </span>
                        ) : (
                          <span>Login</span>
                        )}


                      </button>
                    </CardBody>
                    <CardFooter className="text-center">
                      <div className="pull-left"  color="default">
                        <h6>
                          <a
                            className="link"
                            color="default"
                            href="/first-form"
                           
                          >
                            Create Account
                          </a>
                        </h6>
                      </div>
                      <div className="pull-right">
                        <h6>
                          <a
                            className="link"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Need Help?
                          </a>
                        </h6>
                      </div>
                    </CardFooter>
                  </Form>
                </Card>
              </Col>
            </Container>
          </div>
        </div>
      </>
    );
  }
}
export default LoginPage;
