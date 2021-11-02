const listLine = document.querySelector(".underline");
const lists = document.querySelectorAll(".list-lists");
const navList = document.querySelector(".list");
const backGround = document.querySelector(".main-background");
const name = document.querySelector(".main-background-name");
window.addEventListener("load", function () {
  backGround.style.height = window.innerHeight + "px";
  backGround.style.top = window.innerHeight / 2 + "px";
  backGround.style.left = window.innerWidth / 2 + "px";
});
lists.forEach((item) => {
  item.addEventListener("click", function (e) {
    lineColor(e);
  });
});
function lineColor(e) {
  listLine.style.left = e.currentTarget.offsetLeft + "px";
  listLine.style.width = e.currentTarget.offsetWidth + "px";
  listLine.style.top =
    e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}
const content = "HELLO :) WELCOME TO MY BLOG";
const content2 = " 안녕하세요 이승환입니다.";
const text = document.querySelector(".text");
const text2 = document.querySelector(".text2");
let i = 0;
let j = 0;

function typing() {
  if (i < content.length) {
    let txt = content.charAt(i);
    text.innerHTML += txt;
    i++;
  }
}
function typing2() {
  if (j < content2.length) {
    let txt2 = content2.charAt(i);
    text2.innerHTML += txt2;
    j++;
  }
}
setInterval(typing, 200);
setInterval(typing2, 200);
window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 0) {
    navList.style.background = "black";
    navList.style.padding = "8px 5px";
  } else {
    navList.style.background = "transparent";
  }
});
