#!/usr/bin/env bash
set -e

echo "=== Installing npm dependencies ==="
npm install --omit=dev

echo "=== Installing Java JDK 17 ==="
bash install-jdk.sh

echo "=== Build finished successfully ==="