# Generated by Django 5.2.3 on 2025-06-27 03:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('personas', '0003_personas_donador'),
    ]

    operations = [
        migrations.AlterField(
            model_name='personas',
            name='donador',
            field=models.BooleanField(default=False),
        ),
    ]
