ARG NODE_VERSION=18.17.1

FROM node:${NODE_VERSION} as build

WORKDIR /app

COPY . .

RUN npm i

RUN npm run build

RUN npm prune --production

FROM node:${NODE_VERSION}-alpine as production

WORKDIR /app

COPY --from=build /app/node_modules node_modules

COPY --from=build /app/dist dist

CMD [ "node", "dist/app.js" ]
