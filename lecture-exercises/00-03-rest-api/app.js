const express = require('express');

const PORT = 3000;
const DATA = [
  { id: 1, name: 'Apfel', color: 'gelb,rot' },
  { id: 2, name: 'Birne', color: 'gelb,grün' },
  { id: 3, name: 'Banane', color: 'gelb' },
];

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/fruits', (req, res) => {
  res.send(DATA);
});

app.get('/fruits/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  const item = DATA.find((o) => o.id === id);
  res.send(item);
});

app.post('/fruits', (req, res) => {
  const { name, color } = req.body;
  if (DATA.some((o) => o.name === name)) {
    res.status(400);
    res.send('Duplicate name');
  } else {
    const id = Math.max(...DATA.map((o) => o.id)) + 1;
    const fruit = { id, name, color };
    DATA.push(fruit);
    res.send(fruit);
  }
});

// TODO: put

// TODO: patch

app.delete('/fruits/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = DATA.findIndex((o) => o.id === id);

  if (index === -1) {
    res.status(400).send('couldnt find item');
    return;
  }

  DATA.splice(index, 1);
  res.status(200).send('removed item');
});

app.listen(PORT);
console.log(`Server listening on port ${PORT}`);
