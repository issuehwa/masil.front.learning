// onload 이벤트 예약
window.onload = () => {
  reander();
};

const button = document.getElementById("addButton"); // HTML 요소 중에 id가 addButton인 요소를 선택해서 변수 button 안에 대입
const input = document.getElementById("inputText"); // HTML 요소 중에 id가 inputText인 요소를 선택해서 변수 input 안에 대입
const list = document.getElementById("toDoList"); // HTML 요소 중에 id가 toDoList인 요소를 선택해서 변수 list 안에 대입

// 데이터
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
function removeList(count) {
  // removeList 함수 선언
  inputList.splice(count - 1, 1);

  // 그리기
  reander();
}

// list 내용 수정하기
function modifyList(count) {
  // modifyList 함수 선언
  if (!input.value)
    alert("내용을 입력해 주세요"); // 만약 input 내용이 비었을 시 나오는 경고창
  else {
    // 목록에서 바꿔치기
    inputList.splice(count - 1, 1, input.value);
    // input.value
    input.value = "";

    // 그리기
    reander();
  }
}

function reander() {
  // 그려진 목록 초기화
  // list 자녀 모두 지우기
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }

  // 목록 새로 그리기
  // count = 1;
  // for (let i = 0; i < inputList.length; ++i) {
  //   let temp = document.createElement("li");
  //   temp.setAttribute('id', 'li_'+count);
  //   temp.innerHTML = inputList[i]; // 인덱스값 넣어서 필요한 아이템값 가져오기
  //   temp.innerHTML += `<button id='btn_change' type='button' onclick='modifyList(${count})'>수정</button>`;
  //   temp.innerHTML += `<button id='btn_delete' type='button' onclick='removeList(${count})'>삭제</button>`;
  //   list.appendChild(temp);
  //   count++;
  // }
  count = 1;
  let arrTitle = [];
  let arrReg = [];
  let arrContent = [];
  let arrRegDate = [];
  let arrUpdDate = [];

  for (let item of inputList) {
    arrTitle.push(item.title);
    arrReg.push(item.reg);    
    arrContent.push(item.content);
    arrRegDate.push(item.reg_date);
    arrUpdDate.push(item.upd_date);
  }

  // for (let key in inputList) {
  //   let item = inputList[key]
  //   arrTitle.push(item.title);
  // }

  // for (let reg of inputList) {
  //   arrReg.push(reg.reg);
  // }
  // for (let content of inputList) {
  //   arrContent.push(content.content);
  // }
  // for (let regdate of inputList) {
  //   arrRegDate.push(regdate.reg_date);
  // }
  // for (let upddate of inputList) {
  //   arrUpdDate.push(upddate.upd_date);
  // }

  for (let i = 0; i < inputList.length; ++i) {
    
    let item = inputList[i];
    
    // // li태그
    // let temp = document.createElement("li");
    // temp.setAttribute("id", "li_" + count);
    // list.appendChild(temp);
    // // h4태그
    // let tempHeader = document.createElement("h4");
    // temp.appendChild(tempHeader);
    // // a태그 (h4태그 안에 들어가는 제목)
    // let headerLink = document.createElement("a");
    // tempHeader.appendChild(headerLink);
    // // headerLink.innerText = arrTitle[i];
    // headerLink.innerText = item.title;
    // // p태그 (작성자)
    // let tempPtag = document.createElement("p");
    // temp.appendChild(tempPtag);
    // tempPtag.innerText = item.reg;
    // // p태그2 (내용)
    // let tempPtag2 = document.createElement("p");
    // temp.appendChild(tempPtag2);
    // tempPtag2.innerText = item.content;
    // // span태그 (작성일)
    // let tempSpan = document.createElement("span");
    // temp.appendChild(tempSpan);
    // tempSpan.innerText = item.reg_date;
    // // span태그2 (수정일)
    // let tempSpan2 = document.createElement("span");
    // temp.appendChild(tempSpan2);
    // tempSpan2.innerText = item.upd_date;


    let temp2 = `<li id="li_${count}">`
    temp2    += `  <h4><a>${item.title}</a></h4>`
    temp2    += `  <p>${item.reg}</p>`
    temp2    += `</li>`

    list.innerHTML += temp2;

    count++;
  }
}
