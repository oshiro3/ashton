FROM node:10.13-alpine

USER root
RUN mkdir /var/ashton
WORKDIR /var/ashton

ADD package.json /var/ashton

# RUN apt update
# RUN apt install -y nodejs npm
RUN yarn install
