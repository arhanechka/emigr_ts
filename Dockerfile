FROM node:13-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm install --save-dev --silent

RUN npm install react-scripts@4.0.3 -g --silent

RUN npm install -g sass

RUN npm install sass-loader sass --save-dev

COPY . ./

CMD ["npm", "start"]



