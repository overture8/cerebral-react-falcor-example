function getGreeting(input, state, output) {
  input.utils.falcor.
    get("greeting").
    then(output.success);
}

export default getGreeting;
