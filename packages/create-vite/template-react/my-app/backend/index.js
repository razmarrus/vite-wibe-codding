import express from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors';

const app = express();
const PORT = 3001;
const DATA_FILE = path.resolve('./data.json');

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// Helper to read data
function readData() {
  if (!fs.existsSync(DATA_FILE)) {
    return { count: 0 };
  }
  const raw = fs.readFileSync(DATA_FILE);
  return JSON.parse(raw);
}

// Helper to write data
function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// Get counter
app.get('/api/count', (req, res) => {
  const data = readData();
  res.json({ count: data.count });
});

// Update counter
app.post('/api/count', (req, res) => {
  const { count } = req.body;
  if (typeof count !== 'number') {
    return res.status(400).json({ error: 'Count must be a number' });
  }
  writeData({ count });
  res.json({ count });
});

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
}); 