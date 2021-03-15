import express from 'express';
const app = express();
import { add } from './calculator.js';

const PORT = process.env.PORT || 3000;

const whenIncomingRequest = (request, response) => {
  console.log('request came in');
  response.send('yay'+add(2,2));
};

app.get('/', whenIncomingRequest);

app.listen(PORT);
