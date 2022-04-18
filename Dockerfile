FROM node:14-alpine
WORKDIR /usr/src/app
COPY package*.json ./

RUN apk update
RUN apk add --no-cache bash
RUN npm ci

COPY . .

RUN npm run build
EXPOSE 3000

COPY start-server /usr/local/bin
ENTRYPOINT [ "start-server" ]