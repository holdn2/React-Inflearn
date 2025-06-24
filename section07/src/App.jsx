import { useEffect, useRef, useState } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import Even from "./components/Even";

function App() {
  const [currentCount, setCurrentCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log("마운트");
  }, []);
  // 2. 업데이트 : 변화, 리렌더링 / deps를 생략하면 이 컴포넌트 리렌더링(업데이트)될 때마다 실행된다.
  useEffect(() => {
    // 업데이트 시에만 호출되도록 첫 렌더링 시에는 isMount를 이용하여 빠져나오도록 한다. 플래그처럼
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("업데이트");
  });
  // 3. 언마운트 : 죽음

  // 의존성 배열
  // dependency array : deps

  const onClickButton = (value) => {
    // 상태 변화 함수는 비동기로 동작한다.
    setCurrentCount((prev) => prev + value);
    // console.log(currentCount);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer currentCount={currentCount} />
        {currentCount % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
