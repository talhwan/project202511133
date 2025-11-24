import React, { useRef, useState } from "react";

function RenderCountExample() {
  const [value, setValue] = useState("");
  const renderCount = useRef(1);

  // 컴포넌트가 렌더링될 때마다 ref 값만 증가시키기
  renderCount.current += 1;

  return (
    <div>
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="입력해 보세요"
      />
      <p>렌더링 횟수: {renderCount.current}</p>
    </div>
  );
}

export default RenderCountExample;
