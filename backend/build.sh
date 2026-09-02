#!/usr/bin/env bash
# build.sh - Render build script that installs OpenJDK 17 + npm dependencies

set -e

echo "=== Installing OpenJDK 17 ==="
apt-get update && apt-get install -y --no-install-recommends openjdk-17-jdk-headless
java -version
javac -version

echo "=== Installing npm dependencies ==="
npm install --omit=dev

echo "=== Build complete ==="