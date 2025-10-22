from dotenv import load_dotenv
import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.diary_router import router as diary_router

load_dotenv()  # .env 파일 로드

# 환경 변수 가져오기
HOST = os.getenv("HOST", "127.0.0.1")
PORT = int(os.getenv("PORT", 8000))
DEBUG = os.getenv("DEBUG", "False").lower() == "true"

app = FastAPI(title="Emotion Diary - AI Backend")

# CORS 설정 (프론트엔드에서 호출 가능하도록 전체 허용)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(diary_router)

@app.get("/")
async def root():
    return {"message": "Emotion Diary - AI Backend API"}


@app.get("/health")
async def health_check():
    return {"status": "healthy", "services": ["emotion_diary_api"]}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",
        host=HOST,
        port=PORT,
        reload=DEBUG
    )