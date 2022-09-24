import express, { request, response } from 'express';
import routes from './routes';

const app = express();

import './database';

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('Server started on port 3333');
});
