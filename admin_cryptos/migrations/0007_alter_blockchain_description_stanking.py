# Generated by Django 5.0.7 on 2024-07-21 00:12

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('admin_cryptos', '0006_alter_blockchain_name_alter_coin_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blockchain',
            name='description',
            field=models.TextField(blank=True, verbose_name='Description'),
        ),
        migrations.CreateModel(
            name='Stanking',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True, verbose_name='Name')),
                ('description', models.TextField(blank=True, verbose_name='Description')),
                ('image', models.CharField(blank=True, max_length=200)),
                ('webSite', models.CharField(blank=True, max_length=200)),
                ('Blockchain', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='admin_cryptos.blockchain')),
            ],
        ),
    ]
