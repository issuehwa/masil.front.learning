// onload 이벤트 예약
window.onload = () => {
  reander();
};

const list = document.getElementById("board_list"); // HTML 요소 중에 id가 toDoList인 요소를 선택해서 변수 list 안에 대입

// 데이터
let count = 1;

function reander() {
  
  for (let i = inputList.length-1; i >= 0; i--) {
    
    let item = inputList[i];

    let temp = `<ul id="ul_${count}">`
    temp    += `  <li>${i+1}</li>`
    temp   += `  <li><a href="./detail.html?id=${item.id}">${item.title}</a></li>`
    temp   += `  <li>${item.reg}</li>`
    temp   += `  <li>${item.reg_date}</li>`
    temp    += `</ul>`
    temp    += `<hr />`

    list.innerHTML += temp;

    count++;
  }

  // for in 문

  // for of 문

  // forEach 문

  // while 문
 
  // do while 문
}

