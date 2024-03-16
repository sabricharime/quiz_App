import { useQuiz } from "../context/mainContext";
import { GLOBAL_TYPES } from "../context/types";
import questions from "../data/fakeData";

function StartButton() {
  const { dispatch } = useQuiz();

  const random = (arr) => ~~(Math.random() * arr.length);

  const startHandler = () => {
    dispatch({
      type: GLOBAL_TYPES.START,
      payload: {
        questions: questions,
        question: questions[random(questions)],
      },
    });
  };
  return (
    <button onClick={startHandler} className="mainBTN StartButton">
      Start Quiz
    </button>
  );
}

export default StartButton;
