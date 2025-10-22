import "./Editor.css";
import Button from "./Button";
import EmotionItem from "./EmotionItem";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { emotionList } from "../util/constants";

const getStringedDate = (targetDate) => {
  // new Date() 형식을 YYYY-MM-DD 형식으로 변환
  return targetDate.toISOString().split("T")[0];
};

const Editor = ({ onSubmit, initData }) => {
  const nav = useNavigate();
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 0,
    content: "",
  });

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, [initData]);

  const onChangeInput = (e) => {
    let { name, value } = e.target;
    if (name === "createdDate") {
      value = new Date(value);
    }
    setInput({ ...input, [name]: value });
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          name="createdDate"
          value={getStringedDate(input.createdDate)}
          onChange={onChangeInput}
          type="date"
        />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
              onClick={() =>
                onChangeInput({
                  target: { name: "emotionId", value: item.emotionId },
                })
              }
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder="오늘은 어땠나요?"
        />
      </section>
      <section className="button_section">
        <Button
          text="취소하기"
          type="DEFAULT"
          onClick={() => {
            nav(-1);
          }}
        />
        <Button
          text="작성완료"
          type="POSITIVE"
          onClick={() => onSubmit(input)}
        />
      </section>
    </div>
  );
};

export default Editor;
