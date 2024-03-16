export default (state, { questions }) => {
  state = {
    ...state,
    questions: [...questions],
    
  };
};
