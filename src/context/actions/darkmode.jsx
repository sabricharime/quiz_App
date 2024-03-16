function dark(state, { dark }) {
  state = {
    ...state,
    dark: dark,
  };
  return state;
}

export default dark;
