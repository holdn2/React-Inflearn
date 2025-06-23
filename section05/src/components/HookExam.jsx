// 3가지 hook 관련 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건문, 반복문 안에서 호출될 수는 없다
// 3. 커스텀 훅을 만들 수 있다.
// 훅은 일반적인 함수가 아닌 컴포넌트 내부에서만 호출 가능하므로
// 커스텀 훅을 만들 때 활용하려면 함수명 앞에 키워드 use를 붙여준다.

import useInput from "../hooks/useInput";

// const [invalidHook, setInvalidHook]=useState();

const HookExam = () => {
  //   if (true) {
  //     const [state, setState] = useState();
  //   }
  //   for (;;) {
  //     const [state, setState] = useState();
  //   }
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  return (
    <div>
      <input value={input} onChange={onChange} />
      <input value={input2} onChange={onChange2} />
    </div>
  );
};

export default HookExam;
