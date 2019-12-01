import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";
import PageHeader from "components/PageHeader/PageHeader.jsx";


// sections for this page/view
import FirstForm from "views/IndexSections/FormFirst.jsx";
import InfoF from "views/IndexSections/InfoF.jsx";
import InfoS from "views/IndexSections/InfoS.jsx";

import InfoThird from "./IndexSections/InfoThird.jsx";
import InfoFourth from "./IndexSections/InfoFourth.jsx";
import SeachNavBar from "components/Navbars/SearchNavBar.jsx";
import { Link } from "react-router-dom";
import queryString from 'query-string'
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
import {
    searched_result, search,profile_visit,
  } from './../store/userAction';
  import { connect } from 'react-redux'
  import URL from './../apiImage'

  
class Search extends React.Component {
  constructor(props){
    super(props);
    this.state={
      query:'',
    };
  }
componentDidMount(){
  const values = queryString.parse(this.props.location.search)
   this.props.search(values.result);
    
}

profile = (email) => {
  this.props.profile_visit(email);
}

  render() {
    return (
        <div  style={{overflowX:'hidden'}} >
          <SeachNavBar />

    {
      this.props.searched_result.length>0?
      (
        this.props.searched_result.map(data => {
          return (
            <div className='row'>
            <div  className='col-lg-2 col-md-4 col-sm-12 col-12'/>
       <div  className='col-lg-6 col-md-4 col-sm-12 col-12'>
            <Col>
            <Card>
              <CardHeader>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex justify-content-between align-items-center">
                    <div class="media m-0">
                      <div >
                        <Link
                          onClick={() => this.profile(data.email)}
                          to={{
                            pathname: '/pro-page',
                            visited: data.email,
  
                          }}
                        >
                          <img
                            class="rounded-circle img-raised"
                            src={URL + data.image}
                            alt="User"
  
                          />
  
                        </Link>
  
                      </div>
                    </div>
                    <div className="ml-2">
                      <div className="h5 m-0 text-white">{data.firstName} {data.lastName}</div>
                    </div>
                  </div>
                  <div></div>
                </div>
              </CardHeader>
              <CardBody>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <div className="h6 text-muted">Liked</div>
                    <div className="h5">
                      {data.profile_likes_count + data.profile_loves_count + data.profile_super_loves_count}</div>
                  </li>
                  <li className="list-group-item">
                    <div className="h6 text-muted">Visited</div>
                    <div className="h5">{data.profile_visited_count}</div>
                  </li>
                  <li className="list-group-item">
                    <div className="h6 text-muted">Matched with you</div>
                    <div className="h5">{data.matchedCount}%</div>
                  </li>
  
                </ul>
              </CardBody>
              <CardFooter>
  
              </CardFooter>
            </Card>
          </Col>
          </div>
          </div>
      )
          }
        )
     
      ):(
        <div className='row'>
        <div  className='col-lg-2 col-md-4 col-sm-12 col-12'/>
   <div  className='col-lg-6 col-md-4 col-sm-12 col-12'>
        <Col>
        <Card>
          <CardHeader>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-between align-items-center">
                <div class="media m-0">
                  <div >
                    <Link
                      to={{
                        pathname: '/pro-page',
                        // visited: data.email,

                      }}
                    >
                      <Button
                        class="rounded-circle img-raised"
                        alt="User"
                      >
                        <i class="fas fa-question-circle glypicon_color faa-shake animated"></i>


                        </Button>

                    </Link>

                  </div>
                </div>
                <div className="ml-2">
                  <div className="h5 m-0 text-white"> 
                </div>
                </div>
              </div>
              <div></div>
            </div>
          </CardHeader>
          <CardBody>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
            <h1 className='text-info'>  No Such Data Available!</h1>
                   </li>
            

            </ul>
          </CardBody>
          <CardFooter>

          </CardFooter>
        </Card>
      </Col>
      </div>
      </div>
        )

      }
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
    profile_visit,
  
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Search);
