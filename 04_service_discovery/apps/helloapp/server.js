var http = require('http');
var url = require('url');

const PORT = process.env.PORT || 8080;
const STRINGAPP = process.env.STRINGAPP || "http://localhost:8081/";

var handleRequest = function(request, response) {
  console.log('Request URI: ' + request.url);
  var url_parts = url.parse(request.url, true);
  var query = url_parts.query;


  http.get(STRINGAPP, (resp) => {
    let data = '';

    resp.on('data', (chunk) => {
      data += chunk;
    });

    resp.on('end', () => {
      response.writeHead(200, {"Content-Type": "application/json"});
      response.end(data);
    });

  }).on("error", (err) => {
    response.writeHead(500, {"Content-Type": "application/json"});
    var json = JSON.stringify({ 
      message: err.message
    });
    response.end(json);
  });

  if(Object.prototype.hasOwnProperty.call(query, 'apagar')) {
    console.log('Adios Mundo cruel!');
    process.exit();
  }
};

var www = http.createServer(handleRequest);
console.log('Servidor de Node listo. Escuchando en ', PORT);
www.listen(PORT);