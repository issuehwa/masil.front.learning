'use strict';

const button = document.getElementById('addButton');  // HTML 요소 중에 id가 addButton인 요소를 선택해서 변수 button 안에 대입
const input = document.getElementById('inputText');  // HTML 요소 중에 id가 inputText인 요소를 선택해서 변수 input 안에 대입
const list = document.getElementById('toDoList');  // HTML 요소 중에 id가 toDoList인 요소를 선택해서 변수 list 안에 대입
let listData = new Array;  // listData 배열 선언
// let count = 1;  // count 변수에 숫자 1을 할당


button.addEventListener('click',addToDoList);  // click 이벤트 리스너를 등록 (버튼을 클릭하면 반응하는 이벤트)

function addToDoList() {   // addToDoList 함수 선언 (알아보기 편하게 이벤트 리스너랑 분리함)
  if (!input.value) alert('내용을 입력해 주세요');  // 만약 input 내용이 비었을 시 나오는 경고창
  else {
    listData = document.getElementById('inputText').value;  // input에 입력한 문자열을 읽어옴
    
  }
}

// function addToDoListWhile () {
//   for ( ) {
//     let print = document.createElement('li');
//     print.innerHTML = listData;
//     print.innerHTML += "<button class='btn_change' type='button' onclick='modify(" + count + ")'>수정</button>";
//     print.innerHTML += "<button class='btn_delete' type='button' onclick='remove(" + count + ")'>삭제</button>";
//     list.appendChild(temp);
//     input.value = '';  // 입력창 초기화
//   } 
// }



// list 추가하기 (예전에 썼던거)
// button.addEventListener('click', function () {   // click 이벤트 리스너를 등록
//   if (!input.value) alert('내용을 입력해 주세요');  // 만약 input 내용이 비었을 시 나오는 경고창
//   else {
//     let temp = document.createElement('li');  // html에 li 태그를 만듦
//     temp.setAttribute("class", "list_group");  // 요소의 속성 값을 정함 (class명)
//     temp.setAttribute("id", "li_" + count);  // 요소의 속성 값을 정함 (li+count)
//     temp.innerHTML = input.value;   // input에 적힌 내용을 HTML li 태그 안에 추가
//     temp.innerHTML += "<button class='btn_change' type='button' onclick='modify(" + count + ")'>수정</button>";  // 수정 버튼 추가
//     temp.innerHTML += "<button class='btn_delete' type='button' onclick='remove(" + count + ")'>삭제</button>";  // 삭제 버튼 추가
    
    
//     // temp.innerHTML += `<button class='btn_delete' type='button' onclick='remove(${count})'>삭제</button>`;  // 삭제 버튼 추가
//     list.appendChild(temp); // list 안에 자식으로 붙임
//     input.value = '';  // 입력창 초기화
//     count++;  // count 수를 1 증가

//     // TODO: 
//     // 데이터 저장
//     // 그리기반복문 호출 하여 그리기
//   }
// })



function 그리기반복문 () {
  // 2. dom - 기존에 그려진 목록 삭제
  // 3. dom - 데이터로 반복문으로 엘리먼트를 생성
}

// list 삭제하기
function remove(count) { // remove 함수 선언 (count 인자 값을 받아옴)
  let li = document.getElementById('li_' + count); // HTML 요소 중에 id가 li+count인 요소를 선택해서 li 안에 대입
  list.removeChild(li);  // li(list) 삭제

  // TODO: 
    // 데이터 삭제
    // 그리기반복문 호출 하여 그리기
}

// list 내용 수정하기
function modify(count) {  // modify 함수 선언 (count 인자 값을 받아옴)
  if (!input.value) alert('내용을 입력해 주세요');  // 만약 input 내용이 비었을 시 나오는 경고창  
  else {
    let li = document.getElementById('li_' + count);  // html에 li 태그를 만듦
    li.innerHTML = input.value;  // input에 적힌 내용을 HTML li 태그 안에 변경
    li.innerHTML += "<button class='btn_change' type='button' onclick='modify(" + count + ")'>수정</button>"; // 수정 버튼 추가
    li.innerHTML += "<button class='btn_delete' type='button' onclick='remove(" + count + ")'>삭제</button>"; // 삭제 버튼 추가
    input.value = ''; // 입력창 초기화

    // TODO: 
    // 데이터 수정
    // 그리기반복문 호출 하여 그리기
  }
}
