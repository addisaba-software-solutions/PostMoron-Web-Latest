import React from "react";
import { Link } from "react-router-dom";
// react plugin used to create switch buttons
//import classnames from "classnames";
import $ from 'jquery'
import axios from 'axios'
import Swal from 'sweetalert2'
import API from './../../api.jsx'
import Error from './../../error/Error.jsx'
import { Container, Form } from "reactstrap";
import "../IndexSections/local.css";

// core components

class MatchForm extends React.Component {
   constructor(props) {
    super(props);
           this.state = {
    pet:'',
    flock:'',
    kickMyDay:'', 
    myFridge:'',
    phoneUsage:'', 
    afterLongDay:'',
    food:'', 
    goingOut:'',
    life:'',   
      errors:{},
    };
    this.onSubmitMatch=this.onSubmitMatch.bind(this);
  }
  componentDidMount() {
   document.body.classList.toggle("match-form");
  }
  componentWillUnmount() {
    document.body.classList.toggle("match-form");
  }

  hidebtncats = (e) => { 
    this.setState({pet:e.target.value});
        console.log("pet",e.target.value);     
      $("#btndog").hide("fast");
      $("#labdog").hide("fast");
  }

  hidebtndogs = (e) => {
    this.setState({pet:e.target.value});
      $("#btncat").hide("fast");
      $("#labcat").hide("fast");
console.log("pet",e.target.value);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
   
  }
  hidebtnbirds = (e) => {
        this.setState({flock:e.target.value});

console.log("x",this.state.flock); 
      $("#btnowl").hide("fast");
      $("#labowl").hide("fast");
    
  }
  hidebtnowls = (e) => {
        this.setState({flock:e.target.value});
    console.log("result",e.target.value); 
      $("#btnbird").hide("fast");
      $("#labbird").hide("fast");
    
  }
  hideboxcoffe = (e) => {
    this.setState({kickMyDay:e.target.value});
      console.log("result",e.target.value); 
      $("#btn9").hide("fast");
      $("#lab9").hide("fast");
    
  }
  hideboxtea = (e) => {
        this.setState({kickMyDay:e.target.value});
console.log("result",e.target.value); 
      $("#btn8").hide("fast");
      $("#lab8").hide("fast");
    
  }
  hidebtnmeat = (e) => {
    this.setState({myFridge:e.target.value});
    console.log("result",e.target.value); 
      $("#btn11").hide("fast");
      $("#lab11").hide("fast");
    
  }
  hidebtntofu = (e) => {
    this.setState({myFridge:e.target.value});
    console.log("result",e.target.value); 
      $("#btn10").hide("fast");
      $("#lab10").hide("fast");
  
  }

  hidebtntext = (e) => {
    this.setState({phoneUsage:e.target.value});
    console.log("result",e.target.value); 
      $("#btn13").hide("fast");
      $("#lab13").hide("fast");
    
  }
  hidebtntalk = (e) => {
        this.setState({phoneUsage:e.target.value});
    console.log("result",e.target.value); 
      $("#btn12").hide("fast");
      $("#lab12").hide("fast");
    
  }
  hidebtntext2 = (e) => {
    this.setState({afterLongDay:e.target.value});
    console.log("result",e.target.value); 
      $("#btn15").hide("fast");
      $("#lab15").hide("fast");
    
  }
  hidebtntalk2 = (e) => {
    this.setState({afterLongDay:e.target.value});
    console.log("result",e.target.value); 
      $("#btn14").hide("fast");
      $("#lab14").hide("fast");
  
  }
  hidebtncook = (e) => {
    this.setState({food:e.target.value});
    console.log("result",e.target.value); 
      $("#btn17").hide("fast");
      $("#lab17").hide("fast");
    
  }
  hidebtnorder = (e) => {
    this.setState({food:e.target.value});
    console.log("result",e.target.value); 
      $("#btn16").hide("fast");
      $("#lab16").hide("fast");
    
  }

  hidebtnlist = (e) => {
console.log("result",e.target.value); 
this.setState({goingOut:e.target.value});
      $("#btn19").hide("fast");
      $("#lab19").hide("fast");

  }
  hidebtnnolist = (e) => {
    this.setState({goingOut:e.target.value});
      $("#btn18").hide("fast");
      $("#lab18").hide("fast");
    
  }

