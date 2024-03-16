export default (state, { newQuestion }) => {
  state = {
    ...state,
    questions: newQuestion,
  };

  return state;
};
