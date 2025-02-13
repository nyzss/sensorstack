from fastapi import FastAPI, HTTPException
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from pydantic import BaseModel, EmailStr
import sqlite3
from contextlib import asynccontextmanager, contextmanager
from passlib.context import CryptContext
import os

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

limiter = Limiter(
    key_func=get_remote_address, default_limits=["200 per day", "50 per hour"]
)

app = FastAPI()
app.state.limiter = limiter
app.add_exception_handler(429, _rate_limit_exceeded_handler)


class EmailSubscription(BaseModel):
    email: EmailStr


class SubscriptionResponse(BaseModel):
    message: str
    email: EmailStr


class AdminLogin(BaseModel):
    username: str
    password: str


class LoginResonse(BaseModel):
    emails: list[str]


def init_db():
    with sqlite3.connect("emails.db") as conn:
        conn.execute("""
        CREATE TABLE IF NOT EXISTS subscriptions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE NOT NULL
        )
        """)


@contextmanager
def get_db():
    conn = sqlite3.connect("emails.db")
    try:
        yield conn
    finally:
        conn.close()


@asynccontextmanager
async def lifespan(app: FastAPI):
    init_db()
    yield
    pass


@app.post("/sign-up/", response_model=SubscriptionResponse)
async def sign_up(sub: EmailSubscription):
    try:
        with get_db() as conn:
            cursor = conn.cursor()
            cursor.execute("INSERT INTO subscriptions (email) VALUES (?)", (sub.email,))
            conn.commit()
        return {"message": "User successfully subscribed", "email": sub.email}
    except sqlite3.IntegrityError:
        raise HTTPException(status_code=400, detail="Email already exists")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/subscribers/", response_model=LoginResonse)
async def get_subs(login: AdminLogin):
    admin_user = os.environ.get("adminUser")
    hashed_admin_pass = os.environ.get("adminPass")
    hashed_entered_pass = pwd_context.hash(login.password)

    if login.username != admin_user or hashed_admin_pass != hashed_entered_pass:
        raise HTTPException(status_code=403, detail="Invalid Credentials")
    with get_db() as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT email FROM subscriptions")
        emails = [row[0] for row in cursor.fetchall()]
    return emails
