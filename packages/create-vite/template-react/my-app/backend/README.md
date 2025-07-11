# Backend for My App

This is a simple Express.js backend that stores data locally in a JSON file.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```

The server will run on [http://localhost:3001](http://localhost:3001).

## API Endpoints

- `GET /api/count` — Get the current counter value
- `POST /api/count` — Update the counter value (JSON body: `{ "count": number }`) 