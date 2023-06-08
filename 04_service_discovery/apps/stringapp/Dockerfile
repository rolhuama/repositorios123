FROM node:9.0.0-alpine
EXPOSE 8080
COPY server.js .

#Se puede usar CMD como alternativa a ENTRYPOINT
#CMD node server.js

#Muy buena explicacion: http://www.johnzaccone.io/entrypoint-vs-cmd-back-to-basics/

ENTRYPOINT ["node", "server.js"]