import React, { Component } from "react";
import axios from 'axios'
import data from "./data";
import Cards from "./Cards";
import "./App.css";
import { Link } from "react-router-dom";
import HomeNavbar from "components/Navbars/HomeNavbar.jsx";
import { connect } from 'react-redux'
import {
  explorer, profile_visit
} from './../../store/userAction';
import URL from './../../apiImage'
import API from './../../api.jsx'

class Explorer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      next: 1,
    };
    this.next = this.next.bind(this);
    this.pass = this.pass.bind(this);
  }
  componentDidMount() {
    document.body.classList.toggle("explorer-page");
    this.props.explorer();
  }
  componentWillUnmount() {
    document.body.classList.toggle("explorer-page");
  }
  state = { modalIsOpen: false };
  toggleModal = () => {
    this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
  };

  next(email) {
    if (this.props.explorer_var.length >= this.state.next) {
      axios.request({
        method: 'get',
        url: API + '/add_friend',
        params: {
          liker: localStorage.getItem('email'),
          liked: email,
        },
      })
        .then(res => {
          if (res.data.success) {
            if (this.props.explorer_var.length > this.state.next) {
              this.setState({
                next: this.state.next + 1,
              })
            }
          }
          else {

            this.setState({ isFetching: false, errors: res.data.error })
          }

        })

    }
    else {
      this.setState({
        next: 1,
      })
    }
  }

  profile = (email) => {
    this.props.profile_visit(email);
  }
  pass() {
    if (this.props.explorer_var.length > this.state.next) {
      this.setState({
        next: this.state.next + 1,
      })
    }

  }


  render() {


    return (
      <>
        <HomeNavbar />



        <div
          className="section section-signup"
          style={{
            backgroundImage: "url(" + require("assets/img/page4.png") + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center",
            minHeight: "700px",
            height: '100%',
            width: '100%',

          }}
        >
          <div className="App">
            <div className="page">
              {
                this.props.explorer_var.length < 0 ? (
                  <div className="cards"  >
                    <div class="navbar navbar-inverse">
                      <div class="container-fluid">
                        <h1 >No Users Found</h1>


                      </div>
                    </div>
                  </div>
                ) : (
                    this.props.explorer_var.slice(this.state.next - 1, this.state.next).map(profile => {
                      return (
                        <div className="cards" >
                          <div class="navbar navbar-inverse">
                            <div class="container-fluid row " >
                              <span className='col-lg-3 col-md-3 col-12 '><i class='fas fa-check-circle'></i> {profile.firstName} {profile.lastName} </span>
                              <span className='col-lg-3 col-md-3 col-12 '><i class='fas fa-check-circle'></i> {profile.birthday} </span>
                              <span className='col-lg-3 col-md-3 col-12 '><i class='fas fa-check-circle'></i> {profile.live} </span>
                              <span className='col-lg-3 col-md-3 col-12 '><i class='fas fa-check-circle'></i> {profile.matchedCount}%</span>
                            </div>
                            <div class="container-fluid row" style={{ padding: '15px' }}>
                              <span className='col-lg-4 col-md-3 col-12 '>
                                <Link onClick={() => this.profile(profile.email)}
                                  to={{
                                    pathname: '/pro-page',
                                    visited: profile.email,
                                  }}>
                                  ><img src={URL + profile.image} style={{ maxHeight: '250px', maxWidth: '250px' }} /> </Link> </span>
                              <span className='col-lg-4 col-md-3 col-12 '>
                                <Link onClick={() => this.profile(profile.email)}
                                  to={{
                                    pathname: '/pro-page',
                                    visited: profile.email,
                                  }}>
                                  <img src={URL + profile.image} style={{ maxHeight: '250px', maxWidth: '250px' }} /></Link></span>
                              <span className='col-lg-4 col-md-3 col-12 '>
                                <Link onClick={() => this.profile(profile.email)}
                                  to={{
                                    pathname: '/pro-page',
                                    visited: profile.email,
                                  }}>
                                  <img src={URL + profile.image} style={{ maxHeight: '250px', maxWidth: '250px' }} /></Link></span>
                            </div>

                          </div>
                          <div class="row" style={{ padding: '15px' }}>
                            <div className='col-lg-3' style={{ padding: '10px' }} />
                            <a className="col-lg-1 btn btn-outline-success" onClick={() => this.next(profile.email)}> <i class='fas fa-thumbs-up  glypicon_color faa-shake animated'></i></a>
                            <div className="col-lg-1"></div>
                            <a style={{ fontSize: "17px" }} className="col-lg-2 btn btn-outline-success" onClick={() => this.pass()}><i class='fas fa-window-close glypicon_color faa-shake animated'></i></a>
                            <div className="col-lg-1"></div>


                          </div>
                        </div>
                      )

                    })


                  )
              }
            </div>

          </div>
        </div>


      </>
    );
  }
}
function mapStateToProps(state) {
  return {
    explorer_var: state.capd.explorer_var,

  }
}


const mapDispatchToProps = {
  explorer,
  profile_visit,


};
export default connect(mapStateToProps, mapDispatchToProps)(Explorer);

