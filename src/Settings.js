import React from 'react';
import './Display.css'
const  urlImgBase ='https://mms-images.out.customink.com/mms/images/catalog/colors/';


function Settings({color,upperText, uploadImage, textSize, textColor,saveDesign}) {
    return (
        <div className="card bg-light container">
            <h3 className="text-center">Settings</h3>
            <h4>Color</h4>
            <div className="tshirt-color">
                <img  onClick={color} src={`${urlImgBase}15000/views/front.jpg`}alt="white-tshirt" id="15000/views/front"/>
                <img  onClick={color} src={`${urlImgBase}15008/views/front.jpg`} alt="black-tshirt" id="15008/views/front"/>
                <img  onClick={color} src={`${urlImgBase}15009/views/front.jpg`} alt="grey-tshirt" id="15009/views/front"/>
                <img onClick={color} src={`${urlImgBase}15011/views/front.jpg`} alt="blue-tshirt" id="15011/views/front"/>
                <img onClick={color} src={`${urlImgBase}15013/views/front.jpg`} alt="red-tshirt" id="15013/views/front"/>

            </div>
            <hr/>
            <h4>Text</h4>
            <input onChange={upperText} type="text" className="form-control form-control-sm mb-2" placeholder="Enter your text here"></input>
            {/* <input type="text" className="form-control form-control-sm mb-2" placeholder="lowertxt"></input> */}
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
<button onClick={saveDesign} id="saveDesign"  className="btn btn-primary btn-sm mb-2">Save design</button>

        </div>
    )
}

export default Settings
