// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ 
    list: [
      {
        id: 54,
        title: "참교육",
        reg: "채용택",
        content: "참교육하는 애니메이션 입니다.",
        reg_date: "2022-12-02",
        upd_date: "",
      },
      {
        id: 33,
        title: "뷰티풀 군바리",
        reg: "설이",
        content: "군대가는 만화입니다.",
        reg_date: "2022-12-05",
        upd_date: "",
      },
      {
        id: 12,
        title: "퀘스트지상주의",
        reg: "박태준 만화회사",
        content: "퀘스트하는 만화입니다.",
        reg_date: "2022-12-24",
        upd_date: "2022-12-25",
      },
      {
        id: 13332,
        title: "장씨세가 호위무사",
        reg: "김인호",
        content: "호위무사 애니메이션이다.",
        reg_date: "2022-11-23",
        upd_date: "",
      }
    ]})
}
