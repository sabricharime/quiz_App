export default (state) => {
  state = {
    ...state,
    score: state.score + 100,
  };

  return state;
};
