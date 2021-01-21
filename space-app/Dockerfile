FROM node:12.13.1 as build
ARG MODE

WORKDIR /usr/src/app
COPY package.json /usr/src/app/package.json

RUN npm install
COPY . /usr/src/app

EXPOSE 3003
