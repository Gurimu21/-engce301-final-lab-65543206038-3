const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require("body-parser");
const port = 3080;

// place holder for the data
const users = [
  {
    firstName: "สันติ",
    lastName: "คูเขียว",
    email: "santi_ku65@live.rmutl.ac.th",
    position: "System Analyst (SA)"
  },
  {
    firstName: "ฉัตริน",
    lastName: "ใสสี",
    email: "chattarin_sa65@live.rmutl.ac.th",
    position: "Developer"
  },
  {
    firstName: "ธีรเดช",
    lastName: "ประเสริฐวงศ์พนา",
    email: "teeradet_pr65@live.rmutl.ac.th",
    position: "Tester"
  }
];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));

app.get('/api/users', (req, res) => {
  console.log('api/users called!')
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  console.log('Adding user:::::', user);
  users.push(user);
  res.json("user addedd");
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});