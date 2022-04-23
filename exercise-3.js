const inputUrl = document.getElementById("ip-url");
const outputUrl = document.getElementById("op-url");
const endcodeBtn = document.getElementById("endcode-btn");
const decodeBtn = document.getElementById("decode-btn");

endcodeBtn.onclick = () => {
  outputUrl.value = encodeURIComponent(inputUrl.value);
};
decodeBtn.onclick = () => {
  outputUrl.value = decodeURIComponent(inputUrl.value);
};
