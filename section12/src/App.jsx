import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import NotFound from "./pages/NotFound";

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
  const navigate = useNavigate();
  const onClickButton = () => {
    navigate("/new");
  };
  return (
    <>
      <div>
        <Link to={"/"}>Home으로</Link>
        <Link to={"/new"}>New로</Link>
        <Link to={"/diary"}>Diary로</Link>
        {/* <a href="/">Home으로</a>
        <a href="/new">New로</a>
        <a href="/diary">Diary로</a> */}
      </div>
      <button onClick={onClickButton}>New 페이지로 이동</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        {/* 위에서 없는 경로로 요청하는 모든 경로는 아래가 뜨도록 된다. */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
