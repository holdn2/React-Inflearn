// 그냥 let 같은 변수가 아닌 state로 저장하는 이유는?
// state여야지 값이 바뀔 때마다 리렌더링 할 수 있다.
// props로 준 값이 바껴도 리렌더링된다.

// 리렌더링 되는 조건
// 1. 자신이 가진 state가 변경되었을 때
// 2. 받은 props의 값이 변경되었을 때
// 3. 부모 컴포넌트가 리렌더링되었을 때

import "./App.css";
import Register from "./components/Register";

function App() {
  return (
    <>
      <Register />
    </>
  );
}

export default App;
