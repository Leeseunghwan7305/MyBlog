const listLine = document.querySelector(".underline");
const lists = document.querySelectorAll(".list-lists");
const navList = document.querySelector(".list");
const backGround = document.querySelector(".main-background");
const name = document.querySelector(".main-background-name");
const box = document.querySelector(".main.background-box");
const studyList = document.querySelectorAll(".study-list");
const imgList = document.querySelector(".past-img-list");
const text6 = document.querySelector(".text1");
const text7 = document.querySelector(".text2");
const text8 = document.querySelector(".text3");
const text9 = document.querySelector(".text4");
const text10 = document.querySelector(".text5");
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
  if (scrollTop > 5000) {
    text10.classList.add("new");
  } else if (scrollTop > 4550) {
    text9.classList.add("new");
  } else if (scrollTop > 3800) {
    text8.classList.add("new");
  } else if (scrollTop > 1800) {
    text6.classList.add("new");
  } else if (scrollTop > 1700) {
    text7.classList.add("newnew");
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
