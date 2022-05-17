<<<<<<< HEAD
# Stage 0 - Build Frontend Assets
FROM node:12.16.3-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 1 - Serve Frontend Assets
FROM fholzer/nginx-brotli:v1.12.2

WORKDIR /etc/nginx
ADD nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
=======
FROM node:16.15.0

WORKDIR /app

COPY package.json package.json

RUN npm install

COPY . .

CMD ["npm", "run", "start"]

>>>>>>> 37042027f5143437a829fefb6ef6a4b7325d8fac
