FROM node:17-alpine3.14

WORKDIR /var/www

COPY ./package.json /var/www

RUN apk add inotify-tools \
    && npm i --legacy-peer-deps

COPY ./.babelrc /var/www
COPY ./tsconfig.json /var/www
COPY ./webpack.config.js /var/www

EXPOSE 3000

CMD ["npm", "run", "dev"]