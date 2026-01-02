# =====================
# Build stage
# =====================
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./

# Install ALL deps (including dev for tsc)
RUN npm install

COPY src ./src
RUN npm run build


# =====================
# Production stage
# =====================
FROM node:18-alpine

WORKDIR /app

# Create non-root user
RUN addgroup -g 1001 -S nodejs \
 && adduser -S express-user -u 1001

COPY package*.json ./
RUN npm install --omit=dev

COPY --from=builder /app/dist ./dist

RUN mkdir -p logs && chown express-user:nodejs logs

USER express-user

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/api/health', r => { if (r.statusCode !== 200) process.exit(1) })"

CMD ["node", "dist/index.js"]
