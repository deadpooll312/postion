FROM node:12
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
RUN yarn install
COPY . ./
CMD ["yarn", "start"]
