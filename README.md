# 📔 Emotion Diary

감정 일기장 웹 애플리케이션입니다. 하루의 감정을 5가지 단계로 기록하고, 월별로 일기를 체계적으로 관리할 수 있으며, GPT-4o-mini 기반 AI가 일기 내용을 요약하고 감정에 맞춘 조언을 제공합니다.

## 🚀 빠른 시작

### 전체 애플리케이션 실행

1. **백엔드 서버 실행**

   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # Windows: venv\Scripts\activate
   pip install -r requirements.txt
   python main.py
   ```

2. **프론트엔드 서버 실행** (새 터미널에서)

   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. **애플리케이션 접속**
   - 프론트엔드: http://localhost:5173
   - 백엔드 API: http://localhost:8000
   - API 문서: http://localhost:8000/docs

## 🏗️ 프로젝트 구조

```
emotion-diary/
├── backend/                 # FastAPI 백엔드 서버
│   ├── main.py             # FastAPI 앱 설정
│   ├── routers/            # API 라우터
│   ├── services/           # 비즈니스 로직
│   ├── schemas/            # 데이터 스키마
│   └── requirements.txt    # Python 의존성
├── frontend/               # React 프론트엔드
│   ├── src/                # 소스 코드
│   ├── public/             # 정적 자산
│   └── package.json        # Node.js 의존성
└── README.md               # 프로젝트 개요
```

## ✨ 주요 기능

### 📝 일기 관리

- **일기 작성**: 날짜, 감정(5단계), 내용을 입력하여 일기 작성
- **일기 조회**: 월별로 일기 목록 확인 및 상세 내용 조회
- **일기 수정/삭제**: 작성한 일기 수정 및 삭제
- **정렬 기능**: 최신순/오래된 순으로 일기 정렬

### 🤖 AI 기능

- **일기 요약**: GPT-4o-mini가 긴 일기 내용을 간결하게 요약
- **공감 메시지**: 감정 상태에 맞춘 심리학 기반 조언 제공

### 🎨 사용자 경험

- **감정 선택**: 5가지 감정 단계 (완전 좋음, 좋음, 그럭저럭, 나쁨, 끔찍함)
- **월별 네비게이션**: 이전/다음 달로 이동하며 일기 확인
- **반응형 디자인**: 다양한 화면 크기에 최적화

## 🛠️ 기술 스택

### Backend

- **Framework**: FastAPI 0.115.5
- **AI**: OpenAI GPT-4o-mini
- **Language**: Python 3.9+
- **Server**: Uvicorn

### Frontend

- **Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Routing**: React Router DOM 7.9.0
- **상태 관리**: Context API + useReducer

## 📚 상세 문서

- [백엔드 API 문서](./backend/README.md)
- [프론트엔드 문서](./frontend/README.md)

## 🔧 개발 환경 설정

### 백엔드 설정

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### 프론트엔드 설정

```bash
cd frontend
npm install
```

### 환경 변수 설정

백엔드 폴더에 `.env` 파일을 생성하고 다음 내용을 추가하세요:

```env
OPENAI_API_KEY=sk-proj...
HOST=0.0.0.0
PORT=8000
DEBUG=True
```

## 🚀 배포

### 백엔드 배포

```bash
cd backend
uvicorn main:app --host 0.0.0.0 --port 8000
```

### 프론트엔드 배포

```bash
cd frontend
npm run build
npm run preview
```

## 📄 라이선스

이 프로젝트는 개인 학습용으로 제작되었습니다.

## 🧑‍💻 Contributors

| 이름   | 역할                                 | GitHub                                     |
| ------ | ------------------------------------ | ------------------------------------------ |
| 최민지 | Fullstack Developer (FastAPI, React) | [@choiminji](https://github.com/choiminji) |

## 🤝 기여하기

1. 이 저장소를 포크합니다
2. 새로운 기능 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add amazing feature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다
