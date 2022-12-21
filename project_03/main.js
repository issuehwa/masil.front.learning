'use strict';

let inputBox = document.getElementById("input"); // 아이디가 input인 요소를 선택함 (할일 입력하는창)
let addToDo = document.getElementById("button"); // 아이디가 button인 요소를 선택함 (추가 버튼)
let toDoList = document.getElementById("list"); // 아이디가 list인 요소를 선택함 (할일 추가하면 뜨는 리스트)


addToDo.addEventListener('click',function() {  // click 이벤트 리스너를 등록함
  var list = document.createElement('li'); // html li 태그 생성
  if(!inputBox.value) alert('내용을 입력해 주세요') // 만약 input 내용이 비었을 시 나오는 경고창
  else { 
    list.innerText =inputBox.value;  // li 태그 내에 들어갈 입력된 텍스트
    toDoList.appendChild(list); // list 안에 자식으로 붙임
    inputBox.value= ''; // 입력창 초기화
  }
})  

addToDo.addEventListener('click',function() {  
  var list = document.createElement("input"); // html input 태그 생성
  list.setAttribute('type','checkbox');  // 선택한 요소의 속성 값을 정함
  toDoList.prepend(list);  // checkbox를 list에 맨 앞에 붙임
})  

addToDo.addEventListener('click',function() {  
  var list = document.createElement("input"); // html input 태그 생성
  list.setAttribute('type','button');  // 선택한 요소의 속성 값을 정함
  list.setAttribute('value','삭제'); // 버튼 안에 들어가는 밸류값
  toDoList.after(list);  // list 맨 뒤에 붙임
})  


// 이벤트 핸들러 등록
// ul에 자식 요소로 사용자가 입력한 텍스트가 들어간 li태그 추가
// 만약 입력한 내용이 없을 시 경고창 출력
// li태그와 함께 삭제 버튼, 내용 수정 버튼이 있어야 함
// 삭제 버튼은 li태그 옆에 체크박스를 선택하면 삭제되게끔 함
// 일괄 삭제 기능 추가(가능하면)

