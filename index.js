import express from 'express';
const app = express();

const PORT = process.env.PORT || 3000;

const whenIncomingRequest = (request, response) => {
  console.log('request came in');
  response.send('yay');
};

app.get('/', whenIncomingRequest);

app.listen(PORT);
