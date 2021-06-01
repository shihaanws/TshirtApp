import React from 'react';
import './Display.css'
import {Button} from "react-bootstrap"

function Settings({color,upperText, uploadImage, textSize, textColor,saveDesign}) {
    return (
        <div  className="card container">
            <h4  className="colorheading">Color</h4>

            <div className="tshirt-color">
                <Button onClick={color} style={{width:"40px",height:"40px"}}  alt="" id="15000/views/front" variant="light"></Button>{' '}
                <Button onClick={color} style={{width:"40px",height:"40px"}} alt="" id="15008/views/front" variant="dark"></Button>               
                <Button onClick={color} style={{width:"40px",height:"40px"}} alt="" id="15009/views/front" variant="secondary"></Button>{' '}
                <Button onClick={color} style={{width:"40px",height:"40px"}} alt="" id="15011/views/front" variant="primary"></Button>{' '}
                <Button onClick={color} style={{width:"40px",height:"40px"}} alt="" id="15013/views/front" variant="danger"></Button>              
            </div>

            <hr/>
            <h4>Text</h4>
            <input onChange={upperText} type="text" className="form-control form-control-sm mb-2" placeholder="Enter your text here"></input>
            <hr/>
            <h4>Upload an image</h4>
            <div className="form-group">
                <input onChange={uploadImage} type="file" className="form-control-file mb-2"></input>
            </div>
            <hr/>
            <h4>Text size</h4>
            <input onChange={textSize} type="range" min="12" max="52"/>
            <hr/>
            <h4>Text color</h4>
            <select onChange={textColor} className="form-control form-control-sm mb-2">
                <option>White</option>
                <option>Black</option>
                <option>Blue</option>
                <option>Red</option>
                <option>Gray</option>

            </select>

            <hr/>
            <Button onClick={saveDesign} id="saveDesign" variant="success">Save the Design</Button>{' '}

        </div>
    )
}

export default Settings