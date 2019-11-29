FROM node:10

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

ADD db /usr/src/app/db

ADD middleware /usr/src/app/middleware

ADD models /usr/src/app/models

ADD routers /usr/src/app/routers

COPY index.js ./

EXPOSE 4000

CMD [ "npm", "start" ]