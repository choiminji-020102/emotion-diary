from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.diary_router import router as diary_router

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
        host="0.0.0.0",
        port=8000,
        reload=True
    )