FROM node:14-alpine
WORKDIR /usr/src/app
COPY package*.json ./

RUN apk update
RUN npm ci

COPY . .

RUN npm run build
EXPOSE 3000

CMD ["npm", "start"]