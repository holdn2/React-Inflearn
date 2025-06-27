import { memo } from "react";
import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  const onClickDeleteButton = () => {
    onDelete(id);
  };

  console.log(content, "리렌더링");
  return (
    <div className="TodoItem">
      <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

// 객체 타입의 값을 props로 전달받으면 memo만으로는 정상적으로 최적화할 수 없다.
// 1. props로 받는 함수들 자체를 메모이제이션해서 리렌더링이 되더라도 다시 생성되지 않도록 한다.
// 2. memo 안에 두번째 인수로 콜백 함수를 추가로 전달하여 최적화 기능을 커스터마이징 한다.

// 고차 함수 컴포넌트(HOC)
// 1.
// export default memo(TodoItem, (prevProps, nextProps) => {
//   // 반환값에 따라, props가 바뀌었는지 판단
//   // true => props가 바뀌지 않음 => 리렌더링 x
//   // false => props가 바뀜 => 리렌더링 o
//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;

//   return true;
// });

// 2.
export default memo(TodoItem);
