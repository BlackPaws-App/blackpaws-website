FROM node:24-slim AS base
RUN corepack enable yarn

FROM base AS builder
ENV CI=true
COPY . /app
WORKDIR /app
RUN yarn install
RUN yarn build

FROM nginx:latest
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html