FROM node:14-alpine

RUN mkdir -p /app-server
WORKDIR /app-server

COPY package.json /app

RUN npm install

COPY . /app

ENV PORT=8080

EXPOSE 8080

CMD [ "npm", "start"]