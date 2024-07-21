from rest_framework import serializers
from .models import Coin, Stanking


class CoinSerilizer(serializers.ModelSerializer):
    class Meta:
        model = Coin
        # fields = ('id', 'name', 'description', 'status')
        fields = '__all__'

class StakingSerializar(serializers.ModelSerializer):
    class Meta:
        model = Stanking
        fields = '__all__'