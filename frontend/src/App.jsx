import { useReducer, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";
import {
  DiaryStateContext,
  DiaryDispatchContext,
} from "./context/DiaryContext";

// const mockData = [
//   {
//     id: 1,
//     createdDate: new Date("2025-09-17").getTime(),
//     emotionId: 3,
//     content: "1번 일기 내용 입니다.",
//   },
//   {
//     id: 2,
//     createdDate: new Date("2025-09-01").getTime(),
//     emotionId: 2,
//     content: "2번 일기 내용 입니다.",
//   },
// ];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.payload, ...state]; // action.payload: 새로운 일기 {}, state:기존 일기(들)이 []안에 (여러 혹은 하나의){}로 들어있음.
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.payload.id) ? action.payload : item
      );
    case "DELETE":
      return state.filter(
        (item) => String(item.id) !== String(action.payload.id)
      );
    default:
      return state;
  }
}

function App() {
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(2);
  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      payload: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };
  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      payload: { id, createdDate, emotionId, content },
    });
  };
  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      payload: { id },
    });
  };
  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
