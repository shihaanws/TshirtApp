import React,{Component} from 'react';
import ProjectList from "./ProjectList";
import {connect} from "react-redux";
import {RemoveDesign} from "./saveDesignAction" 

class Project extends Component  {
  
    render(){
        // console.log(this.props)
        const {designs} = this.props
        return (
            <div className="container mb-5">
                <div className="row">
                    <div className="project-list">
                {/* mapping all data from "designs" to "design" */}
            
                        {designs && designs.map(t => {
                            return(
                                <ProjectList t={t} key={t.id}  />
                                )
                            })
                        }


                    </div>
                </div>
                
            </div>
        )
    }
   
}

const mapStatetoProps=(state) =>{
    return {
        designs: state.design.designs
    }
    
}

const mapDispatchToProps = dispatch =>({
    removeHandler:() =>dispatch(RemoveDesign())
})


export default connect(mapStatetoProps,mapDispatchToProps)(Project);
