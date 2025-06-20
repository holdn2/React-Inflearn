// JSX 주의사항
// 1. 중괄호 내부에서는 자바스크립트 표현식만 넣을 수 있다.(조건문, 반복문 등은 불가능)
// 2. 숫자, 문자열, 배열 값만 렌더링 된다.(true, undefined, null, 객체 등은 렌더링 안 됨)
// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나여야 한다.
import "./Main.css";

const Main = () => {
  const user = {
    name: "유찬영",
    isLogin: true,
  };
  return (
    <>
      {user.isLogin ? (
        <div className="logout">로그아웃</div>
      ) : (
        <div>로그인</div>
      )}
    </>
  );
};

export default Main;