  hidebtnonline = (e) => {
    this.setState({life:e.target.value});
    console.log("result",this.state.life); 
      $("#btn21").hide("fast");
      $("#lab21").hide("fast");
  
  }
  hidebtnoffline = (e) => {
  this.setState({life:e.target.value});
  $("#btn20").hide("fast");
  $("#lab20").hide("fast"); 
  }
 
onSubmitMatch=(e)=>{
e.preventDefault();
const fd=new FormData();
fd.append('relationShip',localStorage.getItem('_relationShip'));
fd.append('gender',localStorage.getItem('_gender'));

fd.append('live',localStorage.getItem('live'));
fd.append('birthday',localStorage.getItem('birthday'));
fd.append('firstName',localStorage.getItem('firstName'));
fd.append('lastName',localStorage.getItem('lastName'));
fd.append('phone',localStorage.getItem('phone'));
fd.append('email',localStorage.getItem('email'));
fd.append('image',localStorage.getItem('image'));
fd.append('password',localStorage.getItem('password'));
fd.append('confirm_password',localStorage.getItem('confirm_password'));

fd.append('pet',this.state.pet);
fd.append('flock',this.state.flock);
fd.append('kickMyDay',this.state.kickMyDay);
fd.append('myFridge',this.state.myFridge);
fd.append('phoneUsage',this.state.phoneUsage);
fd.append('afterLongDay',this.state.afterLongDay);
fd.append('food',this.state.food);
fd.append('goingOut',this.state.goingOut);
fd.append('life',this.state.life);

  axios.post(API+'/user_register',fd,{
      method:'post',
    })
    .then((res) => {
      if(res.data.error){

     this.setState({
      errors:res.data.error
     })
      }
      else{
        localStorage.clear();
        this.props.history.push("/login-page");
      }
      
      })
      .catch(ex => {   
       Swal.fire(
      'Error!',
      'Something Went wrong!',
      'error'
    )     

      })

}

