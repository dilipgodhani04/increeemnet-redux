const intialState = 0;

const newData = (state = intialState, action) => {
  switch (action.type) {
    case "INCREEMENT":
      return state +3;
    case "DECREEMENT":
      return state -6;
      default: return state;
  }
};
export default newData;
