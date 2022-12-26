"use strict";

const button = document.getElementById("addButton"); // HTML 요소 중에 id가 addButton인 요소를 선택해서 변수 button 안에 대입
const input = document.getElementById("inputText"); // HTML 요소 중에 id가 inputText인 요소를 선택해서 변수 input 안에 대입
const list = document.getElementById("toDoList"); // HTML 요소 중에 id가 toDoList인 요소를 선택해서 변수 list 안에 대입

// 데이터
let inputList = [];
let count = 1;

function addList() {
  if (!input.value) alert("내용을 입력해 주세요");
  else {    
    // 목록에 추가
    inputList.push(input.value);

    // 입력창 초기화
    input.value = "";

    // 그리기
    reander();
  }
}

// list 삭제하기
function removeList(count) { // removeList 함수 선언 
  inputList.splice(count-1, 1);

  // 그리기
  reander();
}


// list 내용 수정하기
function modifyList(count) {  // modifyList 함수 선언 
  if (!input.value) alert('내용을 입력해 주세요');  // 만약 input 내용이 비었을 시 나오는 경고창  
  else {
    // 목록에서 바꿔치기
    
    // input.value
    inputList

    // 그리기
    reander();
  }
}

function reander() {
  // 그려진 목록 초기화
  // list 자녀 모두 지우기

  // 목록 새로 그리기
  count = 1;
  for (let i = 0; i < inputList.length; ++i) {
    let temp = document.createElement("li");
    temp.setAttribute('id', 'li_'+count);
    temp.innerHTML = inputList[i]; // 인덱스값 넣어서 필요한 아이템값 가져오기
    temp.innerHTML += `<button id='btn_change' type='button' onclick='modifyList(${count})'>수정</button>`;
    temp.innerHTML += `<button id='btn_delete' type='button' onclick='removeList(${count})'>삭제</button>`;
    list.appendChild(temp);
    input.value = ""; // 입력창 초기화
    count++;
  }
}