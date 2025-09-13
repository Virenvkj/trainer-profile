from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List
import uuid
from datetime import datetime


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactInquiry(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    company: str = ""
    training_type: str = ""
    participants: str = ""
    message: str
    status: str = "new"
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class ContactInquiryCreate(BaseModel):
    name: str
    email: EmailStr
    company: str = ""
    training_type: str = ""
    participants: str = ""
    message: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

@api_router.post("/contact", response_model=dict)
async def create_contact_inquiry(inquiry: ContactInquiryCreate):
    try:
        # Create contact inquiry object
        inquiry_dict = inquiry.dict()
        contact_obj = ContactInquiry(**inquiry_dict)
        
        # Save to database
        result = await db.contact_inquiries.insert_one(contact_obj.dict())
        
        logger.info(f"New contact inquiry received from {inquiry.name} ({inquiry.email})")
        
        return {
            "success": True,
            "message": "Thank you for your inquiry! I'll get back to you within 24 hours.",
            "id": contact_obj.id
        }
        
    except Exception as e:
        logger.error(f"Error creating contact inquiry: {str(e)}")
        return {
            "success": False,
            "message": "There was an error submitting your inquiry. Please try again.",
            "id": None
        }

@api_router.get("/contact", response_model=List[ContactInquiry])
async def get_contact_inquiries():
    try:
        inquiries = await db.contact_inquiries.find().sort("created_at", -1).to_list(1000)
        valid_inquiries = []
        for inquiry in inquiries:
            try:
                valid_inquiries.append(ContactInquiry(**inquiry))
            except Exception as validation_error:
                logger.warning(f"Skipping invalid inquiry {inquiry.get('id', 'unknown')}: {str(validation_error)}")
                continue
        return valid_inquiries
    except Exception as e:
        logger.error(f"Error fetching contact inquiries: {str(e)}")
        return []

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
