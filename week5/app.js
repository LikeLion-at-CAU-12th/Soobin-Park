/*********** 전역변수 선언부 ************/
const myHandText = document.getElementById("my-hand-text")
const myHandIcon = document.getElementById("my-hand-icon")

const computerText = document.getElementById("computer-hand-text")
const computerIcon = document.getElementById("computer-hand-icon")

const rockBtn = document.getElementById("rock")
const scissorsBtn = document.getElementById("scissors")
const paperBtn = document.getElementById("paper")

const resultText = document.getElementById("display-result")

const winner = "";

const myScore = 0;
const comScore = 0;

/*********** 이벤트 등록부 ************/
// 각 버튼을 'click'하면 'displayMyChoice' 함수가 실행됨 -> 클릭할 때마다 이 함수가 실행되어 상태가 update 되고 반복되는 것
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

  // 사용자의 icon과 text 업데이트
  myHandText.innerText = clickedBtn;
  myHandIcon.className = clickedicon;

  start(clickedBtn); //사용자가 선택한 항목을 인자로 넘겨주면서 게임 한 판을 시작함
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
  displayComChoice(resultArray); //랜덤으로 받아온 컴퓨터의 선택을 화면에 표시
  calculateResult();
  updateScore(); 
}

///****  여기부터 suzzang's code  ****///
// < 게임 결과를 계산하고 출력하는 함수 >
function calculateResult() {
  //서로 어떤 거 냈는지 받아오기
  let myChoice = myHandText.innerText;
  let comChoice = computerText.innerText;

  if(myChoice === comChoice){
    resultText.innerText = "draw";
    winner = "none";
  }
  else if(myChoice === "rock" && comChoice === "scissors" || myChoice === "scissors" && comChoice === "paper" || myChoice === "paper" && comChoice === "rock"){
    resultText.innerText = "win";
    winner = "me";
  }
  else{
    resultText.innerText = "lose";
    winner = "com";
  }
}

function updateScore(){
  if(winner === "me"){
    myScore++;
  }
  else if(winner === "com"){
    comScore++;
  }
}
