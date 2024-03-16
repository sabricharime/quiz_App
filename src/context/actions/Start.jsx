export default (state, { questions, question }) => {
  state = {
    ...state,
    isStart: true,
    questions: [...questions],
    question: question,
  };
  return state;
};
