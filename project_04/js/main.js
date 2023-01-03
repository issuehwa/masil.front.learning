//주소 파라미터값을 가져옵니다.
//사용법 => let params = ''.getParam('?');

// window.onload = () => {
//   reanderNavList();
// };

const nav = document.getElementById("nav_side");
const main = document.getElementById("main");

function reanderNavList() {
  for (let i = 0; dataInfo.categoryList.length > i; i++) {
    let list = dataInfo.categoryList[i];
    let temp = `<a href="./index.html?id=${list.sort}"><li>${list.step}</li></a>`;
    nav.innerHTML += temp;
  }
}

reanderNavList();

const urlParams = new URL(location.href).searchParams;
let sortId = urlParams.get("id");
console.log(sortId);
console.log(dataInfo.list[9].sort);
console.log(dataInfo.list[7].detailList[0].step);

renderMainList();

function renderMainList() {
  let i = 0;
  while (i < dataInfo.categoryList.length) {
    if (sortId == dataInfo.list[i].sort) {
      let ctList = dataInfo.categoryList[i];
      let list = dataInfo.list[i];

      let temp = `<b>${ctList.step}</b>`;
      temp += `<hr />`;
      for (count = 0; count < dataInfo.categoryList.length; count++) {
        temp += `<ol><li>${list.detailList[count].step}</li><div></div><li>${list.detailList[count].title}</li></ol>`;
        temp += `<hr /> `;
      }
      main.innerHTML += temp;
    }
    i++;
  }
}
