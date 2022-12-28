let params = ''.getParam('?');

console.log('params', params, params.id)

// 인풋리스트에서 id 값이 일치하는 객체를 뽑아온다.
// 반복문을 사용해서 가져온다.

// 그다음 디테일 화면에 맞춰 dom에 그려준다.

const bTitle = document.getElementById("boardDetail_1");
const bDate = document.getElementById("boardDetail_2");
const bContent = document.getElementById("boardDetail_3");

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

for(let i = 0; i < arrId.length; i++){
  if (params.id == arrId[i]) {
    let temp = `<p>${arrTitle[i]}</p>`
    temp += `<p>${arrReg[i]}</p>`
    let temp2 = `<p>${arrRegDate[i]}</p>`
    temp2 += `<p>${arrUpdDate[i]}</p>`
    bContent.innerHTML += `<p>${arrContent[i]}</p>`

    bTitle.innerHTML += temp;
    bDate.innerHTML += temp2;
  }
}
