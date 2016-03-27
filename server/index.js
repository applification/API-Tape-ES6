import express from 'express';
const app = express();
const users = ['Dave', 'Zoe', 'Scarlett'];

app.get('/api/users', (req, res) => {
  res.json(users);
});

export default app;
