const express = require('express');
const http = require('http');
const axios = require('axios');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
  console.log('Client connected');

  const eventSource = axios.get('http://3.91.57.167:8080/random-coordinates', {
    responseType: 'stream',
  });

  eventSource.then((response) => {
    response.data.on('data', (chunk) => {
      const data = chunk.toString().trim();
      if (data.startsWith('data:')) {
        const coordinates = JSON.parse(data.slice(5).trim());
        socket.emit('newCoordinates', coordinates);
      }
    });
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Chart server is running on port ${PORT}`);
});
