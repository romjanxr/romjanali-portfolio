# portfolio_api/settings/production.py

from .base import *
from decouple import config
import dj_database_url

# --- Production-specific settings ---

DEBUG = False

SECRET_KEY = config('SECRET_KEY')

# Load ALLOWED_HOSTS from a comma-separated string in .env
ALLOWED_HOSTS_str = config('ALLOWED_HOSTS', default='')
ALLOWED_HOSTS = ALLOWED_HOSTS_str.split(',') if ALLOWED_HOSTS_str else []


# --- Database ---
# Connect to PostgreSQL on AWS RDS
DATABASES = {
    'default': dj_database_url.config(
        default=config('DATABASE_URL'),
        conn_max_age=600,
        ssl_require=True  # Important for RDS
    )
}


# --- Static Files (WhiteNoise) ---
# http://whitenoise.evans.io/en/stable/django.html
STATIC_ROOT = BASE_DIR / 'staticfiles'
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

# Insert WhiteNoise middleware after the security middleware
MIDDLEWARE.insert(2, 'whitenoise.middleware.WhiteNoiseMiddleware')


# --- Media Files (Amazon S3) ---
AWS_ACCESS_KEY_ID = config('AWS_ACCESS_KEY_ID')
AWS_SECRET_ACCESS_KEY = config('AWS_SECRET_ACCESS_KEY')
AWS_STORAGE_BUCKET_NAME = config('AWS_STORAGE_BUCKET_NAME')
AWS_S3_REGION_NAME = config('AWS_S3_REGION_NAME')
AWS_S3_CUSTOM_DOMAIN = f'{AWS_STORAGE_BUCKET_NAME}.s3.amazonaws.com'
AWS_S3_FILE_OVERWRITE = False
AWS_DEFAULT_ACL = 'public-read'

DEFAULT_FILE_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'
MEDIA_URL = f'https://{AWS_S3_CUSTOM_DOMAIN}/media/'


# --- CORS ---
# Define which frontend domains are allowed to connect
cors_origins = config("CORS_ALLOWED_ORIGINS", "")
CORS_ALLOWED_ORIGINS = [origin.strip()
                        for origin in cors_origins.split(",") if origin.strip()]
CORS_ALLOW_CREDENTIALS = True


# --- Security Settings ---
# Enforce HTTPS and other security headers
SECURE_SSL_REDIRECT = config('SECURE_SSL_REDIRECT', default=True, cast=bool)
SESSION_COOKIE_SECURE = config(
    'SESSION_COOKIE_SECURE', default=True, cast=bool)
CSRF_COOKIE_SECURE = config('CSRF_COOKIE_SECURE', default=True, cast=bool)
SECURE_HSTS_SECONDS = 2592000  # 30 days
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_PRELOAD = True
