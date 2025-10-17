# backend/schemas/diary_schema.py
from pydantic import BaseModel
from typing import Optional

class SummaryRequest(BaseModel):
    content: str

class SummaryResponse(BaseModel):
    summary: str

class SupportRequest(BaseModel):
    content: str
    emotionId: int

class SupportResponse(BaseModel):
    support: str