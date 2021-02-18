FROM node:14-alpine

WORKDIR /server

COPY package.json /server

RUN npm install

COPY . /server

ENV PORT=8080

EXPOSE 8080

CMD [ "npm", "start"]