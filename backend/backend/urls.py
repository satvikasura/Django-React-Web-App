from django.contrib import admin
from django.urls import path, include
from recipes_api.views import CreateUserView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api-auth/", include("rest_framework.urls")),
    path("recipes_api/user/register/", CreateUserView.as_view(), name="register"),
    path("recipes_api/token/", TokenObtainPairView.as_view(), name="get_token"),
    path("recipes_api/token/refresh/", TokenRefreshView.as_view(), name="refresh"),
    path("recipes_api/", include("recipes_api.urls")),
]