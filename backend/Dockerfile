FROM node:20-alpine
LABEL authors="Jeremy Dufroy"

WORKDIR /backend

RUN npm install json-server@0.17.4
RUN npm install jeremy-json-server-auth

COPY . .
