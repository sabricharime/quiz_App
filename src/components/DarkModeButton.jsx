import { useState } from "react";
import Colors from "../colors";
import { useQuiz } from "../context/mainContext";
import { GLOBAL_TYPES } from "../context/types";
import setProperty from "../colors/setProperty";

function DarkModeButton() {
  const { state, dispatch } = useQuiz();
  const colors = Colors();
  const [name, setName] = useState("To Light 🔘");

  const ClickHandler = (e) => {
    dispatch({
      type: GLOBAL_TYPES.DARK_MODE,
      payload: {
        dark: !state.dark,
      },
    });
    setName(state.dark ? "To Light 🔘" : "To Dark ⚫");
    setProperty({
      "--background": colors.background,
      "--forground": colors.color,
      "--mainColor": colors.mainColor,
    });
  };

  return (
    <button className="darkmode" onClick={ClickHandler}>
      {name}
    </button>
  );
}

export default DarkModeButton;
