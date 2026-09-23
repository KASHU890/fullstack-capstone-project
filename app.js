const express = require('express');
const cors = require('cors');
const app = express();
const searchRoutes = require('./searchRoutes');
const giftRoutes = require('./giftRoutes');
const authRoutes = require('./authRoutes');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    name: 'Fullstack Capstone Project API',
    message: 'Gift search & authentication API. Ready!',
    endpoints: [
      'GET /api/gifts',
      'GET /api/gifts/:id',
      'GET /api/search?category=Electronics',
      'POST /api/login',
    ],
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/', searchRoutes);
app.use('/', giftRoutes);
app.use('/', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});