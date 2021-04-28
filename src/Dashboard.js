import React, {Component} from 'react'
import Display from './Display'
import Settings from './Settings'
import {storage} from "./firebaseConfig";
import {saveDesign} from './saveDesignAction';
import { connect } from 'react-redux';

class  Dashboard extends Component {

    state={
        tshirtColor:'15000/views/front',
        name:'Default text',
        lowerText:'this lower',
        memeimg:'',
        url:'',
        textSize: 38,
        textColor:'white'
    }

    handleTshirtColor=(e)=>{
        // console.log(e.target.id)
       this.setState({tshirtColor: e.target.id});
    }
    

    handleUpperText=(e)=>{
        // console.log(e.target.id)
       this.setState({upperText: e.target.value});
    }
    

    handleTextSize=(e)=>{
        this.setState({textSize: e.target.value})
    }


    handleTextcolor=(e)=>{
        this.setState({textColor:e.target.value})
    }


    formatText(){
        const size = this.state.textSize;
        return parseInt(size);
    }

    handleImageUpload = (e)=> {
        if(e.target.files[0]){
            const image= (e.target.files[0])
            const uploadTask = storage.ref(`images/${image.name}`).put(image)
            uploadTask.on('state_change',
            (snapshot)=>{
                console.log(snapshot);

            },
            (error)=>{
                console.log(error);

            },
            () =>{
                storage.ref('images').child(image.name).getDownloadURL().then(url =>{
                    this.setState({url})
                })
            }
            )
        }
    }



    handleSaveDesign=(e)=>{
        if(e.target.id === 'saveDesign'){
     this.props.saveDesign(this.state)
}
    }



render(){


    return (
        <div  className="container py-5">
            <div className="row">

                <div className="col-lg-8">
                    <Display display={this.state}
                    textFormat={this.formatText()}
                    />
                    {/* <DarkModeToggle/> */}
                    
              
                </div>

                <div className="col-lg-4">
                    <Settings
                    color={this.handleTshirtColor}
                    upperText={this.handleUpperText}
                    uploadImage={this.handleImageUpload}
                    textSize={this.handleTextSize}
                    textColor={this.handleTextcolor}
                    saveDesign={this.handleSaveDesign}
                    />
                </div>

            </div>
        </div>
    )
}

}


const mapDispatchToProps =(dispatch) =>{
    return{
        saveDesign:(design)=> dispatch(saveDesign(design))
    }
}

export default connect(null,mapDispatchToProps)(Dashboard)
