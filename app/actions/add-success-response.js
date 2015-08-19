function addSuccessResponse(input, state, output) {
  state.unshift('responses', input.json);
}

export default addSuccessResponse;
