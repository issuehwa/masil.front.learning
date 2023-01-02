//주소 파라미터값을 가져옵니다.
//사용법 => let params = ''.getParam('?');

window.onload = () => {
  reanderNavList();
};

const nav = document.getElementById("nav_side");

function reanderNavList() {
  let i = 0;

  while (dataInfo.categoryList.length >= i) {
    let list = dataInfo.categoryList[i];
    let temp = `<a href="./index.html?id=${list.sort}"><li>${list.step}</li></a>`;
    nav.innerHTML += temp;
    i++;
  }
}

// console.log('params', params, params.id)
