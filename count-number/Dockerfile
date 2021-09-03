FROM node:alpine
WORKDIR /usr/app
COPY ./package.json ./
RUN npm i
COPY ./index.js ./
CMD [ "npm", "start" ]