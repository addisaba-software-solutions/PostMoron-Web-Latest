import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import "../../views/IndexSections/local.css";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Button,
  FormGroup,
  Container,
  Row,
  Col,
  
  Modal,
  Form,
  Input,
  InputGroup,
 
  Label,
 
} from "reactstrap";

class ComponentsNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent",
      demoModal: false,
      miniModal: false,
      formModal: false
    };
  }
  toggleModal = modalState => {
    this.setState({
      [modalState]: !this.state[modalState]
    });
  };
  componentDidMount() {
    window.addEventListener("scroll", this.changeColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor);
  }
  changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      this.setState({
        color: "bg-primary"
      });
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        color: "navbar-transparent"
      });
    }
  };
  toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  onCollapseExiting = () => {
    this.setState({
      collapseOut: "collapsing-out"
    });
  };
  onCollapseExited = () => {
    this.setState({
      collapseOut: ""
    });
  };
  scrollToFirstform = () => {
    document
      .getElementById("section-Firstform")
      .scrollIntoView({ behavior: "smooth" });
  };
  render() {
    return (
      <Navbar
        className={"fixed-top " + this.state.color}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              data-placement="bottom"
              to="/"
              rel="noopener noreferrer"
              title="Designed and Coded by Creative Tim"
              tag={Link}
            >
              <img
                alt="..."
                className="n-logo"
                src={require("assets/img/logos.png")}
                height="30"
                width="35"
                to="/"
                outline
                size="lg"
                tag={Link}
              ></img>
              <span>POST• </span>
              MORNON MATCH
            </NavbarBrand>
            <button
              aria-expanded={this.state.collapseOpen}
              className="navbar-toggler navbar-toggler"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className={"justify-content-end " + this.state.collapseOut}
            navbar
            isOpen={this.state.collapseOpen}
            onExiting={this.onCollapseExiting}
            onExited={this.onCollapseExited}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    POST•MORMON
                  </a>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button
                    aria-expanded={this.state.collapseOpen}
                    className="navbar-toggler"
                    onClick={this.toggleCollapse}
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav navbar>
              <NavItem>
                <NavLink tag={Link} to="/">
                  <i className="fa fa-download" />
                  Download
                </NavLink>
              </NavItem>
              <NavItem>
                <Button
                  color="primary"
                  onClick={() => this.toggleModal("formModal")}
                >
                  <i className="fa fa-user-circle" />
                  Login
                </Button>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/">
                  About us
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>

          {/* Start Form Modal */}
          <Modal
            modalClassName="modal-black"
            isOpen={this.state.formModal}
            toggle={() => this.toggleModal("formModal")}
          >
            <div className="modal-header justify-content-center">
              <button
                className="close"
                onClick={() => this.toggleModal("formModal")}
              >
                <i className="tim-icons icon-simple-remove text-white" />
              </button>
              <div className="text-muted text-center ml-auto mr-auto">
                <h3 className="mb-0">Sign in with email</h3>
              </div>
            </div>
            <div className="modal-body">
              <div className="btn-wrapper text-center">
                <img
                  alt="..."
                  src={require("assets/img/favicon.ico")}
                  width="50px"
                  height="50px"
                />
              </div>
              <div className="text-center text-muted mb-4 mt-3">
               
              </div>
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup
                    className={classnames("input-group-alternative", {
                      "input-group-focus": this.state.emailFocus
                    })}
                  >
                    
                    <i className="tim-icons icon-email-85 icon" />
                    <Input
                      placeholder="Email"
                      type="email"
                      onFocus={e => this.setState({ emailFocus: true })}
                      onBlur={e => this.setState({ emailFocus: false })}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup
                    className={classnames("input-group-alternative", {
                      "input-group-focus": this.state.passwordFocus
                    })}
                  >
                    <i className="tim-icons icon-key-25 icon" />
                    <Input
                      placeholder="Password"
                      type="password"
                      onFocus={e => this.setState({ passwordFocus: true })}
                      onBlur={e => this.setState({ passwordFocus: false })}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup check className="mt-3">
                  <Label check>
                    <Input defaultChecked type="checkbox" />
                    <span className="form-check-sign" />
                    Remember me!
                  </Label>
                </FormGroup>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button">
                    Sign in
                  </Button>
                </div>
                <p> scroll down to register on home page</p>
              </Form>
            </div>
          </Modal>
          {/* End Form Modal */}
        </Container>
      </Navbar>
    );
  }
}

export default ComponentsNavbar;
