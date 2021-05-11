const initialState = {
  designs: [
    // { id: 85, name: "Project One", tshirtColor: "15000/views/front" },
    // { id: 52, name: "Project two", tshirtColor: "15008/views/front" },
    // { id: 50, name: "Project two", tshirtColor: "15009/views/front" },
    // { id: 2, name: "Project two", tshirtColor: "15011/views/front" },
    // { id: 58, name: "Project two", tshirtColor: "15013/views/front" },
  ],
};


const designReducers = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_DESIGN":

      console.log("design is saved in the list", action.design);
      return {
        ...state,
        designs: [...state.designs, action.design],
      };


      case "REMOVE_DESIGN":

        console.log("Remove button clicked");

        const index = state.designs.findIndex( (a) => a.id === action.id);

        let newBasket = [...state.designs];


       console.log("Index is",index)

        if (index >= 0) {
          
          // At position "index" remove 1 item
          newBasket.splice(index, 1);
        } else {
          console.warn(
            `Cant remove product `
          )
        }
  
        return {
          ...state,
          designs: newBasket
        }





    // case "REMOVE_DESIGN":
    //   console.log("Remove button clicked");

    // const index = state.designs.findIndex(
    //   (design) => design.id === action.selectedId
    // );


    // let newBasket = [...state.designs]

    // if (index >= 1){
    //   newBasket.splice(index,1)
    // }

    // return{
    //   ...state,
    //   designs:newBasket
    // }



      // console.log("Remove button clicked");
      //       console.log("Removed ID is",action.selectedId)

      // return {
      //   ...state,

      //   // payload:designs.filter((design)=> design.id !==design.id)
      //   /**Bug fix -- swasthika
      //    * After dispatching the action, the id can be accessed in the reducer as action.selectedId
      //    */


      //   designs: state.designs.filter(
      //     (design) => design.id !== action.selectedId
          
      //   ),
        

      // };


    default:
      return state;
  }
  // return state
};

export default designReducers;
