// onload 이벤트 예약
window.onload = () => {
  reander();
}

const button = document.getElementById("addButton"); // HTML 요소 중에 id가 addButton인 요소를 선택해서 변수 button 안에 대입
const input = document.getElementById("inputText"); // HTML 요소 중에 id가 inputText인 요소를 선택해서 변수 input 안에 대입
const list = document.getElementById("toDoList"); // HTML 요소 중에 id가 toDoList인 요소를 선택해서 변수 list 안에 대입

// 데이터
let count = 1;
let inputList = [
  {
    "title" : "참교육",
    "reg": "채용택",
    "content": "참교육하는 애니메이션 입니다.",
    "reg_date": "2022-12-02",
    "upd_date": ""
  },
  {
    "title" : "뷰티풀 군바리",
    "reg": "설이",
    "content": "군대가는 만화입니다.",
    "reg_date": "2022-12-05",
    "upd_date": ""
  },
  {
    "title" : "퀘스트지상주의",
    "reg": "박태준 만화회사",
    "content": "퀘스트하는 만화입니다.",
    "reg_date": "2022-12-24",
    "upd_date": "2022-12-25"
  },
  {
    "title" : "장씨세가 호위무사",
    "reg": "김인호",
    "content": "호위무사 애니메이션이다.",
    "reg_date": "2022-11-23",
    "upd_date": ""
  },
  {
    "title" : "윈드브레이커",
    "reg": "조용석",
    "content": "바람막이인가요?",
    "reg_date": "2022-01-26",
    "upd_date": ""
  },
  {
    "title" : "팔이피플",
    "reg": "매미",
    "content": "파티 좋아하세요?",
    "reg_date": "2021-04-26",
    "upd_date": "2022-12-26"
  },
  {
    "title" : "앵무살수",
    "reg": "김성진",
    "content": "더 이상의 자세한 설명은 안한다.",
    "reg_date": "2022-06-05",
    "upd_date": ""
  },
  {
    "title" : "소녀의 세계",
    "reg": "모랑지",
    "content": "소녀랑 소년은 받침이 다를뿐",
    "reg_date": "2022-05-05",
    "upd_date": ""
  },
  {
    "title" : "퍼니게임",
    "reg": "배진수",
    "content": "돈 벌어보는 애니메이션",
    "reg_date": "2022-04-12",
    "upd_date": ""
  },
  {
    "title" : "호랑신랑뎐",
    "reg": "고추참지",
    "content": "호랑이가 사람인가요?",
    "reg_date": "2022-09-11",
    "upd_date": ""
  },
  {
    "title" : "강남의 기사",
    "reg": "김재환",
    "content": "강남 소나타는 요즘 포르쉐 파라메라",
    "reg_date": "2022-08-05",
    "upd_date": "2022-09-09"
  },
  {
    "title" : "잔불의 기사",
    "reg": "환댕",
    "content": "잔불도 다시보자",
    "reg_date": "2020-09-11",
    "upd_date": ""
  },
  {
    "title" : "히어로메이커",
    "reg": "빤쓰",
    "content": "히어로라면 마블인가 디씨인가?",
    "reg_date": "2022-07-22",
    "upd_date": ""
  }
];


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
function removeList(count) { // removeList 함수 선언 
  inputList.splice(count-1, 1);

  // 그리기
  reander();
}


// list 내용 수정하기
function modifyList(count) {  // modifyList 함수 선언 
  if (!input.value) alert('내용을 입력해 주세요');  // 만약 input 내용이 비었을 시 나오는 경고창  
  else {
    // 목록에서 바꿔치기
    inputList.splice(count-1, 1, input.value);
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
  count = 1;
  for (let i = 0; i < inputList.length; ++i) {
    let temp = document.createElement("li");
    temp.setAttribute('id', 'li_'+count);
    temp.innerHTML = inputList[i]; // 인덱스값 넣어서 필요한 아이템값 가져오기
    temp.innerHTML += `<button id='btn_change' type='button' onclick='modifyList(${count})'>수정</button>`;
    temp.innerHTML += `<button id='btn_delete' type='button' onclick='removeList(${count})'>삭제</button>`;
    list.appendChild(temp);
    count++;
  }
}