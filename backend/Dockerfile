FROM node:16.17-alpine

WORKDIR /app-backend

COPY . .

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "start"]
