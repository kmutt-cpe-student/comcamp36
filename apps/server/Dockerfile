# Adapted from https://github.com/ejazahm3d/fullstack-turborepo-starter/blob/master/apps/api/Dockerfile under MIT License
# Copyright (c) 2022 Ejaz Ahmed

# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:

# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.

# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

FROM node:20-alpine AS builder
RUN apk update
# Set working directory
WORKDIR /app
RUN corepack enable pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN pnpm i -g turbo
COPY . .
RUN turbo prune server --docker

# Add lockfile and package.json's of isolated subworkspace
FROM node:20-alpine AS installer
RUN apk update
WORKDIR /app
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/turbo.json ./turbo.json
# COPY --from=builder /app/apps/api/prisma ./prisma // might need later
RUN pnpm i --frozen-lockfile
# RUN yarn prisma generate 


FROM node:20-alpine AS sourcer
WORKDIR /app
COPY --from=installer /app/ .
COPY --from=builder /app/out/full/ .
COPY .gitignore .gitignore
RUN pnpm turbo build server

FROM node:20-alpine as runner
WORKDIR /app
COPY --from=sourcer /app/ .
CMD [ "node", "apps/server/dist/main.js" ]