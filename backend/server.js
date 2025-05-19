const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("Welcome to this page")
  console.log("Working")
})

app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  console.log(`Received: ${name}, ${email}`);
  res.json({ message: `Received: ${name}, ${email}` });
});


app.listen(5000, () => 
    console.log('Server running on port 5000'));
