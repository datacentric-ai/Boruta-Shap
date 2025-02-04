#!/bin/bash

set -x

OLD_V=$(cat setup.py | grep version | awk -F\' '{print $2}')
NEW_V=$(git describe --tags --abbrev=0)
DATE_SUFFIX=$(date "+%Y%m%d%H%M%S")

echo $OLD_V
echo $NEW_V-$DATE_SUFFIX

git describe --tags --abbrev=0

sed -i "s|${OLD_V}|${NEW_V}|g" setup.py