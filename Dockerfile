FROM node:alpine

WORKDIR /calculator/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run": "nodemon -L src/app.js"]
