import "./Viewer.css";
import getEmotionImage from "../util/get-emotion-image";
import { emotionList } from "../util/constants";

const Viewer = ({ diary }) => {
  const emotionItem = emotionList.find(
    (item) => String(item.emotionId) === String(diary.emotionId)
  );
  return (
    <div className="Viewer">
      <section className="img_section">
        <h4>오늘의 감정</h4>
        <div
          className={`emotion_img_wrapper emotion_img_wrapper_${diary.emotionId}`}
        >
          <img src={getEmotionImage(diary.emotionId)} />
          <div>{emotionItem.emotionName}</div>
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <div className="content_wrapper">
          <p>{diary.content}</p>
        </div>
      </section>
    </div>
  );
};

export default Viewer;
