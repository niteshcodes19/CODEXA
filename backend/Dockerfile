FROM node:20-bullseye-slim

# Install OpenJDK 17 JDK for compiling and executing Java submissions
RUN apt-get update && \
    apt-get install -y --no-install-recommends openjdk-17-jdk-headless ca-certificates && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY . .

ENV PORT=8000
EXPOSE 8000

CMD ["node", "server.js"]
