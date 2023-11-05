import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Test');
});

app.listen(port, () => {
  console.log(`Server started ${port}`);
});
