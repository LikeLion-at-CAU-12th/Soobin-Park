const myHandText = document.getElementById("my-hand-text")
const myHandIcon = document.getElementById("my-hand-icon")

const computerText = document.getElementById("computer-hand-text")
const computerIcon = document.getElementById("computer-hand-icon")

const rockBtn = document.getElementById("rock")
const scissorsBtn = document.getElementById("scissors")
const paperBtn = document.getElementById("paper")

//2. 선언한 dom 요소에 이벤트 생성

rockBtn.addEventListener("click", displayMyChoice);
scissorsBtn.addEventListener("click", displayMyChoice);
paperBtn.addEventListener("click", displayMyChoice);


function displayMyChoice(e){
  let clickedBtn = e.currentTarget.id;
  let clickedicon = e.target.className;

  myHandText.innerText = clickedBtn;
  myHandIcon.className = clickedicon;

  start(clickedBtn);
}

function getComChoice(){
  const randomvalue = {
    0: ["rock","fa-regular fa-hand-back-fist"],
    1: ["scissors","fa-regular fa-hand-scissors fa-rotate-90"],
    2: ["paper", "fa-regular fa-hand"],
  };

  const randomIndex = Math.floor(Math.random() * 3);

  return randomvalue[randomIndex];
}

function displayComChoice(result) {
  computerText.innerText = result[0];
  computerIcon.className = result[1]; 
}

function start(myChoice) {
  let resultArray = getComChoice();
  displayComChoice(resultArray);
}