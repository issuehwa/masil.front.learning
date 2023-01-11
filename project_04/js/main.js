//주소 파라미터값을 가져옵니다.
//사용법 => let params = ''.getParam('?');

// 첫화면 설정 (파라미터값을 넣어줘서 1단계 화면이 보이도록 함)
if (location.href == "http://127.0.0.1:5500/project_04/index.html") {
  history.pushState(null, null, "?id=1");
}

// JSON 데이터 화면 출력 구현
const nav = document.getElementById("nav_side");
const title = document.getElementById("title");
const olGroup = document.getElementById("ol_group");
const olPgGroup = document.getElementById("page");


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


function renderMainList() {
  let i = 0;
  while (i < dataInfo.categoryList.length) {
    if (sortId == dataInfo.list[i].sort) {
      let norepeat = 0; 
      let ctList = dataInfo.categoryList[i];
      let list = dataInfo.list[i];

      let temp = `<b>${ctList.step}</b>`;
      temp += `<hr />`;
      title.innerHTML += temp;
      if (norepeat < 1) {
        for (count = 0; count < list.detailList.length; count++) {
          olGroup.innerHTML += `<ol><li>${list.detailList[count].step}</li><div></div><li>${list.detailList[count].title}</li><hr /></ol>`;
        }
      }
      norepeat++;
    }
    i++;
  }
}

renderMainList();

// 페이징 구현
const rowsPerPage = 8; // 한 페이지 당 보여주고 싶은 데이터의 갯수
const rows = document.querySelectorAll('#main ol'); // rows에 데이터 목록을 저장
const rowsCount = rows.length; //rows에 저장된 배열 갯수를 저장


const pageCount = Math.ceil(rowsCount/rowsPerPage); // 배열 갯수를 데이터의 갯수로 나눈 수를 올림함
const numbers = document.querySelector('#page');  // 페이징 영역을 변수로 잡음

for (let i = 1; i <=pageCount ; i++) {  // 페이지 번호 생성( 생성하는 반복문)
  numbers.innerHTML += `<li><a href="">${i}</a></li>`;
}
const numberBtn = numbers.querySelectorAll('a'); // numbers 영역 안에 있는 a태그 전부를 변수로 저장

numberBtn.forEach((item,idx)=>{  // numberBtn의 요소와 index 번호를 가져옴
  item.addEventListener('click', (e)=>{  //  클릭하면 발생하는 이벤트리스너 등록
    e.preventDefault();  // a태그의 기본기능 제거

    displayRow(idx);
  });
});


// 화면 출력 함수 (페이지 번호에 맞는것만)
function displayRow(idx){
  let start = idx*rowsPerPage;  // 시작번호 = 페이지번호*데이터갯수
  let end = start+rowsPerPage;  // 끝번호 = 시작번호+데이터갯수
  
  while(olGroup.hasChildNodes()) {
    olGroup.removeChild(olGroup.firstChild);
  }
  
  console.log(dataInfo.list[start].detailList[start].step)
  while(start < end) {
    olGroup.innerHTML += `<ol><li>${dataInfo.list[start].detailList[start].step}</li><div></div><li>${dataInfo.list[start].detailList[start].title}</li><hr /></ol>`;
    start++;
  }


  for(nb of numberBtn){  // numberBtn의 값들을 nb로 받아옴
    nb.classList.remove('active'); // a태그의 active를 제거
  }
  numberBtn[idx].classList.add('active'); // 클릭 이벤트가 발생한 요소에만 active 추가
}

displayRow(0);

function del() {
  rows.removeChild(rows.childNodes[0]);
}
// 페이지 좌우 화살표 구현
const prevPageBtn = document.getElementById("prev");
const nextPageBtn = document.getElementById("next");
let pageActiveIdx = 0;  // 현재 보고 있는 페이지그룹 번호
let maxPageNum = 2;  // 페이지그룹 최대

// 페이지 번호 감추기
// for(nb of numberBtn) {
//   nb.style.display = 'none';
// }

displayPage(0);


//페이지 그룹 표시 함수
function displayPage(num) {
  // 페이지 번호 감추기
  // for(nb of numberBtn) {
  //   nb.style.display = 'none';
  // }
  while(olPgGroup.hasChildNodes()) {
    olPgGroup.removeChild(olPgGroup.firstChild);
  }
  let totalPageCount = Math.ceil(pageCount/maxPageNum); // 페이지그룹을 몇개 만들어야하는건지 변수에 저장
  let pageArr = [...numberBtn]; // numberBtn을 배열로 바꿈
  let start = num*maxPageNum;
  let end = start+maxPageNum;
  let pageListArr = pageArr.slice(start, end);
  
  
  while(start < end) {
    numbers.innerHTML += `<li><a href="">${start+1}</a></li>`;
    start++;
  }
  
  for(nb of numberBtn){  // numberBtn의 값들을 nb로 받아옴
    nb.classList.remove('active'); // a태그의 active를 제거
  }
  numberBtn[idx].classList.add('active'); // 클릭 이벤트가 발생한 요소에만 active 추가

  // for(let item of pageListArr) {
  //   item.style.display = 'block';
  // }


  // if(pageActiveIdx == 0) {
  //   prevPageBtn.style.display ='none';
  // } else {
  //   prevPageBtn.style.display = 'block';
  // }
  // if(pageActiveIdx == totalPageCount-1) {
  //   nextPageBtn.style.display = 'none';
  // }
}


// next 버튼 구현
nextPageBtn.addEventListener('click',()=>{
  let nextPageNum = pageActiveIdx*maxPageNum+maxPageNum;
  displayRow(nextPageNum);
  ++pageActiveIdx;  // 페이지그룹 번호를 한 칸 올림
  displayPage(pageActiveIdx);
});
// prev 버튼 구현
prevPageBtn.addEventListener('click',()=>{
  let nextPageNum = pageActiveIdx*maxPageNum-maxPageNum;
  displayRow(nextPageNum);
  --pageActiveIdx;  // 페이지그룹 번호를 한 칸 내림
  displayPage(pageActiveIdx);
});
