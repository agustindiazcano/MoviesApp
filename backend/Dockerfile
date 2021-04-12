FROM node
COPY ./package.json package.json
COPY ./index.js index.js
COPY ./favorites.js favorites.js
COPY ./public /public
COPY ./api /api
RUN ["npm","install"]
CMD [ "npm", "start" ]
EXPOSE 5000