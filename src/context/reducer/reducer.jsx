import { GLOBAL_TYPES } from "../types";
import dark from "../actions/darkmode";
import Start from "../actions/Start";
import getAnswer from "../actions/getAnswer";
import nextQuestion from "../actions/nextQuestion";
import newQuestion from "../actions/newQuestion";
import wrrong from "../actions/wrrong";
import scoreAction from "../actions/scoreAction";

export default function (state, { type, payload }) {
  switch (type) {
    case GLOBAL_TYPES.DARK_MODE:
      return dark(state, payload);
    case GLOBAL_TYPES.START:
      return Start(state, payload);
    case GLOBAL_TYPES.GET_ANWSER:
      return getAnswer(state, payload);
    case GLOBAL_TYPES.NEXT_QUESTION:
      return nextQuestion(state, payload);
    case GLOBAL_TYPES.CHANGE_QUESTION:
      return newQuestion(state, payload);
    case GLOBAL_TYPES.WRRONG:
      return wrrong(state, payload);
    case GLOBAL_TYPES.SCORE:
      return scoreAction(state);
  }

  return state;
}
