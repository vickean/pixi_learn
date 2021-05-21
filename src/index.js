import express from 'express';
import { getLocalIP } from './network-utils.js';

const app = express();
const port = 8000;

app.use(express.static('public'));

app.get('/api', (req, res) => {
  res.send('this is an api page');
});

app.listen(port, () => {
  console.log(`pixi_learn listening on port http://${getLocalIP()}:${port}`);
  console.log('HAPPY HACKING!');
});
