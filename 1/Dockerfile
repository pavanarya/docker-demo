FROM node:latest

RUN apt-get update
RUN apt-get install vim -y

RUN apt-get install html2text

Run mkdir /src
Copy app.js /src
WORKDIR /src
CMD node app.js

# Add EXPOPSE 8085