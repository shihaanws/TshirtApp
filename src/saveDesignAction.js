export const saveDesign = (design) => {

    return (dispatch, getState)=> {

        dispatch ({type:'SAVE_DESIGN', design})

    }
}


export const RemoveDesign = (design) => {

    return (dispatch, getState)=> {

        dispatch ({type:'REMOVE_DESIGN', design})
    }
}

//     const {
//       designs: {designs},
//   } = getState();
  
 
    //   dispatch({
    //       type: "REMOVE_DESIGN",
    //       payload:designs.filter((design)=> design.id !==design.id)
    //   })
    