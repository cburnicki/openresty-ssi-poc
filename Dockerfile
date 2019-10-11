FROM node:carbon
RUN mkdir /mock-service
COPY mock-service/ /mock-service/
WORKDIR /mock-service
RUN npm run build
EXPOSE 8000
ENV STATIC_DIR=/www
ENTRYPOINT ["node", "./build/main.js"]