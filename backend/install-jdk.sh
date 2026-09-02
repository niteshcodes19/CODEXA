#!/usr/bin/env bash
set -e

echo "=== Setting up Java JDK 17 for Linux on Render ==="

# Check if javac is already available (e.g. if running in Docker)
if command -v javac &> /dev/null; then
    echo "javac is already installed and in PATH:"
    javac -version
    java -version
    exit 0
fi

JDK_DIR="./jdk"

if [ -f "$JDK_DIR/bin/javac" ]; then
    echo "JDK 17 already exists in $JDK_DIR"
    "$JDK_DIR/bin/javac" -version
    exit 0
fi

echo "Downloading portable OpenJDK 17 for Linux x64..."
mkdir -p "$JDK_DIR"

curl -sL "https://api.adoptium.net/v3/binary/latest/17/ga/linux/x64/jdk/hotspot/normal/eclipse" -o jdk17.tar.gz

echo "Extracting OpenJDK 17..."
tar -xzf jdk17.tar.gz --strip-components=1 -C "$JDK_DIR"
rm -f jdk17.tar.gz

echo "Verifying local JDK installation:"
"$JDK_DIR/bin/javac" -version
"$JDK_DIR/bin/java" -version

echo "=== Java JDK 17 setup complete! ==="