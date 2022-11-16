# This Dockerfile builds the React client and API together

# Build step #1: build the React front end
FROM node:16-alpine as build-step
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json yarn.lock ./
COPY ./src ./src
COPY ./public ./public
RUN yarn config set "strict-ssl" false -g
RUN yarn config set proxy http://proxy.intra.bca.co.id:8080
RUN yarn config set https-proxy http://proxy.intra.bca.co.id:8080
RUN yarn install
RUN yarn build
# Build step #2: build the API with the client as static files
FROM python:3.9
WORKDIR /app
COPY --from=build-step /app/build ./build

RUN apt-get update
RUN apt-get install ffmpeg libsm6 libxext6  -y
RUN apt-get install poppler-utils -y
RUN mkdir ./api
COPY api/requirements.txt api/api.py api/.flaskenv ./api/
COPY download-model.sh ./api/
RUN ./api/download-model.sh
# COPY saved_model.h5 ./api/
RUN pip install -r ./api/requirements.txt
# RUN pip install gdown
# RUN wget "https://file.io/Tl4Y6H3PhPs4" -P ./api/ -O saved_model.h5
ENV FLASK_ENV production

EXPOSE 3000
WORKDIR /app/api
CMD ["gunicorn", "-b", ":3000", "api:app"]
