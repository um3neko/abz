import express from 'express';
import { log } from './utils/logger';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Test');
});

app.listen(port, () => {
  log.info(`server started ${port}`);
});
