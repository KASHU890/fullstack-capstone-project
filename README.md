# Fullstack Capstone Project — Gift Search & Auth API

Express + MongoDB API for browsing, searching, and authenticating in a gift store.

## Run locally

```bash
npm install
export MONGO_URL="mongodb+srv://<user>:<pass>@cluster.mongodb.net/capstoneDB"
npm start
```

## Endpoints

- `GET /` — API info
- `GET /health` — health check
- `GET /api/gifts` — list all gifts
- `GET /api/gifts/:id` — one gift by id
- `GET /api/search?category=Electronics` — filter gifts by category
- `POST /api/login` — login (`{ email, password }`)

## Deploy to Render (free)

1. Create a free MongoDB cluster at https://www.mongodb.com/atlas and copy the connection string.
2. Go to https://render.com → New → **Blueprint** → connect this repo.
3. Render reads `render.yaml` automatically. When asked, set the `MONGO_URL` env var to your connection string, then **Apply**.
4. You'll get a URL like `https://fullstack-capstone-project.onrender.com`.

## Env vars

| Name       | Required | Description                     |
| ---------- | -------- | ------------------------------- |
| `MONGO_URL`| yes      | MongoDB connection string       |