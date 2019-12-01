
import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom'
import Pusher from 'pusher-js'
import $ from "jquery";
import Search from "./../../views/Search.jsx";

import {
  searched_result, search,
} from './../../store/userAction';
import { connect } from 'react-redux'
class SeachNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collapseOpen: false, 
      color: "navbar-transparent", 
      isOpen: false,
      search:'',
    };
    this.search = this.search.bind(this);

  }
  componentDidMount(){
  
    var pusher = new Pusher('3346cec27d06f7394391', {
        cluster: 'ap2',
        forceTLS: true,
        encrypted: true
    });
    var channel = pusher.subscribe('my-channel');
    channel.bind('my-event', data => {
  if (data.from != localStorage.getItem('email')) {
    console.log("msg",data);
    data.counterG.map(msg=>{
      this.setState({msg_counter:msg.unreadg})
       })

  }
  
 



    });
}
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  logout = () => {
    localStorage.clear();
  }
  search  (e){
    this.setState({search:e.target.value})
    
    
  
  }
  render() {

    return (
      <div style={{padding:'40px'}}>
        <div
          className={"fixed-top navbar-translate " + this.state.color}
          color-on-scroll="100"
          expand="lg"
        >

          <MDBNavbar color="indigo"  expand="md" >
            <MDBNavbarBrand>
              <span> <img
                alt="..."
                src={require("assets/img/logos.png")}
                height='30px'
                width='30px'

              ></img>
              </span>
              {/* <strong className="white-text">Navbar</strong> */}
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} >
              <span class="navbar-toggler-icon"></span>
            </MDBNavbarToggler>


            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>

           

              <MDBNavbarNav right className="">
              
                <MDBNavItem >
                  <Link data-placement="bottom"

                    to="/home" title="Home">
                    <img
                      alt="..."
                      src={require("assets/img/mat/visited0.png")}
                    ></img>
                  </Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link data-placement="bottom" to="/explorer-page" title="Explorer">
                    <img
                      alt="..."
                      src={require("assets/img/mat/explore0.png")}
                      width="25px"
                      height="25px"
                    ></img>
                  </Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link data-placement="bottom" to="/msg-page" title="Message">
                    <img
                      alt="..."
                      src={require("assets/img/mat/chat0.png")}
                      width="25px"
                      height="25px"
                    ></img>
                      <span className='text-success'>{this.state.msg_counter>0?(this.state.msg_counter):null}</span>
                  </Link>

                </MDBNavItem>
            
                <MDBNavItem>
                  <Link data-placement="bottom"
                    to={{
                      pathname: '/pro-page',
                      visited: localStorage.getItem('email'),

                    }}
                    title="Profile">
                    <img
                      alt="..."
                      src={require("assets/img/mat/profile0.png")}
                      width="25px"
                      height="25px"
                    ></img>
                  </Link>


                </MDBNavItem>
            
                <MDBNavItem right>
                  <MDBDropdown>

                    <MDBDropdownToggle nav caret>
                      <span ><strong>More</strong></span>
                      <span class="caret"></span>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem >
                        <Link
                          className='text-dark'
                          to='/home'
                          onClick={this.logout}
                        >logout</Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem >
                        <Link
                          className='text-dark'
                          to='/home'

                        >Setting</Link>

                      </MDBDropdownItem>

                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>

              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </div>
      </div>
    );

  }
}


function mapStateToProps(state) {
  return {
    searched_result: state.capd.searched_result,

  }
}
const mapDispatchToProps = {
  search,

};
export default connect(mapStateToProps, mapDispatchToProps)(SeachNavBar);
