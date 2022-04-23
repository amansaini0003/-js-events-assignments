const inputText = document.getElementById("ip-text");
const log = document.getElementById("log");

const handleInput = (e) => {
  log.textContent = `The above text has ${e.target.value.length} character(s) long.`;
};

inputText.oninput = handleInput;
