"""
2019-02-05
author: qbin
"""
import os
import mimetypes
import zipfile
import datetime
import json
import sys
from azure.storage.blob import BlockBlobService
from azure.storage.blob import PublicAccess
from azure.storage.blob import ContentSettings
from azure.cosmosdb.table.tableservice import TableService
from azure.cosmosdb.table.models import Entity
from win32api import GetFileVersionInfo, LOWORD, HIWORD

with open('publish.key.json') as f:
    data = json.load(f)

storage_name = data['storage_name']
storage_account_key = data['storage_account_key']

block_blob_service = BlockBlobService(account_name=storage_name, account_key=storage_account_key)
table_service = TableService(account_name=storage_name, account_key=storage_account_key)

def upload(print_msg, blob_path, file_path):
    print('upload: {0}'.format(print_msg))
    block_blob_service.create_blob_from_path('static',
        blob_path,
        file_path,
        content_settings=ContentSettings(content_type=mimetypes.guess_type(file_path)[0]))

## upload js, css, etc...
asset_folder_path = os.getcwd() + '\\dist'
for root, dirs, files in os.walk(asset_folder_path, topdown=False):
    for name in files:
        relative_path = root.replace(asset_folder_path, '').replace('\\', '/') + '/' + name
        full_path = root + '\\' + name
        upload(relative_path, 'home' + relative_path, full_path)