  render() {
    return (
      <>
        <div
          className="section section-signup"
          style={{
            backgroundImage: "url(" + require("assets/img/page2.png") + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center",
            minHeight: "700px"
          }}
        >
          <Container>
            <Form>
              <p className="text-left faa-horizontal faa-slow animated">
                {" "}
                To maximize the chance to finding what you <br />
                are looking for, we recommend that you fill in <br />
                our quiz and more about you, it’s fast and fun. <br />
                <hr className="hr-style2" />
              </p>

              {/* start point */}
              <div>
                <p className="text-left faa-horizontal faa-slow animated">
                  Pets ...
                </p>
  
                <button
                  type="button"
                  id="btncat"
                   name='pet'
                  onClick={this.hidebtncats}
                  value='cat'
                  className="btn-icon btn btn-primary   shadow btn-circle btn-lg btn-mar1 "
                >
                  <img
                    alt="..."
                    src={require("assets/img/mat/cat.png")}
                    width="20px"
                    height="30px"
                  ></img>
                </button>

                <button
                  id="btndog"
                  type="button"
                  name='pet'
                  value='dog'
                  onClick={this.hidebtndogs}
                  className="btn-icon btn btn-primary   shadow btn-circle btn-lg"
                >
                  <img
                    alt="..."
                    src={require("assets/img/mat/dog.png")}
                    width="40px"
                    height="30px"
                  ></img>
                </button>
              </div>

              <div>
                <label id="labcat" className="lables">
                  <p>CAT PERSON</p>
                </label>
                <label id="labdog" className="lables">
                  <p>DOG PERSON</p>
                </label>
              </div>
          <Error  error={this.state.errors.pet?this.state.errors.pet:null}/>
              <hr className="hr-style2" />
              {/* end point  */}

              {/* start point */}
              <div>
                <p className="text-left faa-horizontal faa-slow animated">
                  My flock ...
                </p>

                <button
                  type="button"
                  id="btnbird"
                   name='flock'
                     value='bird'
                  onClick={this.hidebtnbirds}
                  className="btn-icon btn btn-primary   shadow btn-circle btn-lg btn-mar1 "
                >
                  <img
                    alt="..."
                    src={require("assets/img/bird.png")}
                    width="30px"
                    height="25px"
                  ></img>
                </button>

                <button
                  id="btnowl"
                  type="button"
                   name='flock'
                     value='owl'
                  onClick={this.hidebtnowls}
                  className="btn-icon btn btn-primary   shadow btn-circle btn-lg"
                >
                  <img
                    alt="..."
                    src={require("assets/img/owl.png")}
                    width="30px"
                    height="25px"
                  ></img>
                </button>
              </div>

              <div>
                <label id="labbird" className="lables">
                  <p>EARLY BIRDS</p>
                </label>
                <label id="labowl" className="lables">
                  <p>NIGHT OWLS</p>
                </label>
              </div>
          <Error  error={this.state.errors.flock?this.state.errors.flock:null}/>
              <hr className="hr-style2" />
              {/* end point  */}

              {/* start point */}
              <div>
                <p className="text-left faa-horizontal faa-slow animated">
                  Kickstarts my day ...
                </p>

                <button
                  type="button"
                  id="btn8"
                   name='kickMyDay'
                     value='coffee'
                  onClick={this.hideboxcoffe}
                  className="btn-icon btn btn-primary   shadow btn-circle btn-lg btn-mar1 "
                >
                  <img
                    alt="..."

                    src={require("assets/img/coffee.png")}
                    width="20px"
                    height="30px"
                  ></img>
                </button>

                <button
                  id="btn9"
                  type="button"
                  name='kickMyDay'
                  value='tea'
                  onClick={this.hideboxtea}
                  className="btn-icon btn btn-primary   shadow btn-circle btn-lg"
                >
                  <img
                    alt="..."
                    src={require("assets/img/tea.png")}
                    width="20px"
                    height="30px"
                  ></img>
                </button>
              </div>

              <div>
                <label id="lab8" className="lables2">
                  <p>COFFE</p>
                </label>
                <label id="lab9" className="lables4">
                  <p>TEA</p>
                </label>
              </div>
       <Error  error={this.state.errors.kickMyDay?this.state.errors.kickMyDay:null}/>
              <hr className="hr-style2" />
              {/* end point  */}
              {/* start point */}
              <div>
                <p className="text-left faa-horizontal faa-slow animated">
                  In my fridge ...
                </p>

                <button
                  type="button"
                  id="btn10"
                  name='myFridge'
                  onClick={this.hidebtnmeat}
                  value='meat'
                  className="btn-icon btn btn-primary   shadow btn-circle btn-lg btn-mar1 "
                >
                  <img
                    alt="..."
                    src={require("assets/img/meat.png")}
                    width="20px"
                    height="30px"
                  ></img>
                </button>

                <button
                  id="btn11"
                  type="button"
                  name='myFridge'
                  value='tofu'
                  onClick={this.hidebtntofu}
                  className="btn-icon btn btn-primary   shadow btn-circle btn-lg"
                >
                  <img
                    alt="..."
                    src={require("assets/img/tofu.png")}
                    width="20px"
                    height="30px"
                  ></img>
                </button>
              </div>

              <div>
                <label id="lab10" className="lables2">
                  <p>MEAT</p>
                </label>
                <label id="lab11" className="lables4">
                  <p>TOFU</p>
                </label>
              </div>
              
      <Error  error={this.state.errors.myFridge?this.state.errors.myFridge:null}/> 
              <hr className="hr-style2" />
              {/* end point  */}

              {/* start point */}
              <div>
                <p className="text-left faa-horizontal faa-slow animated">
                  Phone are for ...
              </p>

                <button
                  type="button"
                  id="btn12"
                  name='phoneUsage'
                  value='texting'
                  onClick={this.hidebtntext}
                  className="btn-icon btn btn-primary   shadow btn-circle btn-lg btn-mar1 "
                >
                  <img
                    alt="..."
                    src={require("assets/img/sms.png")}
                    width="20px"
                    height="30px"
                  ></img>
                </button>

                <button
                  class="btn13"
                  id="btn13"
                  type="button"
                  name='phoneUsage'
                  value='talking'
                  onClick={this.hidebtntalk}
                  className="btn-icon btn btn-primary   shadow btn-circle btn-lg"
                >
                  <img
                    alt="..."
                    src={require("assets/img/talking.png")}
                    width="20px"
                    height="30px"
                  ></img>
                </button>
              </div>

              <div>
                <label id="lab12" className="lables">
                  <p>TEXTING</p>
                </label>
                <label id="lab13" className="lables4">
                  <p>TALKING</p>
                </label>
              </div> 
                 <Error  error={this.state.errors.phoneUsage?this.state.errors.phoneUsage:null}/> 
              <hr className="hr-style2" />
              {/* end point  */}

              {/* start point */}
              <div>
                <p className="text-left faa-horizontal faa-slow animated">
                  After a long day ...
                </p>

                <button
                  type="button"
                  id="btn14"
                  name='afterLongDay'
                  value='texting'
                  onClick={this.hidebtntext2}
                  className="btn-icon btn btn-primary   shadow btn-circle btn-lg btn-mar1 "
                >
                  <img
                    alt="..."
                    src={require("assets/img/sms.png")}
                    width="20px"
                    height="30px"
                  ></img>
                </button>

                <button
                  id="btn15"
                  type="button"
                  name='afterLongDay'
                  value='talking'
                  onClick={this.hidebtntalk2}
                  className="btn-icon btn btn-primary   shadow btn-circle btn-lg"
                >
                  <img
                    alt="..."
                    src={require("assets/img/talking.png")}
                    width="20px"
                    height="30px"
                  ></img>
                </button>
              </div>

              <div>
                <label id="lab14" className="lables">
                  <p>TEXTING</p>
                </label>
                <label id="lab15" className="lables4">
                  <p>TALKING</p>
                </label>
              </div> 
     <Error  error={this.state.errors.afterLongDay?this.state.errors.afterLongDay:null}/>  
              <hr className="hr-style2" />
              {/* end point  */}

              {/* start point */}
              <div>
                <p className="text-left faa-horizontal faa-slow animated">
                  I’m hungry ...
                </p>

                <button
                  type="button"
                  id="btn16"
                  name='food'
                  onClick={this.hidebtncook}
                  value='cook'
                  className="btn-icon btn btn-primary   shadow btn-circle btn-lg btn-mar1 "
                >
                  <img
                    alt="..."
                    src={require("assets/img/cook.png")}
                    width="20px"
                    height="30px"
                  ></img>
                </button>

                <button
                  id="btn17"
                  type="button"
                  name='food'
                  onClick={this.hidebtnorder}
                  value='order'
                  className="btn-icon btn btn-primary   shadow btn-circle btn-lg"
                >
                  <img
                    alt="..."
                    src={require("assets/img/order.png")}
                    width="20px"
                    height="30px"
                  ></img>
                </button>
              </div>

              <div>
                <label id="lab16" className="lables2">
                  <p>I COOK</p>
                </label>
                <label id="lab17" className="lables3">
                  <p>ORDER IN</p>
                </label>
              </div> 
                   <Error  error={this.state.errors.food?this.state.errors.food:null}/>  
              <hr className="hr-style2" />
              {/* end point  */}

              {/* start point */}
              <div>
                <p className="text-left faa-horizontal faa-slow animated">
                  Going out ...
                </p>

                <button
                  type="button"
                  id="btn18"
                   name='goingOut'
                   value='guest'
                  onClick={this.hidebtnlist}
                  className="btn-icon btn btn-primary   shadow btn-circle btn-lg btn-mar1 "
                >
                  <img
            alt="..."
                    src={require("assets/img/guest.png")}
                    width="20px"
                    height="30px"
                  ></img>
                </button>

                <button
                  id="btn19"
                  type="button"
                  name='goingOut'
                  value='noList'
                  onClick={this.hidebtnnolist}
                  className="btn-icon btn btn-primary   shadow btn-circle btn-lg"
                >
                  <img
                    alt="..."
                    src={require("assets/img/noguest.png")}
                    width="20px"
                    height="30px"
                  ></img>
                </button>
              </div>

              <div>
                <label id="lab18" className="lables">
                  <p>GUEST LIST</p>
                </label>
                <label id="lab19" className="lables2">
                  <p>AIN’T NO LIST</p>
                </label>
              </div>

        <Error  error={this.state.errors.goingOut?this.state.errors.goingOut:null}/>    
              <hr className="hr-style2" />
              {/* end point  */}

              {/* start point */}
              <div>
                <p className="text-left faa-horizontal faa-slow animated">
                  My life is ...
                </p>

                <button
                  type="button"
                  id="btn20"
                  name='life'
                  value='online'
                  onClick={this.hidebtnonline}
                  className="btn-icon btn btn-primary   shadow btn-circle btn-lg btn-mar1 "
                >
                  <img
                    alt="..."
                    src={require("assets/img/online.png")}
                    width="20px"
                    height="30px"
                  ></img>
                </button>

                <button
                  id="btn21"
                  type="button"
                  name='life'
                  value='offline'
                  onClick={this.hidebtnoffline}
                  className="btn-icon btn btn-primary   shadow btn-circle btn-lg"
                >
                  <img
                    alt="..."
                    src={require("assets/img/offline.png")}
                    width="20px"
                    height="30px"
                  ></img>
                </button>
              </div>

              <div>
                <label id="lab20" className="lables2">
                  <p>ONLINE</p>
                </label>
                <label id="lab21" className="lables3">
                  <p>OFFLINE</p>
                </label>
              </div>
               <Error  error={this.state.errors.life?this.state.errors.life:null}/>   
              <hr className="hr-style2" />
              {/* end point  */}

              {/* start point of submit btn*/}
              <div>
                <Link
                  className="btn btn-primary shadow    mar_center2 "
                  tag={Link}
                  onClick={this.onSubmitMatch}
                  to="/home-page"
                >
                  <img
                    className="faa-passing animated"
                    alt="..."
                    src={require("assets/img/firstform/arrow.png")}
                  ></img>
                </Link>
              </div>

              {/* end point  */}
            </Form>
          </Container>
        </div>
      </>
    );
  }
}
export default MatchForm;
