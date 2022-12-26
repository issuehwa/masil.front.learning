"use strict";

const button = document.getElementById("addButton"); // HTML 요소 중에 id가 addButton인 요소를 선택해서 변수 button 안에 대입
const input = document.getElementById("inputText"); // HTML 요소 중에 id가 inputText인 요소를 선택해서 변수 input 안에 대입
const list = document.getElementById("toDoList"); // HTML 요소 중에 id가 toDoList인 요소를 선택해서 변수 list 안에 대입
let inputList = [];
let count = 1;


// function 그리기반복문 () {
//   // 2. dom - 기존에 그려진 목록 삭제
//   // 3. dom - 데이터로 반복문으로 엘리먼트를 생성
// }

function showList() {
  if (!input.value) alert("내용을 입력해 주세요");
  else {
    for (let i = 0; i <= inputList.length; ++i) {
      inputList.push(input.value);
      let temp = document.createElement("li");
      temp.setAttribute('id', 'li_'+count);
      temp.innerHTML = inputList;
      temp.innerHTML += `<button id='btn_change' type='button' onclick='modifyList(${count})'>수정</button>`;
      temp.innerHTML += `<button id='btn_delete' type='button' onclick='removeList(${count})'>삭제</button>`;
      list.appendChild(temp);
      input.value = ""; // 입력창 초기화
      inputList = []; // 배열값 초기화
      count++;
    }
  }
}

// list 삭제하기
function removeList(count) { // removeList 함수 선언 
  let li = document.getElementById('li_'+count);
  li.remove();
}


// list 내용 수정하기
function modifyList(count) {  // modifyList 함수 선언 
  if (!input.value) alert('내용을 입력해 주세요');  // 만약 input 내용이 비었을 시 나오는 경고창  
  else {
    let li = document.getElementById('li_'+count);
    li.innerHTML = input.value;
    li.innerHTML += `<button id='btn_change' type='button' onclick='modifyList(${count})'>수정</button>`;
    li.innerHTML += `<button id='btn_delete' type='button' onclick='removeList(${count})'>삭제</button>`;
    input.value = ""; // 입력창 초기화
    // TODO: 
    // 데이터 수정
    // 그리기반복문 호출 하여 그리기
  }
}