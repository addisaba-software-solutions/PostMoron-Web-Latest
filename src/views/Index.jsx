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

class Index extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("index-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }
  render() {
    return (
      <>
        <IndexNavbar />
        <div className="wrapper">
          <PageHeader />
          <div className="main">
            <FirstForm />
            <InfoF />
            <InfoS/>
            <InfoThird/>
            <InfoFourth/>
           
          </div>
        </div>
      </>
    );
  }
}

export default Index;
