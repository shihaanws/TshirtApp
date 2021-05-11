import React from 'react'
import "./Display.css"

const Display = ({display, textFormat} )=> {
    // console.log(display.textColor)
    return (
        <div  className="mainimg  card card-content">
            <div className="TshirtImage text-center">
                <img
                className="img-responsive"
                // src= {`https://mms-images.out.customink.com/mms/images/catalog/colors/15000/views/front.jpg`}

                src= {`https://mms-images.out.customink.com/mms/images/catalog/colors/${display.tshirtColor}.png`}
                alt="tee-imag"
                />
            </div>




            <div className="memetext text-center">
                <div className="upperText text-center">
                    <p  style={{fontSize:textFormat, color:display.textColor}}>{display.upperText}</p>
                </div>
                <img
                src={`${display.url }` || "https://i.ibb.co/vB8zC7B/tshirt.png"}
                alt="meme-text"
                />

                {/* <div className="lowerText">
                    <p className="text-center">Just Do it !</p>
                </div> */}

            </div>
        </div>
    )
}

export default Display
