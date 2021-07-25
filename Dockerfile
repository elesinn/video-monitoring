FROM node:15.2.1-slim

LABEL version="1.0"
LABEL description="Docker image for Video monitoring"
LABEL maintainer = ["elesinn@ya.com"]

RUN mkdir /srv/example
WORKDIR /srv/example
COPY package.json yarn.lock ./
RUN yarn && yarn cache clean
COPY . .