let defaultState = {
  color: "red"
};
let initState = {
  color: "green"
};
const subReducer = (state = initState, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.color };
    default:
      return { ...state };
  }
};
// export default mainReducer;

export default subReducer;
