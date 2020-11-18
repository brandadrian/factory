# stage 1 - build output
FROM node:latest as node
WORKDIR /frontend
COPY . .
RUN npm install
RUN npm run build --prod

# stage 2 - run app
FROM nginx:alpine
COPY --from=node /frontend/dist/kaese /usr/share/nginx/html