from .base import *
from decouple import config

# --- Development-specific settings ---

DEBUG = True

SECRET_KEY = config(
    'SECRET_KEY', default='django-insecure-a-very-secret-key-for-development')

ALLOWED_HOSTS = ["localhost", "127.0.0.1"]

# --- Database ---
# Database
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'portfolio_db',
        'USER': 'postgres',
        'PASSWORD': 123456,
        'HOST': 'localhost',
        'PORT': '5432'
    }
}


# --- CORS ---
# Allow requests from the local frontend development server
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]
CORS_ALLOW_CREDENTIALS = True


# --- Media Files ---
# Use local filesystem for media files in development
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'mediafiles'
DEFAULT_FILE_STORAGE = 'django.core.files.storage.FileSystemStorage'
