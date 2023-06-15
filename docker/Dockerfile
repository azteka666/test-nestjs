FROM node:18-alpine

RUN apk update && apk add bash

RUN mkdir -p /home/node/app/node_modules

ARG PORT
ARG NODE_ENV

ENV NODE_ENV=$NODE_ENV
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

WORKDIR /home/node/app

COPY package*.json ./
RUN yarn install

COPY . .
RUN chown -R node:node /home/node/app

USER node

EXPOSE $PORT

CMD [ "yarn", "run", "start:dev" ]
