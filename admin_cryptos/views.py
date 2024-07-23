from rest_framework import viewsets
from .serializer import CoinSerializer, StakingSerializer, StakingDetailSerializer
from .models import Coin, Stanking, StakingDetail
from django.db.models import Sum

class CoinView(viewsets.ModelViewSet):
    serializer_class = CoinSerializer
    queryset = Coin.objects.all()

class StakingView(viewsets.ModelViewSet):
    serializer_class = StakingSerializer
    queryset = Stanking.objects.all()

class StakingSumCant(viewsets.ModelViewSet):
    serializer_class = StakingSerializer
    stak = Stanking.objects.first()
    # stak.items.aggregate(sum('quantity'))

    # queryset = stak.items.aggregate(Sum('quantity'))
    queryset = stak.items.count()

class StakingDetailView(viewsets.ModelViewSet):
    serializer_class = StakingDetailSerializer
    queryset = StakingDetail.objects.all()