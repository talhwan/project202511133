import { useState, useEffect } from "react";

export default function SearchBox() {
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    if (!keyword) return;
    console.log("검색어가 변경됨:", keyword);
    // 여기서 keyword로 API 요청 보내기 등
  }, [keyword]); // keyword가 바뀔 때에만 실행

  return (
    <input
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
      placeholder="검색어를 입력하세요"
    />
  );
}
