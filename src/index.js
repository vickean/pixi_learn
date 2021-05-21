import express from 'express';
import { getLocalIP } from './network-utils.js';

const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`pixi_learn listening on port http://${getLocalIP()}:${port}`);
  console.log('HAPPY HACKING!');
});
