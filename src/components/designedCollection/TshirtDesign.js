import React, { Component } from "react";
import TshirtDesignList from "./TshirtDesignList";
import { connect } from "react-redux";

class TshirtDesign extends Component {
  render() {
    const { designs } = this.props;
    // console.log("designs--", designs);

    return (
      <div className="container mb-5">
        <div className="row">
          <div className="design-list">

            {/* mapping all data from "designs" to "design" */}
            {designs &&
              designs.map((design) => {
                return <TshirtDesignList design={design} key={design.id} />;
              })}

          </div>
        </div>
        {designs.length == 0 ?
          <div style={{ width: "20%", top: "50%", left: "50%", position: "absolute", transform: "translate(-50%,-50%)" }} >
            <img style={{ width: "100%" }}   src="./empty.svg" />
            <h5 style={{ width:"100%", textAlign:"center", marginTop:"20px" }}  >No saved designs found!</h5>
          </div>

          : null}
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    designs: state.design.designs,
  };
};

export default connect(mapStatetoProps, null)(TshirtDesign);
