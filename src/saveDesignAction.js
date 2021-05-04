export const saveDesign = (design,selectedId) => {
  return (dispatch, getState) => {
    dispatch({ type: "SAVE_DESIGN", design, selectedId });
  };
};

/**Bug fix -- swasthika
 * Added selectedId which was not dispatched previously
 */
export const RemoveDesign = (design, selectedId) => {

  return (dispatch, getState) => {

    dispatch({ 

      type: "REMOVE_DESIGN", 
      design,
      selectedId });
  };
};

//     const {
//       designs: {designs},
//   } = getState();

//   dispatch({
//       type: "REMOVE_DESIGN",
//       payload:designs.filter((design)=> design.id !==design.id)
//   })
