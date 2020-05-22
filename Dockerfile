ARG NODE_VERSION=14.2.0
ARG NODE_ALPINE_VERSION=3.11

ARG NGINX_VERSION=1.18.0


# -------------------- base -------------------- #

FROM node:${NODE_VERSION}-alpine${NODE_ALPINE_VERSION} AS base

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

RUN set -x \
 && mkdir /twitter-dashboard \ 
 && chown -R node:node /twitter-dashboard

WORKDIR /twitter-dashboard

USER node


# -------------------- dependencies -------------------- #

FROM base AS dependencies

COPY --chown=node:node package*.json ./

RUN set -x \
 && npm ci
 

# -------------------- build -------------------- #

FROM base AS build

COPY --chown=node:node --from=dependencies /twitter-dashboard ./

COPY --chown=node:node . ./

RUN set -x \
 && npm run build


# -------------------- prod-app -------------------- #

FROM nginx:${NGINX_VERSION}-alpine AS prod-app

ARG PORT=80
ENV PORT $PORT
EXPOSE $PORT

COPY --from=build /twitter-dashboard/build /usr/share/nginx/html


# -------------------- dev-dependencies -------------------- #

FROM dependencies AS dev-dependencies

RUN set -x \
 && npm install --only=development


# -------------------- dev-app -------------------- #

FROM base AS dev-app

ARG PORT=8080
ENV PORT $PORT
EXPOSE $PORT

COPY --chown=node:node --from=dependencies /twitter-dashboard ./
COPY --chown=node:node --from=dev-dependencies /twitter-dashboard ./

COPY --chown=node:node . ./

ENV PATH=/twitter-dashboard/node_modules/.bin:$PATH

CMD [ "npm", "run", "start-dev" ]


# -------------------- cli -------------------- #

FROM base AS cli