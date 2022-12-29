// onload 이벤트 예약
window.onload = () => {
  reander();
};

const list = document.getElementById("board_list"); // HTML 요소 중에 id가 toDoList인 요소를 선택해서 변수 list 안에 대입

// 데이터
let count = 1;

function forReander(number) {
  let item = inputList[number];
  let order = number + 1;

  let temp = `<ul id="ul_${count}">`
  temp    += `  <li>${order}</li>`
  temp   += `  <li><a href="./detail.html?id=${item.id}">${item.title}</a></li>`
  temp   += `  <li>${item.reg}</li>`
  temp   += `  <li>${item.reg_date}</li>`
  temp    += `</ul>`
  temp    += `<hr />`

  list.innerHTML += temp;

  count++;
}

function reander() {
  
  // for 문

  // for (let i = inputList.length-1; i >= 0; i--) {
    
  //   let item = inputList[i];

  //   let temp = `<ul id="ul_${count}">`
  //   temp    += `  <li>${i+1}</li>`
  //   temp   += `  <li><a href="./detail.html?id=${item.id}">${item.title}</a></li>`
  //   temp   += `  <li>${item.reg}</li>`
  //   temp   += `  <li>${item.reg_date}</li>`
  //   temp    += `</ul>`
  //   temp    += `<hr />`

  //   list.innerHTML += temp;

  //   count++;
  // }

  // for in 문

  // for (let i in inputList) {

  //   let item = inputList[i];

  //   let temp = `<ul id="ul_${count}">`
  //   temp    += `  <li>${i++}</li>`
  //   temp   += `  <li><a href="./detail.html?id=${item.id}">${item.title}</a></li>`
  //   temp   += `  <li>${item.reg}</li>`
  //   temp   += `  <li>${item.reg_date}</li>`
  //   temp    += `</ul>`
  //   temp    += `<hr />`

  //   list.innerHTML += temp;

  //   count++;
  // }

  // for of 문

  // for (const value of inputList) {

  //   let temp = `<ul id="ul_${count}">`
  //   temp    += `  <li>${count}</li>`
  //   temp   += `  <li><a href="./detail.html?id=${value.id}">${value.title}</a></li>`
  //   temp   += `  <li>${value.reg}</li>`
  //   temp   += `  <li>${value.reg_date}</li>`
  //   temp    += `</ul>`
  //   temp    += `<hr />`

  //   list.innerHTML += temp;

  //   count++;
  
  // }


  // forEach 문

  // inputList.forEach((value) => {

  //   console.log(value)

  //   let temp = `<ul id="ul_${count}">`
  //   temp    += `  <li>${count}</li>`
  //   temp   += `  <li><a href="./detail.html?id=${value.id}">${value.title}</a></li>`
  //   temp   += `  <li>${value.reg}</li>`
  //   temp   += `  <li>${value.reg_date}</li>`
  //   temp    += `</ul>`
  //   temp    += `<hr />`

  //   list.innerHTML += temp;

  //   count++;
  // });

  // while 문

  let i=0;
  
  while ( inputList.length >= i ) {
    
    forReander(i);

    i++;
  }
 
  // do while 문

  // let i=0;

  // do {
    
  //   let item = inputList[i];
      
  //   let temp = `<ul id="ul_${i}">`
  //   temp    += `  <li>${i}</li>`
  //   temp   += `  <li><a href="./detail.html?id=${item.id}">${item.title}</a></li>`
  //   temp   += `  <li>${item.reg}</li>`
  //   temp   += `  <li>${item.reg_date}</li>`
  //   temp    += `</ul>`
  //   temp    += `<hr />`

  //   list.innerHTML += temp;

  //   i++;

  // } while ( inputList.length >= i )
}

