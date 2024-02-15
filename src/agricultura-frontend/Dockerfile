# build environment
# FROM node:13.12.0-alpine as build
FROM node:18-alpine as build


WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./
COPY package-lock.json ./

ARG REACT_APP_API_URL
ENV REACT_APP_API_URL $REACT_APP_API_URL

RUN echo "REACT_APP_API_URL": $REACT_APP_API_URL


#ENV REACT_APP_API_URL http://localhost:5555


# Install required packages for npm install and remove them after use
RUN apk --no-cache --virtual build-dependencies add \
    git 


RUN npm ci --silent

RUN npm install react-scripts@5.0.1 -g --silent

COPY . ./

RUN npm run build

# production environment
FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf


# ARG REACT_APP_API_URL
#ENV REACT_APP_API_URL http://localhost:5555
#$REACT_APP_API_URL




EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]