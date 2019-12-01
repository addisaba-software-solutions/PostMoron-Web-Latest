import React from "react";
import { Link } from "react-router-dom";
// react plugin used to create switch buttons
import $ from "jquery";
import {
Container,Form
} from "reactstrap";
import '../../views/IndexSections/local.css'
// core components
import axios from "axios";
import Error from './../../error/Error.jsx'
import API from './../../api'
import Swal from 'sweetalert2'


class SecondForm extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: '',
      user_name:'',
      errors:{},
    };
    this._handleImageChange = this._handleImageChange.bind(this);
    //this.onSubmit = this.onSubmit.bind(this);
    this.onChange=this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
   
  }
  onSubmit(e) {
    e.preventDefault();
    const fd=new FormData();
fd.append('image',this.state.file);
fd.append('email',this.state.user_name);

     axios.post(API+"/validate-second",fd,{
      method:'post',
    })
      .then((validate) => {
        if(validate.data.error){
        this.setState({errors:validate.data.error})
      }
      else{
        localStorage.setItem("image",validate.data.fileName);
        localStorage.setItem('email',this.state.user_name);
        this.props.history.push("/fourth-form");
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
  inputhandel(event){
    console.log(event.target.value)
    this.setState({user_name:event.target.value}); 
    localStorage.setItem("_username",event.target.value);
  }


  username = (e) => {
    this.props.gender(e.target.value);
    localStorage.setItem('username',e.target.value);
   
   // console.log("result",this.props.client_gender);
    
  }
  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
        
       
      });
 
    }

    reader.readAsDataURL(file)
  }
  componentDidMount() {
    document.body.classList.toggle("second-form");
  }
  componentWillUnmount() {
    document.body.classList.toggle("second-form");
  }
  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<div>
      <img src={imagePreviewUrl} width="30%" height="30%" alt="preview" />
     </div>);
    }
  return (
    <>
      <div
        className="section section-signup"
        style={{
          backgroundImage: "url(" + require("assets/img/page3.png") + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "700px"
        }}
      >
        <Container>
        <div >
        <img
              alt="..."
              hight="500"
              width="500"
              align="right"
              src={require("assets/img/love1.png")}
            ></img>
            
          </div>

          <h2 
          className="text-left " 
          align="center"> 
          Email Address
          </h2>
          <Form onSubmit={this.onSubmit}>
          <div className="d-flex justify-content-left h-100">
          <div className="searchbar">
          <input className="search_input" 
          type="text"  
          placeholder="Username"
          name="user_name"
          onChange={this.inputhandel.bind(this)}
          value={this.user_name}
          />
             <Error  error={this.state.errors.email?(this.state.errors.email):null}/>
        </div>
             </div>
                <label for="file">
                          <span  
                   className="btn btn-info shadow  btn-circle btn-xl" style={{height:'60px',width:'60px'}}>
                 <i className="fa fa-camera glypicon_color faa-tada animated"></i>
                </span>
                        </label>

              <input  
              className="btn  shadow  btn-circle btn-xxl"
              type="file" name='file' id='file'
              onChange={this._handleImageChange} style={{display: 'none'}}  >
             
              </input>
                  <Error  error={this.state.errors.image?(this.state.errors.image):null}/>
             {$imagePreview}
                  <label 
                  id="carlab" 
                  className="lables" >
                  <p>Create your profile</p>
                  </label>
              
                  </Form>
              
              <Link 
              id="carbtn"
              to="/fourth-form"
              className="btn btn-warning shadow    btn-circle"
              onClick={this.onSubmit.bind(this)}>
                <i  className="fa fa-arrow-right glypicon_color faa-passing animated"></i>
                
              </Link>
             
             
        </Container>
      </div>
    </>
  );
}
}
export default SecondForm;