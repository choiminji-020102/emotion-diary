import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../context/DiaryContext";

const useDiary = (id) => {
  const nav = useNavigate();
  const data = useContext(DiaryStateContext);
  const [currentDiaryItem, setCurrentDiaryItem] = useState(null);

  useEffect(() => {
    const curDiaryItem = data.find((item) => String(item.id) === String(id));
    if (!curDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }
    setCurrentDiaryItem(curDiaryItem);
  }, [id]);
  return currentDiaryItem;
};

export default useDiary;
