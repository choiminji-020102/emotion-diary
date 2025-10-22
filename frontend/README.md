# 📔 감정 일기장 (Emotion Diary)

React와 Vite를 기반으로 제작한 감정 일기장 웹 애플리케이션입니다. 하루의 감정을 5가지 단계로 기록하고, 월별로 일기를 관리할 수 있습니다.

## ✨ 주요 기능

- **일기 작성**: 날짜, 감정, 내용을 입력하여 일기 작성
- **일기 조회**: 월별로 일기 목록 확인 및 상세 내용 조회
- **일기 수정**: 작성한 일기 내용 수정
- **일기 삭제**: 작성한 일기 삭제
- **감정 선택**: 5가지 감정 단계 중 선택 (완전 좋음, 좋음, 그럭저럭, 나쁨, 끔찍함)
- **정렬 기능**: 최신순/오래된 순으로 일기 정렬
- **월별 네비게이션**: 이전/다음 달로 이동하며 일기 확인

## 🛠️ 기술 스택

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Routing**: React Router DOM 7.9.0
- **상태 관리**: React Context API + useReducer
- **스타일링**: CSS
- **개발 도구**: ESLint

## 📁 프로젝트 구조

```
emotion-diary/
├── src/
│   ├── assets/            # 감정 이미지 (emotion1~5.png)
│   ├── components/        # 재사용 컴포넌트
│   │   ├── Button.jsx
│   │   ├── DiaryItem.jsx
│   │   ├── DiaryList.jsx
│   │   ├── Editor.jsx
│   │   ├── EmotionItem.jsx
│   │   ├── Header.jsx
│   │   └── Viewer.jsx
│   ├── context/          # Context API
│   │   └── DiaryContext.jsx
│   ├── hooks/            # 커스텀 훅
│   │   └── useDiary.jsx
│   ├── pages/            # 페이지 컴포넌트
│   │   ├── Home.jsx      # 월별 일기 목록
│   │   ├── New.jsx       # 새 일기 작성
│   │   ├── Diary.jsx     # 일기 상세 조회
│   │   ├── Edit.jsx      # 일기 수정
│   │   └── Notfound.jsx  # 404 페이지
│   ├── util/             # 유틸리티 함수
│   │   ├── constants.js
│   │   └── get-emotion-image.js
│   ├── App.jsx           # 메인 앱 컴포넌트
│   ├── main.jsx          # 엔트리 포인트
│   └── index.css         # 전역 스타일
└── public/
    └── NanumPenScript-Regular.ttf  # 커스텀 폰트
```

## 🚀 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

개발 서버가 실행되면 브라우저에서 `http://localhost:5173`으로 접속할 수 있습니다.

### 프로덕션 빌드

```bash
npm run build
```

### 빌드 미리보기

```bash
npm run preview
```

### 코드 린트

```bash
npm run lint
```

## 📝 주요 컴포넌트 설명

### Pages

- **Home**: 월별 일기 목록을 표시하고, 월을 이동할 수 있는 네비게이션 제공
- **New**: 새로운 일기를 작성하는 폼 제공
- **Diary**: 특정 일기의 상세 내용을 보여줌
- **Edit**: 기존 일기를 수정하거나 삭제할 수 있는 페이지

### Components

- **Editor**: 일기 작성/수정을 위한 입력 폼 (날짜, 감정, 내용)
- **DiaryList**: 일기 목록을 정렬 옵션과 함께 표시
- **DiaryItem**: 개별 일기 항목 카드
- **Viewer**: 일기 상세 내용 표시
- **EmotionItem**: 감정 선택 버튼
- **Header**: 페이지 헤더 (제목, 좌우 버튼)
- **Button**: 재사용 가능한 버튼 컴포넌트 (POSITIVE, NEGATIVE, DEFAULT 타입)

### Custom Hooks

- **useDiary**: URL 파라미터의 id로 특정 일기 데이터를 찾아 반환

### Context

- **DiaryStateContext**: 일기 데이터 상태 공유
- **DiaryDispatchContext**: 일기 CRUD 함수 공유 (onCreate, onUpdate, onDelete)

## 🎨 감정 단계

1. **완전 좋음** 😄
2. **좋음** 😊
3. **그럭저럭** 😐
4. **나쁨** 😞
5. **끔찍함** 😢

각 감정에 맞는 이미지와 배경색이 적용됩니다.

## 🔧 상태 관리

useReducer를 활용한 일기 데이터 관리:

- **CREATE**: 새 일기 추가
- **UPDATE**: 기존 일기 수정
- **DELETE**: 일기 삭제

Context API를 통해 전역 상태로 관리되어 모든 컴포넌트에서 접근 가능합니다.

## 📱 주요 기능 흐름

1. **홈 화면**: 현재 월의 일기 목록 확인
2. **일기 작성**: "새 일기 쓰기" 버튼 → 날짜, 감정, 내용 입력 → 작성 완료
3. **일기 조회**: 일기 항목 클릭 → 상세 내용 확인
4. **일기 수정**: 상세 페이지에서 "수정하기" → 내용 수정 → 저장
5. **일기 삭제**: 수정 페이지에서 "삭제하기" → 확인 후 삭제

## 📄 라이선스

이 프로젝트는 개인 학습용으로 제작되었습니다.

## 🔗 추가 정보

- Vite 공식 문서: https://vitejs.dev/
- React 공식 문서: https://react.dev/
- React Router 공식 문서: https://reactrouter.com/
