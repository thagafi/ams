# Generated by Django 3.1.3 on 2021-02-26 14:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='secondy_name',
            new_name='second_name',
        ),
    ]