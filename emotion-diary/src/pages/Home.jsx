// import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { DiaryStateContext } from "../context/DiaryContext";
import Button from "../components/Button";
import Header from "../components/Header";
import DiaryList from "../components/DiaryList";

const getMonthlyData = (pivotDate, data) => {
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();
  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();
  return data.filter(
    (item) => item.createdDate >= beginTime && item.createdDate <= endTime
  );
};

const Home = () => {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date()); // 월을 0부터 시작하기 때문에 +1
  const monthlyData = getMonthlyData(pivotDate, data);
  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };
  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button text="<" type="DEFAULT" onClick={onDecreaseMonth} />}
        rightChild={
          <Button text=">" type="DEFAULT" onClick={onIncreaseMonth} />
        }
      />
      <DiaryList data={monthlyData} />
    </div>
  );
};

export default Home;
