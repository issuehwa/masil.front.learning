// onload 이벤트 예약
window.onload = () => {
  reander();
};

// const button = document.getElementById("addButton"); // HTML 요소 중에 id가 addButton인 요소를 선택해서 변수 button 안에 대입
// const input = document.getElementById("inputText"); // HTML 요소 중에 id가 inputText인 요소를 선택해서 변수 input 안에 대입
const list = document.getElementById("board_list"); // HTML 요소 중에 id가 toDoList인 요소를 선택해서 변수 list 안에 대입

// 데이터
let count = 1;


function reander() {
  // 그려진 목록 초기화
  // list 자녀 모두 지우기
  // while (list.hasChildNodes()) {
  //   list.removeChild(list.firstChild);
  // }

  count = 1;
  let arrId = [];
  let arrTitle = [];
  let arrReg = [];
  let arrContent = [];
  let arrRegDate = [];
  let arrUpdDate = [];

  for (let item of inputList) {
    arrId.push(item.id);
    arrTitle.push(item.title);
    arrReg.push(item.reg);    
    arrContent.push(item.content);
    arrRegDate.push(item.reg_date);
    arrUpdDate.push(item.upd_date);
  }

  for (let i = 0; i < inputList.length; ++i) {
    
    let item = inputList[i];

    let temp = `<ul id="ul_${count}">`
    temp    += `  <li>${item.id}</li>`
    temp   += `  <li><a href="./detail.html">${item.title}</a></li>`
    temp   += `  <li>${item.reg}</li>`
    temp   += `  <li>${item.reg_date}</li>`
    temp    += `</ul>`
    temp    += `<hr />`

    list.innerHTML += temp;

    count++;
  }
}


