from django.db import models

# Create your models here.


class Coin(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    image = models.CharField(max_length=200, blank=True)
    webSite = models.CharField(max_length=200, blank=True)
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.name
