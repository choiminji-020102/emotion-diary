# backend/services/diary_service.py
from dotenv import load_dotenv
import os
from openai import OpenAI
from schemas.diary_schema import SummaryRequest, SummaryResponse, SupportRequest, SupportResponse

load_dotenv()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
if not OPENAI_API_KEY:
    raise ValueError("OPENAI_API_KEY가 설정되지 않았습니다.")

client = OpenAI(api_key=OPENAI_API_KEY)

class DiaryService:
  
    @staticmethod
    def summary(request: SummaryRequest) -> SummaryResponse:
        """
        일기를 요약하는 함수
        """
        content = (request.content or "").strip()
        
        if not content:   # ""(빈 문자열) or None 인 경우 
            return SummaryResponse(summary="일기를 먼저 작성해주세요")

        system_prompt = """
너는 감정 기반 일기 분석 및 요약 전문가다.  
사용자가 작성한 일기(content)를 입력받아, 일기의 핵심을 1~3문장으로 요약(summary)한다.  

### 역할 및 행동 원칙

1. **역할 정체성**
   - 너는 분석적인 일기 요약 전문가다.

2. **언어 스타일**
  - 사용자의 말투를 그대로 따라한다.

3. **출력 형식**
   - 반드시 JSON 형식으로 출력:
     {
       "summary": "<요약 내용>",
     }
   - 설명, 마크다운, 이모지, 불릿포인트 금지.

4. **요약(summary) 규칙**
   - 1~3문장, 150자 이내.
   - 사건(무엇이 있었는가) → 감정(어떻게 느꼈는가) 순서.
   - 일기에 없는 내용이나 추측 금지.

5. **품질 검증**
   - JSON 키는 반드시 summary 하나만 존재해야 한다.
   - 불필요한 해석 금지, 문체 일관성 유지.
"""

        user_prompt = f"""
다음 데이터를 분석하여 결과를 JSON 형식으로만 출력하세요.  
설명, 마크다운, 불릿포인트 등은 절대 포함하지 마세요.

입력 데이터:
content:
{content}

출력 형식(JSON):
{{
  "summary": "<일기 요약 (1~3문장)>",
}}
"""
        try:
            print("summary 시작")
            response = client.responses.parse(
                model="gpt-4o-mini",
                input=[
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": user_prompt},
                ],
                text_format=SummaryResponse,
            )
            print("summary 끝")
            print(response.output_parsed)
            return response.output_parsed

        except Exception as e:
            return SummaryResponse(summary="죄송합니다. 일시적인 오류가 발생했습니다. 잠시 후 다시 시도해주세요.")

    @staticmethod
    def support(request: SupportRequest) -> SupportResponse:
        """
        일기를 공감 및 심리학 기반 실천 조언을 생성하는 함수
        """
        content = (request.content or "").strip()
        emotion_id = request.emotionId
        
        emotion_map = {
            1: "완전 좋음",
            2: "약간 좋음", 
            3: "그럭저럭",
            4: "나쁨",
            5: "끔찍함"
        }
        emotion = emotion_map.get(emotion_id, "중립")

        if not content:   # ""(빈 문자열) or None 인 경우 
            return SupportResponse(support="일기를 먼저 작성해주세요")

        system_prompt = """
너는 감정과 일기를 기반으로 공감하고 심리학 기반 실천 조언을 생성하는 전문가다.  
사용자가 작성한 일기(content)와 감정(emotion)을 입력받아, 일기 내용과 감정을 함께 고려한 공감·위로·실천 조언(support)을 생성한다.

### 역할 및 행동 원칙

1. **역할 정체성**
   - 너는 공감적이면서도 분석적인 심리상담 전문가다.
   - 사용자의 감정을 인정하되, 실질적인 회복과 자기이해를 돕는 조언을 제시한다.

2. **언어 스타일**
   - 존댓말 사용, 따뜻하고 명료한 문체.
   - 긍정적 감정 → 밝고 격려하는 어조.
   - 부정적 감정 → 부드럽고 안정적인 어조.
   - 중립적 감정(“그럭저럭”) → 현실적이고 균형 잡힌 어조.

3. **출력 형식**
   - 반드시 JSON 형식으로 출력:
     {
       "support": "<공감 및 조언>"
     }
   - 설명, 마크다운, 이모지, 불릿포인트 금지.

4. **공감·조언(support) 규칙**
   - 일기 내용 + 감정을 함께 반영해 다음 구조로 작성한다:
     ① 감정 공감 1문장  
     ② 감정 원인 또는 맥락에 대한 짧은 통찰 1문장  
     ③ 심리학적으로 근거 있는 조언·행동 제안 1~2문장  
       (예: 자기효능감 회복, 감정기록, 루틴 회복, 휴식, 인지전환 등)
   - 단순 위로보다, 사용자의 상황에 맞는 **실행 가능한 실천 방향**을 포함한다.
   - 명령조·설교·가식적 위로·AI 자기언급 금지.
   - 3~5문장, 350자 이내.

5. **위기 감지 프로토콜**
   - content에 자살/자해/타해 표현이 있으면 support는 아래 문장으로 고정:
     "말씀해 주셔서 감사합니다. 지금의 고통이 매우 크다는 점이 전해집니다. 안전이 가장 중요합니다. 지금 즉시 주변의 신뢰하는 사람에게 알리거나, 지역 응급전화/위기상담(국번없이 1393 등)으로 도움을 받아주세요. 혼자가 아닙니다."

6. **품질 검증**
   - JSON 키는 반드시 support 하나만 존재해야 한다.
   - 불필요한 해석 금지, 문체 일관성 유지.
"""

        user_prompt = f"""
다음 데이터를 분석하여 결과를 JSON 형식으로만 출력하세요.  
설명, 마크다운, 불릿포인트 등은 절대 포함하지 마세요.

입력 데이터:
content:
{content}

emotion:
{emotion}
# 감정은 "완전 좋음" | "약간 좋음" | "그럭저럭" | "나쁨" | "끔찍함" 중 하나

출력 형식(JSON):
{{
  "support": "<일기 내용과 감정을 함께 반영한 공감 + 심리학 기반 실천 조언>"
}}
"""
        try:
            print("support 시작")
            response = client.responses.parse(
                model="gpt-4o-mini",
                input=[
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": user_prompt},
                ],
                text_format=SupportResponse,
            )
            print("support 끝")
            print(response.output_parsed)
            return response.output_parsed

        except Exception as e:
            return SupportResponse(support="죄송합니다. 일시적인 오류가 발생했습니다. 잠시 후 다시 시도해주세요.")