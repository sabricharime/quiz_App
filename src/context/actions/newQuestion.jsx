export default (state, { question }) => {
  state = {
    ...state,
    question,
  };
  return state;
};
