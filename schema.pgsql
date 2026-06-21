CREATE TABLE repositories (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  owner TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE analyses (
  id SERIAL PRIMARY KEY,
  repository_id INTEGER,
  score INTEGER,
  report JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);
