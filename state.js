const state = {};

const resetState = () => {
  Object.keys(state).map((key) => delete state[key]);
  state.maintenance = false;
};

module.exports = { state, resetState };
