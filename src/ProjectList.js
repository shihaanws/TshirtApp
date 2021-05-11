import { React } from "react";
import "./Display.css";
import "./ProjectList.css";
import { useDispatch } from "react-redux";
import { RemoveDesign } from "./saveDesignAction";


const imgBase =
  "https://mms-images.out.customink.com/mms/images/catalog/colors/";

const ProjectList = ({ design }) => {
  // console.warn(design)
  const dispatch = useDispatch();
  // const [design,setDesign] = useState();

//   console.log(design.textColor);

  const removeHandler = (design) => {
    //    console.log("Design--", design);
    /**Bug fix -- swasthika
     * Sending the selected id while dispatch
     */
    dispatch(RemoveDesign(design, design.id));
  };

  // const Display = ({display, textFormat} )=> {
  //     console.log(display.textColor)

  return (
    <div className="savedItems ">
      <div className=" card card-body" style={{ width: "500px" }}>
        <div className="imgWithText">
          <img
            className="img-fluid"
            src={`${imgBase}${design.tshirtColor}.jpg`}
            alt="t-shirt"
          />
          <p style={{ color: design.textColor }}>{design.upperText}</p>
          <img
            className="proImage"
            style={{ width: "100px" }}
            src={`${design.url}` || "https://i.ibb.co/vB8zC7B/tshirt.png"}
            alt="meme-text"
          />
        </div>

        <button
          onClick={() => removeHandler(design)}

          key={design.id}
          style={{ alignItems: "center" }}
          className="btn btn-danger btn-sm "
        >
          Remove Design
        </button>
      </div>
    </div>
  );
};

export default ProjectList;
