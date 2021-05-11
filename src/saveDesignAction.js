export const saveDesign = (design,id) => {
  return (dispatch, getState) => {
    dispatch({ type: "SAVE_DESIGN", design ,id});
  };
};

/**Bug fix -- swasthika
 * Added selectedId which was not dispatched previously
 */
export const RemoveDesign = (design, id) => {

  return (dispatch, getState) => {

    dispatch({ 

      type: "REMOVE_DESIGN", 
      design,
      id });
  };
};

//     const {
//       designs: {designs},
//   } = getState();

//   dispatch({
//       type: "REMOVE_DESIGN",
//       payload:designs.filter((design)=> design.id !==design.id)
//   })
