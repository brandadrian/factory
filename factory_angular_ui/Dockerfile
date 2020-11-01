# stage 1 - build output
FROM node:latest as node
WORKDIR /factory_angular_ui
COPY . .
RUN npm install
RUN npm run build --prod

# stage 2 - run app
FROM nginx:alpine
COPY --from=node /factory_angular_ui/dist/kaese /usr/share/nginx/html