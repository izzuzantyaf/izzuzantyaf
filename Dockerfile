FROM node:22-alpine

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

COPY . .

# Build and clean up
RUN pnpm run build && pnpm prune --prod && rm -rf src public .env .env.*

CMD pnpm start