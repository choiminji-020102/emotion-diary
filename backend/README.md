# Emotion Diary Backend API

GPT-4o-mini 기반 AI가 긴 일기 내용을 간결하게 요약하고, 사용자의 감정 상태에 맞춰 공감과 심리학 기반 조언을 제공하는 FastAPI 백엔드 서버입니다.

## 🚀 시작하기

### 1. 가상환경 설정

```bash
# 1-1. 가상환경 생성
python -m venv venv

# 1-2. 가상환경 활성화 (macOS/Linux)
source venv/bin/activate

# 1-2. 가상환경 활성화 (Windows)
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
OPENAI_API_KEY=sk-proj...

# 서버 설정
HOST=0.0.0.0
PORT=8000
DEBUG=True
```

### 4. 서버 실행

```bash
# 개발 서버 실행
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

### POST `/api/ai/summary`

일기 내용을 분석하여 요약을 제공합니다.

**요청 본문:**

```json
{
  "content": "오늘은 정말 힘든 하루였습니다. 회사에서 프로젝트가 잘못되어 상사에게 혼났고, 집에 와서도 가족과 다툼이 있었습니다."
}
```

**응답:**

```json
{
  "summary": "회사에서 프로젝트 실패로 상사에게 혼나고, 집에서도 가족과 다툼이 있어 힘든 하루를 보냈습니다."
}
```

### POST `/api/ai/support`

일기 내용과 감정을 분석하여 공감과 심리학 기반 조언을 제공합니다.

**요청 본문:**

```json
{
  "content": "오늘은 정말 힘든 하루였습니다. 회사에서 프로젝트가 잘못되어 상사에게 혼났고, 집에 와서도 가족과 다툼이 있었습니다.",
  "emotionId": 4
}
```

**응답:**

```json
{
  "support": "힘든 하루를 보내셨군요. 여러 스트레스가 겹쳐 더욱 어려웠을 것 같습니다. 충분한 휴식을 취하고, 좋아하는 음악을 들어보시는 것은 어떨까요? 작은 성공이라도 기록해보시면 자기효능감을 회복하는 데 도움이 될 것입니다."
}
```

**감정 ID 매핑:**

- 1: 완전 좋음
- 2: 약간 좋음
- 3: 그럭저럭
- 4: 나쁨
- 5: 끔찍함

### GET `/health`

서버 상태를 확인합니다.

**응답:**

```json
{
  "status": "healthy",
  "services": ["emotion_diary_api"]
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

- **Python**: 3.9.6
- **FastAPI**: 0.115.5
- **OpenAI**: 2.3.0
- **Uvicorn**: 0.32.1

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.
