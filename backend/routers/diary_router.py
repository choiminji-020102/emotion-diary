from fastapi import APIRouter
from services.diary_service import DiaryService
from schemas.diary_schema import SummaryRequest, SummaryResponse, SupportRequest, SupportResponse

router = APIRouter(prefix="/api/ai")

@router.post("/summary", response_model=SummaryResponse)
async def summary(request: SummaryRequest):
    result = DiaryService.summary(request)
    return result

@router.post("/support", response_model=SupportResponse)
async def support(request: SupportRequest):
    result = DiaryService.support(request)
    return result