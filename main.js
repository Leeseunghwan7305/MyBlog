const listLine = document.querySelector(".underline");
const lists = document.querySelectorAll(".list-lists");
const navList = document.querySelector(".list");
const backGround = document.querySelector(".main-background");
const name = document.querySelector(".main-background-name");
const box = document.querySelector(".main.background-box");
const studyList = document.querySelectorAll(".study-list");
const imgList = document.querySelector(".past-img-list");
const pastButton6 = document.querySelector(".past-list-6");
const pastButton7 = document.querySelector(".past-list-7");
const pastButton8 = document.querySelector(".past-list-8");
const pastButton9 = document.querySelector(".past-list-9");
const pastButton10 = document.querySelector(".past-list-10");
const pastButton11 = document.querySelector(".past-list-11");
window.addEventListener("load", function () {
  backGround.style.height = window.innerHeight + "px";
  box.style.top = window.innerHeight / 2 + "px";
  box.style.left = window.innerWidth / 2 + "px";
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
  let scrollTop = document.documentElement.scrollTop;
  if (scrollTop > 0) {
    navList.style.background = "black";
    navList.style.padding = "8px 5px";
  } else {
    navList.style.background = "transparent";
  }
  function up() {
    if (scrollTop > 650) {
      studyList.forEach((item) => {
        item.classList.add("studyUp");
      });
    } else {
      studyList.forEach((item) => {
        item.classList.remove("studyUp");
      });
    }
  }
  up();
  console.log(scrollTop);
});
pastButton6.addEventListener("click", function () {
  imgList.innerHTML = `시발시발`;
});
pastButton7.addEventListener("click", function () {
  imgList.innerHTML = `시발시발2`;
});
pastButton8.addEventListener("click", function () {
  imgList.innerHTML = `시발시발3`;
});
pastButton9.addEventListener("click", function () {
  imgList.innerHTML = `시발시발4`;
});
pastButton10.addEventListener("click", function () {
  imgList.innerHTML = `시발시발5`;
});
pastButton11.addEventListener("click", function () {
  imgList.innerHTML = `시발시발6`;
});
