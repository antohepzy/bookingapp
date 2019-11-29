FROM node:10

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

ADD src /usr/src/app/src

ADD public /usr/src/app/public

EXPOSE 3000

CMD [ "npm", "start" ]