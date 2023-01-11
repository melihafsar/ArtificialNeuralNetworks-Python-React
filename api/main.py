from fastapi import FastAPI, status, Depends
from fastapi.responses import JSONResponse, HTMLResponse, RedirectResponse
from typing import Optional
from PIL import Image
import time
import base64
from pydantic import BaseModel, Field
from io import BytesIO
from starlette.middleware.cors import CORSMiddleware
from yolov7 import yolov7
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from firebase_admin.auth import verify_id_token
import firebase_admin
from firebase_admin import credentials

yolov7_detector = yolov7("models/best.onnx",
                         conf_thres=0.5,
                         iou_thres=0.5)

cred = credentials.Certificate("apiKey.json")

firebaseApp = firebase_admin.initialize_app(cred)

app = FastAPI(
    docs_url="/docs",
    title="Yolov7-Cigarette Detection API",
    description=
    "This API is for detecting cigarettes and fires",
    version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

bearer_scheme = HTTPBearer(scheme_name="Firebase", description="Navigate to /admin/token in application to get your token")

class Error(BaseModel):
    message: Optional[str]

class BasicResponse(BaseModel):
    error: Optional[Error] = Field()
    content: Optional[dict]

class EmptyResponse(BasicResponse):
    message: str

class DetectResponse(BasicResponse):
    image: Optional[str] 
    execution_time_in_sec: Optional[float]

class CredentialRequest(BaseModel):
    credential: str

class DetectionRequest(BaseModel):
    image: str = Field(title="Image URL or Base64 Encoded Image", example="https://raw.githubusercontent.com/ucekmez/yolov7onnxruntime/main/sample.jpg")

    class Config:
        shema_extra = {
            "example": {
                "image":
                "https://raw.githubusercontent.com/ucekmez/yolov7onnxruntime/main/sample.jpg"
            }
        }

@app.get("/", response_class=HTMLResponse, status_code=status.HTTP_200_OK, tags=["Root"], include_in_schema=False)
def root():
    return RedirectResponse(url="/docs")

@app.post("/detect", response_model=DetectResponse, status_code=status.HTTP_200_OK, response_model_exclude_none=True, tags=["Detection"])
def detection(input: DetectionRequest, bearer:HTTPAuthorizationCredentials = Depends(bearer_scheme)):
    try:
        verify_id_token(bearer.credentials, check_revoked=True)
    except Exception as e:
        return JSONResponse(status_code=status.HTTP_403_FORBIDDEN, content=BasicResponse(error=Error(message=str(e))).dict())

    time_start = time.time()
    
    try:
        yolov7_detector(input.image)
        draw = yolov7_detector.draw_detections(yolov7_detector.current_image)
        buffered = BytesIO()
        Image.fromarray(draw).save(buffered, format="JPEG")
        img_str = base64.b64encode(buffered.getvalue())

    except Exception as e:
        return JSONResponse(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, content=DetectResponse(error=Error(message=str(e))))

    time_end = round(time.time() - time_start, 2)

    return DetectResponse(image = img_str,
                         execution_time_in_sec = time_end)


