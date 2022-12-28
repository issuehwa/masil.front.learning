let params = ''.getParam('?');

console.log('params', params, params.id)

// 인풋리스트에서 id 값이 일치하는 객체를 뽑아온다.
// 반복문을 사용해서 가져온다.

// 그다음 디테일 화면에 맞춰 dom에 그려준다.

const bTitle = document.getElementById("boardTitle");
const bWriter = document.getElementById("boardWriter");
const bReg = document.getElementById("regDate");
const bUpd = document.getElementById("updDate");
const bContent = document.getElementById("boardDetail_3");


for(let i = 0; i < inputList.length; i++){
  if (params.id == inputList[i].id) {
    
    let item = inputList[i];


    let title = document.createElement('p');
    bTitle.after(title);
    title.innerText = item.title;

    let writer = document.createElement('p');
    bWriter.after(writer);
    writer.innerText = item.reg;

    let reg = document.createElement('p');
    bReg.after(reg);
    reg.innerText = item.reg_date;

    let upd = document.createElement('p');
    bUpd.after(upd);
    upd.innerText = item.upd_date;

    let content = document.createElement('p');
    bContent.append(content);
    content.innerText = item.content;

  }
}
