Commands used to setup and manage the backend:

pip install -r requirements.txt
django-admin startproject backend
cd backend
python manage.py startapp recipes_api
python manage.py makemigrations
pytion manage.py migrate
python manage.py runserver
