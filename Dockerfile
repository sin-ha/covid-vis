FROM node:14.17.6
WORKDIR /application
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8000
CMD ["node", "app"]
CMD ["docker", "run", "-p 8000:3000",]
