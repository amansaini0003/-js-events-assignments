const incBtn = document.getElementById("inc-btn");
const decBtn = document.getElementById("dec-btn");
const countValue = document.getElementById("count-value");

incBtn.onclick = (e) => {
  countValue.value++;
};
decBtn.onclick = (e) => {
  countValue.value--;
};
