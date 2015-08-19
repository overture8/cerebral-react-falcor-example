function getGreeting(input, state, output) {
  input.utils.falcor.
    get("greeting").
    then((response) => {
      output.success(response);
    });
}

export default getGreeting;
