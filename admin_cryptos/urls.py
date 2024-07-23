from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from .views import CoinView, StakingView, StakingSumCant

router = routers.DefaultRouter()
router.register(r'coins', CoinView, 'coins')
router.register(r'stakings', StakingView, 'staking')
router.register(r'stakingsSum', StakingSumCant, 'stakingSum')

urlpatterns = [
    path("api/v1/", include(router.urls)),
    # path("docs/", include_docs_urls(title="Coins API"))
]
