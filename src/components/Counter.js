import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("렌더링이 끝난 뒤에 실행됩니다. 현재 count:", count);
  });

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Counter Button : +</button>
    </div>
  );
}
