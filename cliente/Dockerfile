FROM node:22.16 as build

WORKDIR /app

COPY ./cliente /app

RUN apt-get update && apt-get install -y git

RUN npm install && npm run build --prod

FROM nginx:alpine

COPY --from=build /app/dist/cliente/browser /usr/share/nginx/html

