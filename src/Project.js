import React, { Component } from "react";
import ProjectList from "./ProjectList";
import { connect } from "react-redux";

class Project extends Component {
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
                return <ProjectList design={design} key={design.id} />;
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

export default connect(mapStatetoProps,null)(Project);
