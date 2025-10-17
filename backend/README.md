# Emotion Diary Backend API

감정 일기 분석 및 AI 조언을 제공하는 FastAPI 백엔드 서버입니다.

## 🚀 시작하기

### 1. 가상환경 설정

```bash
# 가상환경 생성
python -m venv venv

# 가상환경 활성화 (macOS/Linux)
source venv/bin/activate

# 가상환경 활성화 (Windows)
venv\Scripts\activate
```

### 2. 의존성 설치

```bash
pip install -r requirements.txt
```

### 3. 환경 변수 설정

`.env` 파일을 생성하고 다음 내용을 추가하세요:

```env
# OpenAI API 키
OPENAI_API_KEY=your_openai_api_key_here

# 서버 설정
HOST=0.0.0.0
PORT=8000
DEBUG=True
```

### 4. 서버 실행

```bash
# 개발 서버 실행 (아직 구현 안 됨)
python main.py

# 또는 uvicorn으로 직접 실행
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

서버가 실행되면 `http://localhost:8000`에서 API에 접근할 수 있습니다.

## 📚 API 문서

서버 실행 후 다음 URL에서 자동 생성된 API 문서를 확인할 수 있습니다:

- **Swagger UI**: `http://localhost:8000/docs`
- **ReDoc**: `http://localhost:8000/redoc`

## 🔧 API 엔드포인트

### POST `/api/ai/diary/summary`

일기 내용과 감정을 분석하여 요약과 조언을 제공합니다.

**요청 본문:**

```json
{
  "content": "오늘은 정말 힘든 하루였습니다...",
  "emotionId": 4
}
```

**응답:**

```json
{
  "summary": "오늘 힘든 하루를 보내며 우울한 감정을 느꼈습니다.",
  "support": "힘든 하루를 보내셨군요. 이런 감정을 느끼는 것은 자연스러운 일입니다. 충분한 휴식을 취하고, 좋아하는 음악을 들어보시는 것은 어떨까요?"
}
```

### GET `/health`

서버 상태를 확인합니다.

**응답:**

```json
{
  "status": "healthy",
  "message": "Emotion Diary API is running"
}
```

## 🏗️ 프로젝트 구조

```
backend/
├── main.py                 # FastAPI 앱 설정 및 메인 파일
├── config.py              # 설정 관리
├── requirements.txt       # Python 의존성
├── .gitignore            # Git 무시 파일 목록
├── routers/              # API 라우터
│   └── diary_router.py   # 일기 관련 API 엔드포인트
├── services/             # 비즈니스 로직
│   └── diary_service.py  # 일기 분석 서비스
└── schemas/              # 데이터 스키마
    └── diary_schema.py   # 요청/응답 스키마
```

## 🛠️ 개발 환경

- **Python**: 3.9+
- **FastAPI**: 0.115.5
- **OpenAI**: 2.3.0
- **Uvicorn**: 0.32.1

## 🤝 기여하기

1. 이 저장소를 포크합니다
2. 새로운 기능 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add amazing feature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.
