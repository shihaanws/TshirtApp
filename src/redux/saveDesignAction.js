

// SAVE DESIGN ACTION
export const saveDesign = (design, id) => {
  return (dispatch, getState) => {
    dispatch({ 
      type: "SAVE_DESIGN",
      design,
      id });
  };
};

// Added selectedId which was not dispatched previously


// REMOVE DESIGN ACTION
export const RemoveDesign = (design, id) => {
  return (dispatch, getState) => {
    dispatch({
      type: "REMOVE_DESIGN",
      design,
      id
    });
  };
};

