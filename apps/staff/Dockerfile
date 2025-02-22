FROM node:20-alpine AS base
ARG CI=false
ENV CI=$CI
RUN apk update && apk add --no-cache curl
RUN npm i -g corepack@latest
RUN corepack enable pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

FROM base AS builder
ARG CI=false
ENV CI=$CI
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app
RUN pnpm i -g turbo
COPY . .
RUN turbo prune staff --docker

FROM base AS installer
ARG CI=false
ENV CI=$CI
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY --from=builder /app/out/json/ .
RUN pnpm i
COPY --from=builder /app/out/full/ .
RUN pnpm turbo build

FROM base AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs
COPY --from=installer --chown=nextjs:nodejs /app/apps/staff/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/staff/.next/static ./apps/staff/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/staff/public ./apps/staff/public

CMD node apps/staff/server.js