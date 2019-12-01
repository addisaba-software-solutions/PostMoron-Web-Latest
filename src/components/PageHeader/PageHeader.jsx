import React from "react";
import "../../views/IndexSections/local.css"

// reactstrap components
import { Container } from "reactstrap";
let pageHeader = React.createRef();
class PageHeader extends React.Component {
  render() {
    return (
      <div className="page-header clear-filter" filter-color="pink">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg_lp.png") + ")"
          }}
          ref={pageHeader}
        ></div>

        <div className="page-header header-filter">
          <div className="squares square1" />
          <div className="squares square2" />
          <div className="squares square3" />
          <div className="squares square4" />
          <div className="squares square5" />
          <div className="squares square6" />
          <div className="squares square7" />
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
              <h1 > Find your</h1>
              <h1 >true love</h1>
            </div>
          </Container>
          
        </div>
      </div>
    );
  }
}

export default PageHeader;
