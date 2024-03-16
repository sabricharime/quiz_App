import { useReducer, useContext, createContext } from "react";
import initialState from "./state/mainState";
import reducer from "./reducer/reducer";
// Create Context
const QuizContext = createContext();
//Create Provider
const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
//Use Our Provider Anywhere
export const useQuiz = () => {
  const main = useContext(QuizContext);
  if (!main) throw new Error("There is an Error ");
  return main;
};
export default QuizProvider;
