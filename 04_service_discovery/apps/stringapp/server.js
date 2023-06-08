var http = require('http');
var url = require('url');

const PORT = process.env.PORT || 8080;
const HELLO = process.env.HELLO || '¡Hola Mundo!';
const ID = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);

var handleRequest = function(request, response) {
  var url_parts = url.parse(request.url, true);
  var query = url_parts.query;

  response.writeHead(200, {"Content-Type": "application/json"});
  var json = JSON.stringify({ 
    message: HELLO,
    instanceId: ID
  });
  response.end(json);

  if(Object.prototype.hasOwnProperty.call(query, 'apagar')) {
    console.log('Adios Mundo cruel!');
    process.exit();
  }
};

var www = http.createServer(handleRequest);
console.log('Servidor de Node listo. Escuchando en ', PORT);
www.listen(PORT);