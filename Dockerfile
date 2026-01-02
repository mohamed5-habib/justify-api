# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY tsconfig.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY src/ ./src/

# Build TypeScript
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S express-user -u 1001

# Copy built application from builder stage
COPY --from=builder --chown=express-user:nodejs /app/package*.json ./
COPY --from=builder --chown=express-user:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=express-user:nodejs /app/dist ./dist

# Create logs directory
RUN mkdir -p logs && chown express-user:nodejs logs

# Switch to non-root user
USER express-user

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/api/health', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# Start the application
CMD ["node", "dist/server.js"]