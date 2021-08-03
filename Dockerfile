FROM node:12
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN yarn install
COPY . ./
CMD ["yarn", "start"]
