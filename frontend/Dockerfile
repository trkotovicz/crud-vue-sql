FROM node:lts-alpine

WORKDIR /app-frontend

COPY package* ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "serve"]
