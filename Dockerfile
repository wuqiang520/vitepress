FROM nginx
ADD ./nginx.conf /etc/nginx/nginx.conf 
ADD ./docs/.vitepress/dist /usr/share/nginx/html