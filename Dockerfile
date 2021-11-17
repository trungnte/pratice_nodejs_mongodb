FROM node:12.13.0
RUN apt-get update
RUN apt-get install -y apt-utils vim
WORKDIR /var/www/mrkm/code
COPY . .

RUN npm install
RUN npm install express
RUN npm install ejs
RUN npm install mongoose

EXPOSE 5000
CMD [ "npm", "start" ]