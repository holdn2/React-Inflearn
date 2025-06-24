import { useEffect } from "react";

const Even = () => {
  // 3. 언마운트
  useEffect(() => {
    // 클린업, 정리함수 : useEffect가 끝날 때 실행된다. 언마운트가 될 때
    return () => {
      console.log("unmount");
    };
  }, []);
  return <div>짝수입니다.</div>;
};
export default Even;
