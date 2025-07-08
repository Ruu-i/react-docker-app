# ---------- Stage 1: Build ----------
FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY vite.config.ts ./
COPY public ./public
COPY src ./src

RUN npm install
RUN npm run build

# ---------- Stage 2: Serve with NGINX ----------
FROM nginx:alpine

# Copy build artifacts from previous stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Optional: custom nginx config
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]