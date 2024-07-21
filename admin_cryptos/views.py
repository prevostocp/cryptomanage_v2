from rest_framework import viewsets
from .serializer import CoinSerilizer, StakingSerializar
from .models import Coin, Stanking


class CoinView(viewsets.ModelViewSet):
    serializer_class = CoinSerilizer
    queryset = Coin.objects.all()

class StakingView(viewsets.ModelViewSet):
    serializer_class = StakingSerializar
    queryset = Stanking.objects.all()