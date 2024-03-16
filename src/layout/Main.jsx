import { useQuiz } from "../context/mainContext";
import MainQuiz from "./components/MainQuiz";
import StartSection from "./components/StartSection";

function Main() {
  const { state } = useQuiz();
  return (
    <main className="mainQuiz">
      {!state.isStart ? <StartSection /> : <MainQuiz />}
    </main>
  );
}

export default Main;
