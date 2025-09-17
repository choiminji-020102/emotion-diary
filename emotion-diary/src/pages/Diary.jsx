import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";

const getStringedDate = (targetDate) => {
  // new Date().getTime() 형식을 YYYY-MM-DD 형식으로 변환
  return new Date(targetDate).toISOString().split("T")[0];
};
const Diary = () => {
  const nav = useNavigate();
  const params = useParams();
  const currentDiaryItem = useDiary(params.id);

  return (
    <div>
      <Header
        title={`${getStringedDate(currentDiaryItem.createdDate)} 일기`}
        leftChild={
          <Button text="< 뒤로가기" type="DEFAULT" onClick={() => nav(-1)} />
        }
        rightChild={
          <Button
            text="수정하기"
            type="DEFAULT"
            onClick={() => nav(`/edit/${params.id}`)}
          />
        }
      />
      <Viewer diary={currentDiaryItem} />
    </div>
  );
};

export default Diary;
