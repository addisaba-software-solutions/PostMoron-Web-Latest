/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 992) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="pink">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg_lp.png") + ")"
          }}
          ref={pageHeader}
        ></div>


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
          <div >
            <h1 align="left"> Find your</h1>
            <h1 align="left">true love</h1>
         </div>
        </Container>




        
      </div>
    </>
  );
}

export default IndexHeader;
