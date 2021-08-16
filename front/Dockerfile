FROM node:16.6.1

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN npm install
RUN npm install -g @angular/cli@12.1.4

COPY . /app

CMD ng serve --host 0.0.0.0