import express from 'express';
import cors from 'cors';
import { tracks } from '../src/data/tracks';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/tracks', (_req, res) => {
  const summaries = tracks.map(({ id, title, type, description, color, skills }) => ({
    id,
    title,
    type,
    description,
    color,
    skills,
  }));
  res.json(summaries);
});

app.get('/api/tracks/:id', (req, res) => {
  const track = tracks.find((t) => t.id === req.params.id);
  if (!track) {
    res.status(404).json({ error: 'Track not found' });
  } else {
    res.json(track);
  }
});

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
