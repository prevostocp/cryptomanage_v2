from rest_framework import serializers
from .models import Coin


class CoinSerilizer(serializers.ModelSerializer):
    class Meta:
        model = Coin
        # fields = ('id', 'name', 'description', 'status')
        fields = '__all__'
