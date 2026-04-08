# Stage 1: Build the app
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json* ./
COPY pnpm-lock.yaml* ./
COPY yarn.lock* ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the built app with nginx
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
