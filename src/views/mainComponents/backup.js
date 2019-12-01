import React from "react";
//import IndexNavbar from "components/Navbars/IndexNavbar.jsx";
import classnames from "classnames";
import $ from "jquery";
import { connect } from 'react-redux'

import {
getAllPosts,AddPost,addComment,incrementLike,decrementLike
  } from './../../store/userAction';
import URL from './../../apiImage'
// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Button,
  Input,
  
} from "reactstrap";
import HomeNavbar from "components/Navbars/HomeNavbar.jsx";
// core components

class Home extends React.Component {
  componentDidMount() {
    this.props.getAllPosts();
    document.body.classList.toggle("home-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("home-page");
  }
  constructor(props) {
    super(props);
    this.state = {
      iconTabs: 1,
      textTabs: 4,
      title:'',
      body:'',
      image:'',
    selectedFile: null,
    imagePreviewUrl: null,
    messageBoxError:false,
    post_id:'',
    postError:0,
    liked:0,
    };
   this.handleChange = this.handleChange.bind(this);
  }
  toggleTabs = (e) => {
    e.preventDefault();
          $("#make_post").toggle("fast");   
    
  };  
  togglebtncomment = (id) => {
      $("#"+id).toggle("fast");   
  };
    handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
 fileChangedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0],
      image:event.target.files[0],
    })


   let reader = new FileReader();
     
    reader.onloadend = () => { 
      this.setState({ 
        imagePreviewUrl: reader.result,
    })
     }

 
    reader.readAsDataURL(event.target.files[0])
}
submitLike(post_id){
this.props.incrementLike(post_id);
         this.props.getAllPosts();
}
 submitComment(post_id){
var cmt=$("#textarea"+post_id).val();
 if(cmt===''){
  this.setState({ 
    messageBoxError: true,
    post_id:post_id,

    })

 }
 else{
this.setState({ 
    messageBoxError: false,
     post_id:post_id,
    })
   $("#textarea"+post_id ).val('');
   this.props.addComment(post_id,cmt);
         this.props.getAllPosts();
 }

}
  propfile(email){
    alert(email);
  }
  post(e){
   if(this.state.title==''&&this.state.body=='' && this.state.image==''){
this.setState({
      postError:1,
    })
   }
 else{ 
this.setState({
      postError:0,
    })
  this.props.AddPost(this.state.title,this.state.body,this.state.image);
  this.setState({
      imagePreviewUrl:'',
      image:'',
      title:'',
      body:'',
    })
      this.props.getAllPosts();

}

  }
  render() {
    return (
      <div>
       <HomeNavbar />
        <div className="wrapper">
          <div className="section">
            <Container>
              <Row className='row'>

                <Col className='col-lg-7 col-md-7 col-xs-12'>
                  <Card>
                    <CardHeader>
                      <Nav
                        className="justify-content-center"
                        role="tablist"
                        tabs
                      >
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.iconTabs === 1
                            })}
                            onClick={e => this.toggleTabs(e, "iconTabs", 1)}
                            href="#pablo"
                          >
                          <i className="tim-icons icon-pencil" />
                          </NavLink>
                        </NavItem>

                                            </Nav>
                    </CardHeader>
                    <CardBody id="make_post">
                      <TabContent
                        className="tab-space"
                        activeTab={"link" + this.state.iconTabs}
                      >
                        <TabPane tabId="link1">
                        <div className='row' style={{padding:'2%'}}>

                {this.state.postError==1?
                  (<div className='text-danger'>You should Say something to post</div>):null }
                          <Input className='col-lg-12 col-md-12 col-sm-12 col-12'
                            type="text"
                            placeholder="Title"
                             name='title'
                            value={this.state.title}
                            onChange={this.handleChange}
                            style={{background:'#fff',marginBottom:'5px',color:'#111',fontWeight:'bold'}}

                          ></Input>
                          <textarea

                            className="post-txt"
                            placeholder="Body"
                            style={{padding:'5px'}}
                            name='body'
                            value={this.state.body}
                          onChange={this.handleChange}
                          className='col-lg-12 col-md-12 col-sm-12 col-12'
                          rows="4"
                          ></textarea>
                          <div className='row'>

                          <div className='col-lg-7'>
                          <label for="file">
                          <span  className='col-lg-5'
                   className="btn btn-info shadow  btn-circle btn-xl" style={{height:'60px',width:'60px'}}>
                 <i className="fa fa-camera glypicon_color faa-tada animated"></i>
                </span>
                        </label>
                          <input type="file" id="file" style={{display: 'none'}} onChange={this.fileChangedHandler}/>
                          </div>
