FROM node:14-alpine AS builder

# Create app directory
WORKDIR /app

COPY ./package.json ./yarn.lock ./tsconfig.json ./jest.config.ts ./
COPY ./src ./src
COPY ./environment ./environment

RUN yarn install --frozen-lockfile

RUN yarn build

EXPOSE 3000
CMD [ "node", "dist/server.js" ]

# Multi stage example:

# FROM node:14-alpine AS builder

# # Create app directory
# WORKDIR /app

# COPY ./package.json ./yarn.lock ./tsconfig.json ./jest.config.js ./
# COPY ./src ./src
# COPY ./environment ./environment

# RUN yarn install --frozen-lockfile

# RUN yarn build

# FROM node:14-alpine

# WORKDIR /app

# COPY --from=builder ./app/environment ./environment
# COPY --from=builder ./app/dist ./dist
# COPY --from=builder ./app/package.json ./
# RUN yarn install --frozen-lockfile --production

# EXPOSE 3000
# CMD [ "node", "dist/server.js" ]