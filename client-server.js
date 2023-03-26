const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/random-coordinates', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  const interval = setInterval(() => {
    const x = Math.random() * 100;
    const y = Math.random() * 100;

    res.write(`data: ${JSON.stringify({ x, y })}\n\n`);
  }, 1000);

  req.on('close', () => {
    clearInterval(interval);
    res.end();
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
