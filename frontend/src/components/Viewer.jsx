import "./Viewer.css";
import getEmotionImage from "../util/get-emotion-image";
import { emotionList } from "../util/constants";
import Button from "./Button";
import { useState } from "react";

const Viewer = ({ diary }) => {
  const [summaryResult, setSummaryResult] = useState(null);
  const [supportResult, setSupportResult] = useState(null);
  const [summaryLoading, setSummaryLoading] = useState(false);
  const [supportLoading, setSupportLoading] = useState(false);

  const handleSummary = async () => {
    if (summaryResult) return;

    try {
      setSummaryLoading(true);
      const response = await fetch("http://localhost:8000/api/ai/summary/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: diary.content,
        }),
      });
      const data = await response.json();
      setSummaryResult(data);
    } catch (e) {
      console.error(e);
      setSummaryResult({
        summary:
          "죄송합니다. 일시적인 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
      });
    } finally {
      setSummaryLoading(false);
    }
  };

  const handleSupport = async () => {
    if (supportResult) return;

    try {
      setSupportLoading(true);
      const response = await fetch("http://localhost:8000/api/ai/support/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: diary.content,
          emotionId: Number(diary.emotionId),
        }),
      });
      const data = await response.json();
      setSupportResult(data);
    } catch (e) {
      console.error(e);
      setSupportResult({
        support:
          "죄송합니다. 일시적인 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
      });
    } finally {
      setSupportLoading(false);
    }
  };

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
      <section className="ai_summary_section">
        <h4>AI 일기 요약</h4>
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <Button
            text={summaryLoading ? "요약 중..." : "요약"}
            type="DEFAULT"
            onClick={handleSummary}
          />
        </div>
        {summaryResult && (
          <div className="content_wrapper" style={{ marginBottom: "20px" }}>
            <p>{summaryResult.summary}</p>
          </div>
        )}
      </section>
      <section className="ai_support_section">
        <h4>AI 공감 메시지</h4>
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <Button
            text={supportLoading ? "공감 메시지 생성 중..." : "공감 메시지"}
            type="DEFAULT"
            onClick={handleSupport}
          />
        </div>
        {supportResult && (
          <div className="content_wrapper">
            <p>{supportResult.support}</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Viewer;
