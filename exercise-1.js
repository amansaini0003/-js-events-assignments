const countBtn = document.getElementById("cnt-btn");
const handleClick = (e) => {
  countBtn.value++;
};
countBtn.onclick = handleClick;
