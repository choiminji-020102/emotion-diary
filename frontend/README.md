# Emotion Diary Frontend

React와 Vite를 기반으로 제작한 감정 일기장 웹 애플리케이션입니다. 하루의 감정을 5가지 단계로 기록하고, 월별로 일기를 체계적으로 관리할 수 있는 현대적인 SPA(Single Page Application)입니다. GPT-4o-mini 기반 AI가 일기 내용을 요약하고 감정에 맞춘 조언을 제공하여 더욱 풍부한 일기 경험을 선사합니다.

## 🚀 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

개발 서버가 실행되면 브라우저에서 `http://localhost:5173`으로 접속할 수 있습니다.

### 3. 프로덕션 빌드

```bash
npm run build
```

### 4. 빌드 미리보기

```bash
npm run preview
```

### 5. 코드 린트

```bash
npm run lint
```

## ✨ 주요 기능

### 📝 일기 관리

- **일기 작성**: 날짜, 감정(5단계), 내용을 입력하여 일기 작성
- **일기 조회**: 월별로 일기 목록 확인 및 상세 내용 조회
- **일기 수정**: 작성한 일기 내용 수정
- **일기 삭제**: 작성한 일기 삭제

### 🤖 AI 기능

- **AI 일기 요약**: GPT-4o-mini가 긴 일기 내용을 1-3문장으로 간결하게 요약
- **AI 공감 메시지**: 사용자의 감정 상태에 맞춘 심리학 기반 공감 및 조언 제공

### 🎨 사용자 경험

- **감정 선택**: 5가지 감정 단계 중 선택 (완전 좋음, 좋음, 그럭저럭, 나쁨, 끔찍함)
- **정렬 기능**: 최신순/오래된 순으로 일기 정렬
- **월별 네비게이션**: 이전/다음 달로 이동하며 일기 확인
- **반응형 디자인**: 다양한 화면 크기에 최적화

## 🛠️ 기술 스택

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Routing**: React Router DOM 7.9.0
- **상태 관리**: React Context API + useReducer
- **스타일링**: CSS Modules
- **개발 도구**: ESLint 9.33.0
- **AI 통신**: RESTful API (FastAPI 백엔드 연동)

## 🏗️ 프로젝트 구조

```
frontend/
├── public/                    # 정적 자산
│   └── *.ttf                 # 커스텀 폰트 파일들
├── src/
│   ├── assets/               # 이미지 리소스
│   │   └── emotion1~5.png    # 감정별 이미지
│   ├── components/           # 재사용 컴포넌트
│   │   ├── Button.jsx        # 범용 버튼 컴포넌트
│   │   ├── DiaryItem.jsx     # 일기 목록 아이템
│   │   ├── DiaryList.jsx     # 일기 목록 컨테이너
│   │   ├── Editor.jsx        # 일기 작성/수정 폼
│   │   ├── EmotionItem.jsx   # 감정 선택 아이템
│   │   ├── Header.jsx        # 페이지 헤더
│   │   └── Viewer.jsx        # 일기 상세 조회 + AI 기능
│   ├── context/              # Context API
│   │   └── DiaryContext.jsx  # 일기 상태 관리
│   ├── hooks/                # 커스텀 훅
│   │   └── useDiary.jsx      # 일기 데이터 조회 훅
│   ├── pages/                # 페이지 컴포넌트
│   │   ├── Home.jsx          # 월별 일기 목록
│   │   ├── New.jsx           # 새 일기 작성
│   │   ├── Diary.jsx         # 일기 상세 조회
│   │   ├── Edit.jsx          # 일기 수정
│   │   └── Notfound.jsx      # 404 페이지
│   ├── util/                 # 유틸리티 함수
│   │   ├── constants.js      # 상수 정의
│   │   └── get-emotion-image.js # 감정 이미지 매핑
│   ├── App.jsx               # 메인 앱 컴포넌트
│   ├── main.jsx              # 엔트리 포인트
│   └── index.css             # 전역 스타일
├── package.json              # 의존성 관리
├── vite.config.js            # Vite 설정
└── eslint.config.js          # ESLint 설정
```

## 🔧 핵심 컴포넌트

### Pages

- **Home**: 월별 일기 목록을 표시하고, 월을 이동할 수 있는 네비게이션 제공
- **New**: 새로운 일기를 작성하는 폼 제공
- **Diary**: 특정 일기의 상세 내용을 보여주고 AI 기능 제공
- **Edit**: 기존 일기를 수정하거나 삭제할 수 있는 페이지

### Components

- **Editor**: 일기 작성/수정을 위한 입력 폼 (날짜, 감정, 내용)
- **DiaryList**: 일기 목록을 정렬 옵션과 함께 표시
- **DiaryItem**: 개별 일기 항목 카드
- **Viewer**: 일기 상세 내용 표시 + AI 요약/공감 메시지 기능
- **EmotionItem**: 감정 선택 버튼
- **Header**: 페이지 헤더 (제목, 좌우 버튼)
- **Button**: 재사용 가능한 버튼 컴포넌트 (POSITIVE, NEGATIVE, DEFAULT 타입)

### Custom Hooks

- **useDiary**: URL 파라미터의 id로 특정 일기 데이터를 찾아 반환

### Context

- **DiaryStateContext**: 일기 데이터 상태 공유
- **DiaryDispatchContext**: 일기 CRUD 함수 공유 (onCreate, onUpdate, onDelete)

## 🤖 AI 기능 상세

### 일기 요약 API

- **엔드포인트**: `POST /api/ai/summary`
- **기능**: GPT-4o-mini가 일기 내용을 1-3문장으로 요약
- **사용법**: 일기 상세 페이지에서 "요약" 버튼 클릭

### 공감 메시지 API

- **엔드포인트**: `POST /api/ai/support`
- **기능**: 감정 상태에 맞춘 심리학 기반 공감 및 조언 제공
- **사용법**: 일기 상세 페이지에서 "공감 메시지" 버튼 클릭

## 🎨 감정 단계

1. **완전 좋음** 😄 (emotionId: 1)
2. **좋음** 😊 (emotionId: 2)
3. **그럭저럭** 😐 (emotionId: 3)
4. **나쁨** 😞 (emotionId: 4)
5. **끔찍함** 😢 (emotionId: 5)

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
4. **AI 기능**: 상세 페이지에서 "요약" 또는 "공감 메시지" 버튼 클릭
5. **일기 수정**: 상세 페이지에서 "수정하기" → 내용 수정 → 저장
6. **일기 삭제**: 수정 페이지에서 "삭제하기" → 확인 후 삭제

## 🔗 백엔드 연동

이 프론트엔드는 FastAPI 백엔드와 연동되어 AI 기능을 제공합니다.

- **백엔드 서버**: `http://localhost:8000`
- **AI 요약 API**: `POST /api/ai/summary`
- **AI 공감 API**: `POST /api/ai/support`

백엔드 서버가 실행되어야 AI 기능을 사용할 수 있습니다.

## 📄 라이선스

이 프로젝트는 개인 학습용으로 제작되었습니다.

## 🔗 추가 정보

- Vite 공식 문서: https://vitejs.dev/
- React 공식 문서: https://react.dev/
- React Router 공식 문서: https://reactrouter.com/
