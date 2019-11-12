import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';

import models from './models';
import routes from './routes';

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.context = {
    models
  };
  next();
});


app.use('/', routes.luke);


app.listen(8080, () =>
  console.log('listen!!!'),
);