</div>
       {this.state.selectedFile?(
                <div className='col-lg-5'>
             <div style={{height:'150px',width:'200px'}}>
                    <img src={this.state.imagePreviewUrl}
                          class="post_img "

                          alt=""
                        />
                   </div>
</div>
):null
     }



                          </div>


                    <div className='text-right'>
                   
                          <Button
                            className="btn-round"
                            color="primary"
                            type="button"
                            onClick={this.post.bind(this)}
                          >
                            Post
                          </Button></div>
                        </TabPane>
                        <TabPane tabId="link2">
                          <Input
                            type="text"
                            placeholder="Share your thougth ... "
                          ></Input>

                          <Button
                            className="btn-round"
                            color="primary"
                            type="button"
                          >
                            Post
                          </Button>

                        </TabPane>

                      </TabContent>

                    </CardBody>
                    <CardFooter></CardFooter>
                  </Card>
                  <div className="maxscroll">
                

                    {

                   this.props.posts.map(post=>{
                   
                    return(
                    <Card>
                      <CardHeader>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex justify-content-between align-items-center">
                            <div class="media m-0">
                              <div class="d-flex mr-3">
                                <a href="#"  onClick={()=>this.propfile(post.client_users.email)}>
                                  <img 
                                    class="img-fluid rounded-circle"
                                    src={require("assets/img/ryan.jpg")}
                                    alt="User"

                                  />
                                </a>
                              </div>
                            </div>
                            <div className="ml-2">
                              <div className="h5 m-0">{post.client_users.email}</div>
                              <div className="h7 text-muted">
                                {post.client_users.firstName} {post.client_users.lastName}

                              </div>
                            </div>
                          </div>
                          <div>
                            <UncontrolledDropdown>
                              <DropdownToggle
                                caret
                                color="default"
                                href="#pablo"
                                nav
                                onClick={e => e.preventDefault()}
                              >
                                <i
                                  aria-hidden={true}
                                  className="now-ui-icons ui-1_settings-gear-63"
                                ></i>
                              </DropdownToggle>
                              <DropdownMenu right>
                                <DropdownItem
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  Save
                                </DropdownItem>
                                <DropdownItem
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  Hide
                                </DropdownItem>
                                <DropdownItem
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  Report
                                </DropdownItem>
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </div>
                        </div>
                      </CardHeader>
                    <CardBody >
                        <div className="text-muted h7 mb-2">
                          
                          <i className="fa fa-clock-o"></i>{post.created_at }
                        </div>
                        <a className="card-link" href="#b">
                          <h4 className="card-title">
                    {post.title}
                          </h4>
                        </a>

                        <p className="card-text" >
                       {post.body}
                        </p>
                        {
                      post.image?
                          (
                      <img 
                          className="post_img "
                          src={URL+ post.image} 
                          alt="image not available"
                        />
                            ):null
                          
                        }
    

                      </CardBody>
                      <CardFooter>
                      <Row>
                          <div className="ppbutton-container3">
                            <Button
                    className={"btn-icon btn btn-primary shadow btn-circle btn " +
                    
                    (post.likes.length>0)?(

                          post.likes.map(like=>{
                               like.user_id==localStorage.getItem('email')? ('active'):null




                                })
                            

                     ):null
                  
                        
                        
                       }


                            
                              color="primary"
                              type="button"
                              onClick={()=>this.submitLike(post.id)}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/mat/superloved.png")}
                                width="30px"
                                height="25px"
                              ></img>
                            </Button>
                            <sup className="colo text-success">{post.likes_count>0?post.likes_count:null}</sup>

                           <span style={{marginLeft:'10px'}}></span>
                            <Button
                              onMouseEnter={()=>this.togglebtncomment(post.id)}
                              className="btn-icon btn btn-primary  shadow btn-circle btn"
                              color="transparent"
                              type="button"

                            >
                              <img
                                alt="..."
                                src={require("assets/img/mat/comment.png")}
                                width="25px"
                                height="25px"
                              ></img>
                            </Button>
                            <sup className="colo text-success" style={{fontSize:'15px'}}>{post.comments_count>0?post.comments_count:null}</sup>
                     <span style={{marginRight:'10px'}}></span>

                            <Button
                              className="btn-icon btn btn-primary   shadow btn-circle btn"
                              color="primary"
                              type="button"

                            >
                              <img
                                alt="..."
                                src={require("assets/img/mat/share.png")}
                                width="30px"
                                height="25px"
                              ></img>
                            </Button>
                            <sup className="colo text-success" style={{fontSize:'15px'}}></sup>
                             <span style={{paddingLeft:'10px'}}></span>
                          </div>
                        </Row>

                        <div id={post.id}>
                          <Row>
                           
                              <div class="d-flex mr-3">
                                <a href="#">
                                  <img
                                    class="rounded-circle img-raised"
                                    src={require("assets/img/ryan.jpg")}
                                    with="30px"
                                    height="30px"
                                    alt="User"
                                  />
                                </a>
                              </div>
                            
                              <form onSubmit={e => e.preventDefault()}>
                                <textarea
                                  className="post-txt"
                                  placeholder="Comment ... "
                                  id={"textarea"+post.id}/>  
                         {
                          this.state.messageBoxError && this.state.post_id==post.id?(
                       <div className='text-warning'>Size must be greater than 0 and less than 100 </div>
                            ):null
                         }       

                                <Button
                                  className="btn"
                                  color="primary"
                                  type="submit"
                                  onClick={()=>this.submitComment(post.id)}
                                >
                                  Submit
                                </Button>
                              </form>
                           
                          </Row>
                        </div>
                      </CardFooter>
                  </Card>
)
                   })   
                    }

                  

                  </div>
                </Col>

                <Col className='col-lg-2 col-md-2 col-sm-12 col-12'>
                  <Card>
                    <CardHeader>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex justify-content-between align-items-center">
                          <div class="media m-0">
                            <div class="d-flex mr-3">
                              <a href="#b">
                                <img
                                  class="rounded-circle img-raised"
                                  src={require("assets/img/ryan.jpg")}
                                  alt="User"
                                />
                              </a>
                            </div>
                          </div>
                          <div className="ml-2">
                            <div className="h5 m-0">@LeeCross</div>
                          </div>
                        </div>
                        <div></div>
                      </div>
                    </CardHeader>
                    <CardBody>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <div className="h6 text-muted">Liked</div>
                          <div className="h5">5.2342</div>
                        </li>
                        <li className="list-group-item">
                          <div className="h6 text-muted">Visited</div>
                          <div className="h5">6758</div>
                        </li>
                        <li className="list-group-item">Vestibulum at eros</li>
                      </ul>
                    </CardBody>
                    <CardFooter>
                    
                    </CardFooter>
                  </Card>
                </Col>

                {/* newsfed /post col  start*/}
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.capd.posts,
  }
  }
  

const mapDispatchToProps = {
  getAllPosts,
  AddPost,
  addComment,
  incrementLike,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
