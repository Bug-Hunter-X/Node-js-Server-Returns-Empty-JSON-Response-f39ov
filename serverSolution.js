const http = require('http');

const requestListener = (request, response) => {
  const responseData = {
    message: 'Hello from Node.js!',
    data: { key: 'value' }
  };

  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify(responseData)); // Sending a JSON object with data
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});