from rest_framework import serializers
from .models import Coin, Stanking, StakingDetail


class CoinSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coin
        # fields = ('id', 'name', 'description', 'status')
        fields = '__all__'

class StakingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stanking
        fields = '__all__'

class StakingDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = StakingDetail
        fields = '__all__'