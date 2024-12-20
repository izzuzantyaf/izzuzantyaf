FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build && npm prune --include=prod && rm -rf src public .env .env.*

CMD npm start