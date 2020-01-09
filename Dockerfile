FROM nginx:latest
COPY dist /var/www/html
COPY web.conf /etc/nginx/conf.d
EXPOSE 8080
