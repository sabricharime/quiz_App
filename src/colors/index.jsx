import { useQuiz } from "../context/mainContext";

const dark = {
  background: "#333",
  foreground: "#f4f4f4",
  mainColor: "#ff0",
};

const light = {
  background: "#f4f4f4",
  foreground: "#333",
  mainColor: "#ff8800",
};

function Colors() {
  const { state } = useQuiz();
  return {
    background: state.dark ? dark.background : light.background,
    color: state.dark ? dark.foreground : light.foreground,
    mainColor: state.dark ? dark.mainColor : light.mainColor,
  };
}

export default Colors;
