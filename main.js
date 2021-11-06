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
const goodButton = document.querySelector(".good-buttons");
const list1 = document.querySelector(".list-lists1");
const list2 = document.querySelector(".list-lists2");
const list3 = document.querySelector(".list-lists3");
const list4 = document.querySelector(".list-lists4");
const pastScroll = document.querySelector(".past-scroll");
const futureScroll = document.querySelector(".future-scroll");
list1.addEventListener("click", function () {
  backGround.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
});
list2.addEventListener("click", function () {
  pastScroll.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
});
list3.addEventListener("click", function () {
  futureScroll.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
});
list4.addEventListener("click", function () {
  goodButton.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
});
let heart = 1;
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
  if (scrollTop > 5500) {
    text10.classList.add("new");
  } else if (scrollTop > 4550) {
    text9.classList.add("new");
  } else if (scrollTop > 3800) {
    text8.classList.add("new");
  } else if (scrollTop > 1800) {
    text6.classList.add("new");
  } else if (scrollTop > 1700) {
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
const button1 = document.querySelector(".future1");
const button2 = document.querySelector(".future2");
const button3 = document.querySelector(".future3");
const button4 = document.querySelector(".future4");
const futureImg = document.querySelector(".future-imgs");

button2.addEventListener("click", function () {
  futureImg.innerHTML = `<img class="future-img" src="코딩.jpg" />`;
});
button1.addEventListener("click", function () {
  futureImg.innerHTML = `<img class="future-img" src="코딩.jpg" />
  <img class="future-img" src="여행.jpg" />
  <img class="future-img" src="헬스.png" />`;
});

button3.addEventListener("click", function () {
  futureImg.innerHTML = `<img class="future-img" src="여행.jpg" />`;
});
button4.addEventListener("click", function () {
  futureImg.innerHTML = `<img class="future-img" src="헬스.png" />`;
});
goodButton.addEventListener("click", function () {
  goodButton.innerHTML = `좋아요 ${heart}개`;
  heart++;
});
const chatInput = document.querySelector(".chat-input");
const chatList = document.querySelector(".chatting-list");
const chatButton = document.querySelector(".chat-button");

chatButton.addEventListener("click", function () {
  if (chatInput.value == "") {
    return 0;
  } else {
    let text = chatInput.value;
    creatchat(text);
    chatInput.value = "";
    chatInput.focus();
  }
});
let contextCount = 0;
function creatchat(text) {
  contextCount++;
  const div = document.createElement("div");
  div.setAttribute("class", "chatdiv");
  div.innerHTML = `${contextCount}번째 댓글: ${text}`;
  div.setAttribute("class", "chatlist");
  chatList.appendChild(div);
}
