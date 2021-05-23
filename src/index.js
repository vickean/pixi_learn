import express from 'express';
import Path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { getLocalIP } from './network-utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 8000;

app.use(express.static('public'));
app.use('/assets/', express.static('assets'));
app.use(
  '/pixi',
  express.static(
    Path.join(__dirname, '..', 'node_modules/pixi.js/dist/browser')
  )
);
app.use(
  '/pixi-graphics-extras',
  express.static(
    Path.join(
      __dirname,
      '..',
      'node_modules/@pixi/graphics-extras/dist/browser'
    )
  )
);

app.get('/api', (req, res) => {
  res.send('this is an api page');
});

app.listen(port, () => {
  console.log(`pixi_learn listening on port http://${getLocalIP()}:${port}`);
  console.log('HAPPY HACKING!');
});
