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
          <div className="project-list">

            {/* mapping all data from "designs" to "design" */}
            {designs &&
              designs.map((design) => {
                return <TshirtDesignList design={design} key={design.id} />;
              })}
          </div>
        </div>
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
