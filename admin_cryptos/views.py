from rest_framework import viewsets
from .serializer import CoinSerilizer
from .models import Coin
# Create your views here.


class CoinView(viewsets.ModelViewSet):
    serializer_class = CoinSerilizer
    queryset = Coin.objects.all()
