FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install


COPY . .

ENV PORT=3712

EXPOSE 3712

CMD ["npm", "start"]