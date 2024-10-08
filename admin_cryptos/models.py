from django.db import models

class Coin(models.Model):
    name = models.CharField(max_length=200, null=False, unique=True, verbose_name="Name")
    description = models.TextField(blank=True)
    image = models.CharField(max_length=200, blank=True)
    webSite = models.CharField(max_length=200, blank=True)
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.name
    
    class Meta:
        db_table = "coins"
        verbose_name = "Coin"
        verbose_name_plural = "Coins"
        ordering = ["id"]

class Blockchain(models.Model):
    name = models.CharField(max_length=100, null=False, unique=True, verbose_name="Name")
    description = models.TextField(blank=True, verbose_name="Description")
    image = models.CharField(max_length=200, blank=True)
    webSite = models.CharField(max_length=200, blank=True)
    blockScan = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return self.name
    
    class Meta:
        db_table = "blockchains"
        verbose_name = "Blockchain"
        verbose_name_plural = "Blockchains"
        ordering = ["id"]

class Stanking(models.Model):
    name = models.CharField(max_length=100, null=False, unique=True, verbose_name="Name")
    description = models.TextField(blank=True, verbose_name="Description")
    image = models.CharField(max_length=200, blank=True)
    webSite = models.CharField(max_length=200, blank=True)
    blockchain = models.ForeignKey(Blockchain, on_delete=models.CASCADE, null=False, blank=False, default=1)
    type = models.SmallIntegerField(default=1)
    minimun_earn = models.FloatField(default=0)
    coin = models.ForeignKey(Coin, on_delete=models.CASCADE, null=False, blank=False, default=1)

    def __str__(self):
        return self.name
    
    class Meta:
        db_table = "stakings"
        verbose_name = "Staking"
        verbose_name_plural = "Stakings"
        ordering = ["id"]

class StakingDetail(models.Model):
    staking = models.ForeignKey(Stanking, related_name='detalles', on_delete=models.CASCADE, null=True, blank=True) # model_set
    quantity = models.FloatField(default=0)
    quantity_earn = models.FloatField(default=0)
    price = models.FloatField(default=0)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "stakingDetails"
        verbose_name = "StakingDetail"
        verbose_name_plural = "StakingDetails"
        ordering = ["id"]