const hexCode = document.getElementById("hex-code");
const box = document.querySelector(".box");

const inputHandle = (e) => {
  box.style.backgroundColor = e.target.value;
};
hexCode.oninput = inputHandle;
