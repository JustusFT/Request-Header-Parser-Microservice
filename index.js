const express = require('express');

const app = express();

app.enable('trust proxy');

app.use('/', (req, res) => {
  res.json({
    ipaddress: req.ip,
    language: req.headers['accept-language'].split(',')[0],
    software: /\((.*)\)/.exec(req.headers['user-agent'])[1],
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
