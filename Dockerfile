FROM node:12.13.0
RUN apt-get update
RUN apt-get install -y apt-utils vim
WORKDIR /var/www/mrkm/code
COPY . .
CMD ["npm", "start"]
