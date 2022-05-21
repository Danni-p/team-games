# develop stage
FROM node:14.19.0-alpine as develop-stage
WORKDIR /app
COPY package*.json ./
COPY . .
# build stage
FROM develop-stage as build-stage
RUN yarn
RUN yarn run build:pwa
# production stage
FROM nginx:1.21.6-alpine as production-stage
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist/pwa /usr/share/nginx/html
#RUN adduser -D myuser
#USER myuser
#CMD ["nginx", "-g", "daemon off;"]
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'