from rest_framework import serializers
from .models import Coin, Stanking, StakingDetail, Blockchain


class CoinSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coin
        # fields = ('id', 'name', 'description', 'status')
        fields = '__all__'

class BlockchainSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blockchain
        fields = '__all__'

class StakingDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = StakingDetail
        fields = '__all__'

class StakingSerializer(serializers.ModelSerializer):
    detalles = StakingDetailSerializer(many=True, read_only=True)
    
    class Meta:
        model = Stanking
        fields = '__all__'