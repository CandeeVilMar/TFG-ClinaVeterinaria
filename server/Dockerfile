FROM node:22.16

WORKDIR /app

COPY ./server /app

RUN npm install
RUN npm install -g wait-port

CMD ["sh", "-c", "wait-port db:3306 && npm start"]
