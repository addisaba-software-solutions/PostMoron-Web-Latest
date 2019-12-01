import React from "react";
import { Link } from "react-router-dom";
// react plugin used to create switch buttons
//import classnames from "classnames"
//import $ from "jquery"
import "assets/css/nucleo-icons.css";
import axios from "axios";
import Error from './../../error/Error.jsx'
import API from './../../api'
import Swal from 'sweetalert2'

import {
  Container,
  Form,
} from "reactstrap";

import "./local.css";
// core components
import $ from "jquery";


class FormFirst extends React.Component { 
  componentDidMount() {
   document.body.classList.toggle("first-form");
    
  }
  componentWillUnmount() {
  document.body.classList.toggle("first-form");
  }
  constructor(props) {
    super(props);
    this.state = {
      gender: '',
      looking_for: '',
      errors: {},
    };
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
   
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
  e.preventDefault()
 
  
  

}

onRadiochange_Gender(event) {
  //alert(event.target.value);
  console.log("i am a", event.target.value);
  this.setState({gender:event.target.value});
  //this.props.gender(event.target.value);
  localStorage.setItem('_gender',event.target.value);
}


onRadiochange_Looking_For(event) {
 // alert(event.target.value);
 console.log("i'm looking for ", event.target.value);
 this.setState({looking_for:event.target.value});
 localStorage.setItem("_relationShip",this.state.looking_for);
  //this.props.firstForm(event  .target.value)
}







firstFormFun = (e) => {
e.preventDefault();
   axios.request({
      method: 'get',
      url: API + '/validate-first',
      params: {
        gender:this.state.gender,        
        looking_for: this.state.looking_for,
      },
    })
      .then((validate) => {
        console.log("res",validate)
        if(validate.data.error){
        this.setState({errors:validate.data.error})
      }
      else{
        localStorage.setItem("_relationShip",this.state.looking_for);
        localStorage.setItem('_gender',this.state.gender);
        this.props.history.push('second-form'); 
      }

      })
      .catch(ex => { 
         Swal.fire(
      'Error!',
      'Something Went wrong!',
      'error'
    ) 
        console.log("ex",ex)
      })
  }

  


  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };


  myfunction() {
    console.log("Friend", );
}
  hidebtn1 = () => {
    $("#btn1").click(function() {
      $("#btn2").hide("fast");
      $("#lab2").hide("fast");
      $("#btn3").hide("fast");
      $("#lab3").hide("fast");
    });
  };
  hidebtn2 = () => {
    $("#btn2").click(function() {
      $("#btn1").hide("fast");
      $("#lab1").hide("fast");
      $("#btn3").hide("fast");
      $("#lab3").hide("fast");
    });
  };
  hidebtn3 = () => {
    $("#btn3").click(function() {
      $("#btn1").hide("fast");
      $("#lab1").hide("fast");
      $("#btn2").hide("fast");
      $("#lab2").hide("fast");
    });
  };
  hidebtn4 = () => {
    $("#btn4").click(function() {
      $("#btn5").hide("fast");
      $("#lab5").hide("fast");
      $("#btn6").hide("fast");
      $("#lab6").hide("fast");
      $("#btn7").hide("fast");
      $("#lab7").hide("fast");
    });
  };
  hidebtn5 = () => {
    $("firstFormFun#btn5").click(function() {
      $("#btn4").hide("fast");
      $("#lab4").hide("fast");
      $("#btn6").hide("fast");
      $("#lab6").hide("fast");
      $("#btn7").hide("fast");
      $("#lab7").hide("fast");
    });
  };
  hidebtn6 = () => {
    $("#btn6").click(function() {
      $("#btn5").hide("fast");
      $("#lab5").hide("fast");
      $("#btn4").hide("fast");
      $("#lab4").hide("fast");
      $("#btn7").hide("fast");
      $("#lab7").hide("fast");
    });
  };
  hidebtn7 = () => {
    $("#btn7").click(function() {
      $("#btn5").hide("fast");
      $("#lab5").hide("fast");
      $("#btn6").hide("fast");
      $("#lab6").hide("fast");
      $("#btn4").hide("fast");
      $("#lab4").hide("fast");
    });
  };
  render() { 
    
  return (
    <>
      <div
        className="section section-Firstform"
        style={{
          backgroundImage: "url(" + require("assets/img/page2.png") + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "700px"
        }}
      >
        <Container>
          <img
            className="div-img"
            alt="..."
            hight="500"
            width="500"
            align="right"
            src={require("assets/img/love1.png")}
          ></img>

          <div className="heading">
            <h1> Find your</h1>
            <h1>true love</h1>
          </div>
          <Form  noValidate onSubmit={this.onSubmit}>
            <div>
            
            <p className="text-left">i'am a </p>

            <div className="toggle_radio" onChange={this.onRadiochange_Gender.bind(this)}>
              <input
                type="radio"
                className="toggle_option"
                id="first_toggle"
                name="gender"
                value="Female"
              />
              <input
                type="radio"
                className="toggle_option"
                id="second_toggle"
                name="gender"
                value="male"
              />
              <label for="first_toggle">
                <p>Woman</p>
              </label>
              <label for="second_toggle">
                <p>Man</p>
              </label>
              <div className="toggle_option_slider" />
            </div> 
        
          </div>
    <Error  error={this.state.errors.gender?(this.state.errors.gender):null}/>

          <p class="text-left faa-horizontal faa-slow animated">Looking for</p>
<div className="div"  onClick={this.onRadiochange_Looking_For.bind(this)}>
          <button
          id="btn4"
              type="button" 
              className="btn-icon btn btn-primary   shadow btn-circle btn-b" 
              onClick={this.hidebtn4}
              name="looking_for"
              value="Friendship"
              onChange={this.onChange}
            >
            <div className="containerss">
              <img className="visible" alt="..." src={require("assets/img/firstform/fr.png")} width="20px" height="20px"></img>
            </div>
            </button>

            <button
            id="btn5"
              type="button" 
              className="btn-icon btn btn-primary   shadow btn-circle btn-b" 
              onClick={this.hidebtn5}
              name="looking_for"
              value="flirt"
              onChange={this.onChange}
            >
             <div className="containerss">
              <img className="visible" alt="..." src={require("assets/img/firstform/fl.png")} width="20px" height="20px"></img>
            </div>
            </button>
            <button
            id="btn6"
              type="button" 
              className="btn-icon btn btn-primary   shadow btn-circle btn-b" 
              onClick={this.hidebtn6} 
              name="looking_for"
              value="romance"
              onChange={this.onChange}
            >
              <div className="containerss">
              <img className="visible" alt="..." src={require("assets/img/firstform/roo.png")} width="20px" height="20px"></img>
            </div>
            </button>
            <button
            id="btn7"
              type="button" 
              className="btn-icon btn btn-primary   shadow btn-circle btn-b" 
              onClick={this.hidebtn7}
              name="looking_for"
              value="relationship"
              onChange={this.onChange}
            >
             <div className="containerss">
              <img className="visible" alt="..." src={require("assets/img/firstform/rs.png")} width="20px" height="20px"></img>
            </div>
            </button>
            </div>
          <div>
            <label className="lables" id="lab4">
              <p>Friendship</p>
            </label>
            <label className="lables" id="lab5">
              <p>Flirt</p>
            </label>
            <label className="lables" id="lab6">
              <p>Romance</p>
            </label>
            <label className="lables" id="lab7">
              <p>Relationship</p>
            </label>
          </div>
        <Error  error={this.state.errors.looking_for?(this.state.errors.looking_for):null}/>
          <Link
            className="btn-icon btn btn-primary   shadow btn-circle btn-b   mar_center "
            tag={Link}
            to="/second-form"
            id="btn-submit"
            onClick={this.firstFormFun}
          >
            
             <div className="containerss">
              <img className="visible faa-passing animated downs" alt="..." src={require("assets/img/firstform/arrow.png")} width="20px" height="20px"></img>
            </div>
          </Link>
          </Form>
        </Container>
      </div>
    </>
  );
}
}
export default FormFirst;