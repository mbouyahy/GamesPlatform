const express = require('express');
const cors = require('cors');
// const crypto = require('crypto');

const app = express();

app.use(cors());

app.use(express.json());

const Port = 5000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/api/match', (req, res) => { 
  console.log(req.body);
  // const matchId = crypto.randomBytes(8).toString('hex');
  // console.log(`Generated Match ID: ${matchId}`);
});


app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});

