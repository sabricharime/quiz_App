import { useState } from "react";
import { useQuiz } from "../../context/mainContext";
import { GLOBAL_TYPES } from "../../context/types";

function MainQuiz() {
  const random = (arr) => ~~(Math.random() * arr.length);
  const { state, dispatch } = useQuiz();
  const [active, setActive] = useState("");
  let a = [];
  for (let i in state.question.answers) {
    a.push({ key: i, value: state.question.answers[i] });
  }

  return (
    <main>
      <p>Question: {state.question.question} ?</p>
      {a.map((item, i) =>
        item.value ? (
          <p
            className={`answer ${active === `${i}` ? "active" : ""}`}
            key={i}
            data-id={i}
            onClick={function (e) {
              dispatch({
                type: GLOBAL_TYPES.GET_ANWSER,
                payload: {
                  answer: item.key.slice(-1).toLowerCase(),
                },
              });
              setActive(e.currentTarget.dataset.id);
            }}
          >
            {item.key}: {item.value}{" "}
          </p>
        ) : (
          ""
        )
      )}

      <button
        className="mainBTN"
        style={{ marginTop: "1rem" }}
        onClick={function (e) {
          if (state.answer === state.question.answer) {
            state.questions.length > 0
              ? (dispatch({
                  type: GLOBAL_TYPES.NEXT_QUESTION,
                  payload: {
                    newQuestion: state.questions.filter(
                      (item) => item.question !== state.question.question
                    ),
                  },
                }),
                dispatch({
                  type: GLOBAL_TYPES.CHANGE_QUESTION,
                  payload: {
                    question: state.questions[random(state.questions)],
                  },
                }),
                dispatch({ type: GLOBAL_TYPES.SCORE }),
                dispatch({
                  type: GLOBAL_TYPES.WRRONG,
                  payload: {
                    status: false,
                  },
                }),
                setActive(""))
              : state.questions.length <= 0
              ? alert("End Game You Win" + " Your Score IS: " + state.score)
              : alert("someThing wrrong");
          } else {
            dispatch({
              type: GLOBAL_TYPES.WRRONG,
              payload: {
                status: true,
              },
            });

            console.log(state.wrrong);
            return setTimeout(function () {
              dispatch({
                type: GLOBAL_TYPES.WRRONG,
                payload: {
                  status: false,
                },
              });
            }, 3000);
          }
        }}
      >
        Next Question
      </button>
    </main>
  );
}

export default MainQuiz;
