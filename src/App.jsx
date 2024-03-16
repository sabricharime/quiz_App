/**
 ** Simple QUIZ APP USING CONTEXT API AND USE REDUCER HOOKS
 * THIS SIMPLE APP BUILDING BY SABRI CHARIME
 * SABRI CHARIME 2024
 */

import MainAlert from "./alert/MainAlert";
import { useQuiz } from "./context/mainContext";
import Header from "./layout/Header";
import Main from "./layout/Main";

function App() {
  const { state } = useQuiz();
  return (
    <>
      <Header />
      <Main />
      {state.wrrong ? <MainAlert msg={"Wrrong answer"} /> : <MainAlert msg={"Score: "+state.score} />}
    </>
  );
}

export default App;
