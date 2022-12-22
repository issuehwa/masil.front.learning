'use strict';

let button = document.getElementById('button');  // HTML 요소 중에 id가 button인 요소를 선택해서 변수 button 안에 대입
let input = document.getElementById('input');  // HTML 요소 중에 id가 input인 요소를 선택해서 변수 input 안에 대입
let list = document.getElementById('list');    // HTML 요소 중에 id가 list인 요소를 선택해서 변수 list 안에 대입
let count = 1;  // count 변수에 숫자 1을 할당


// list 추가하기
button.addEventListener('click', function(){   // click 이벤트 리스너를 등록
  if (!input.value) alert('내용을 입력해 주세요');  // 만약 input 내용이 비었을 시 나오는 경고창
  else {
    let temp = document.createElement('li');  // html에 li 태그를 만듦
    temp.setAttribute("class", "list_group");  // 요소의 속성 값을 정함 (class명)
    temp.setAttribute("id", "li_"+count);  // 요소의 속성 값을 정함 (li+count)
    temp.innerHTML = input.value;   // input에 적힌 내용을 HTML li 태그 안에 추가
    temp.innerHTML += "<button class='btn_change' type='button' onclick='modify("+count+")'>수정</button>";  // 수정 버튼 추가
    temp.innerHTML += "<button class='btn_delete' type='button' onclick='remove("+count+")'>삭제</button>";  // 삭제 버튼 추가
    list.appendChild(temp); // list 안에 자식으로 붙임
    input.value= '';  // 입력창 초기화
    count++;  // count 수를 1 증가
  }
})

// list 삭제하기
function remove(count) { // remove 함수 선언 (count 인자 값을 받아옴)
  let li = document.getElementById('li_'+count); // HTML 요소 중에 id가 li+count인 요소를 선택해서 li 안에 대입
  list.removeChild(li);  // li(list) 삭제
}

// list 내용 수정하기
function modify(count) {  // modify 함수 선언 (count 인자 값을 받아옴)
  if (!input.value) alert('내용을 입력해 주세요');  // 만약 input 내용이 비었을 시 나오는 경고창  
  else {
  let li = document.getElementById('li_'+count);  // html에 li 태그를 만듦
  li.innerHTML = input.value;  // input에 적힌 내용을 HTML li 태그 안에 변경
  li.innerHTML += "<button class='btn_change' type='button' onclick='modify("+count+")'>수정</button>"; // 수정 버튼 추가
  li.innerHTML += "<button class='btn_delete' type='button' onclick='remove("+count+")'>삭제</button>"; // 삭제 버튼 추가
  input.value= ''; // 입력창 초기화
  }
}
