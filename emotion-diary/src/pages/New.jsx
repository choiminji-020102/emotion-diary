import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../context/DiaryContext";

const New = () => {
  const nav = useNavigate();
  const { onCreate } = useContext(DiaryDispatchContext);

  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
    nav("/", { replace: true }); // 뒤로가기 버튼 누르면 /new페이지로 이동하지 않게 하기 위해 replace 사용
  };
  return (
    <div>
      <Header
        title="새 일기 쓰기"
        leftChild={
          <Button text="< 뒤로가기" type="DEFAULT" onClick={() => nav(-1)} />
        }
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
