const initialState = {
  designs: [
    // { id: 85, name: "TshirtDesign One", tshirtColor: "15000/views/front" },
    // { id: 52, name: "TshirtDesign two", tshirtColor: "15008/views/front" },
    // { id: 50, name: "TshirtDesign two", tshirtColor: "15009/views/front" },

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

      const index = state.designs.findIndex((a) => a.id === action.id);

      let newBasket = [...state.designs];


      console.log("Index is", index)

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

    //   /**Bug fix -- swasthika
    //    * After dispatching the action, the id can be accessed in the reducer as action.selectedId
    //    */

    default:
      return state;
  }
};

export default designReducers;
