FROM node:8-alpine

COPY ./src /home/node/src
COPY ./public /home/node/public
COPY ./package.json /home/node/
COPY ./yarn.lock /home/node/

WORKDIR /home/node

RUN yarn \
 && yarn build \
 && yarn global add serve \
 && rm -rf node_modules

EXPOSE 5000

CMD ["npx", "serve", "-s", "./build"]
