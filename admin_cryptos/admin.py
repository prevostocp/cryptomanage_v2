from django.contrib import admin
from .models import Coin, Blockchain, Stanking, StakingDetail

# Register your models here.
admin.site.register(Coin)
admin.site.register(Blockchain)
admin.site.register(Stanking)
admin.site.register(StakingDetail)
