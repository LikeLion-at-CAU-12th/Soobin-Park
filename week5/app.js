/*********** 변수 선언부 ************/
const myHandText = document.getElementById("my-hand-text")
const myHandIcon = document.getElementById("my-hand-icon")

const computerText = document.getElementById("computer-hand-text")
const computerIcon = document.getElementById("computer-hand-icon")

const rockBtn = document.getElementById("rock")
const scissorsBtn = document.getElementById("scissors")
const paperBtn = document.getElementById("paper")


/*********** 이벤트 등록부 ************/
// 각 버튼을 'click'하면 'displayMyChoice' 함수가 실행됨 
rockBtn.addEventListener("click", displayMyChoice);
scissorsBtn.addEventListener("click", displayMyChoice);
paperBtn.addEventListener("click", displayMyChoice);


/*********** 함수 선언부 ************/
// < 사용자가 선택한 항목을 화면에 표시하는 함수 >
//   1)용자가 선택한 버튼의 id와 icon을 가져와서 화면에 표시
//   2) 컴퓨터의 선택을 가져오는 함수를 실행 
function displayMyChoice(e){
  let clickedBtn = e.currentTarget.id;
  let clickedicon = e.target.className;

  myHandText.innerText = clickedBtn;
  myHandIcon.className = clickedicon;

  start(clickedBtn);
}

// < 컴퓨터의 선택을 랜덤으로 가져오는 함수 >
//   1) 랜덤으로 0,1,2 중 하나의 숫자를 생성
//   2) 0,1,2에 따라 rock, scissors, paper 중 하나의 값을 반환
//   3) 반환된 값으로 컴퓨터의 선택을 화면에 표시
function getComChoice(){
  const randomvalue = {
    0: ["rock","fa-regular fa-hand-back-fist"],
    1: ["scissors","fa-regular fa-hand-scissors fa-rotate-90"],
    2: ["paper", "fa-regular fa-hand"]
  };

  const randomIndex = Math.floor(Math.random() * 3);

  return randomvalue[randomIndex];
}

// < 컴퓨터의 선택을 화면에 표시하는 함수 >
//   1) 컴퓨터의 선택을 가져와서 화면에 표시
//   2) 컴퓨터의 선택에 따라 아이콘을 변경
function displayComChoice(result) {
  computerText.innerText = result[0]; //randomValue의 key값을 가져옴
  computerIcon.className = result[1]; //randomValue의 value값을 가져옴
}

// < 게임을 시작하는 함수 >
function start(myChoice) {
  let resultArray = getComChoice();
  displayComChoice(resultArray);
}