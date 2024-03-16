export default (state, { status }) => {

    console.log(status)
  state = {
    ...state,
    wrrong: status,
  };

  return state;
};
