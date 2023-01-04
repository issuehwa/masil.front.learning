//주소 파라미터값을 가져옵니다.
//사용법 => let params = ''.getParam('?');


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
      temp += `<hr id="first_hr" />`;
      for (count = 0; count < dataInfo.categoryList.length; count++) {
        temp += `<ol><li>${list.detailList[count].step}</li><div></div><li>${list.detailList[count].title}</li><div></div></ol>`;
      }
      main.innerHTML += temp;
    }
    i++;
  }
}

// 페이징 구현 
const rowsPerPage = 8; // 한 페이지 당 나타낼 데이터의 갯수
const rows = document.querySelectorAll('#main ol'); // rows에 데이터 목록을 저장
const rowsCount = rows.length; //rows에 저장된 배열 갯수를 저장

const pageCount = Math.ceil(rowsCount/rowsPerPage); // 배열 갯수를 데이터의 갯수로 나눈 수를 올림함
const numbers = document.querySelector('#page');  // 페이징 영역을 변수로 잡음

for (let i = 1; i <= 10; i++) {  // 페이지 번호 생성(10까지 생성하는 반복문) 
  numbers.innerHTML += `<li><a href="">${i}</a></li>`;
}
const numberBtn = numbers.querySelectorAll('a'); // numbers 영역 안에 있는 a태그 전부를 변수로 저장

numberBtn.forEach((item,idx)=>{  // numberBtn의 요소와 index 번호를 가져옴
  item.addEventListener('click', (e)=>{
    e.preventDefault();  // a태그의 기본기능 제거


    displayRow(idx);
  });
});

// 화면 출력 함수 (페이지 번호에 맞는것만)
function displayRow(idx){
  let start = idx*rowsPerPage;
  let end = start+rowsPerPage;
  let rowsArray= [...rows]; // nodelist였던 rows를 배열로 만듦
  
  for(ra of rowsArray) {
    ra.style.display = 'none';
  }

  let newRows = rowsArray.slice(start,end);
  for(nr of newRows) {
    nr.style.display = '';
  }
  for(nb of numberBtn){  // numberBtn의 값들을 nb로 받아옴
    nb.classList.remove('active'); // a태그의 active를 제거
  }
  numberBtn[idx].target.classList.add('active'); // 클릭 이벤트가 발생한 요소에만 active 추가
}

displayRow(0);

