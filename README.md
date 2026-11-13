# TeamFlow

TeamFlow is a team task-management project built to learn full-stack development one small task at a time.

## Initial structure

```text
frontend/  Next.js, React, and Tailwind CSS
backend/   Node.js and Express
```

The applications are independent processes. The frontend runs on port `3000`; the backend runs on port `4000`.

## Run locally

Install dependencies in both applications:

```bash
cd frontend
npm install
```

```bash
cd backend
npm install
```

Copy the backend environment template:

```bash
cp backend/.env.example backend/.env
```

Start each application in its own terminal:

```bash
cd frontend
npm run dev
```

```bash
cd backend
npm run dev
```

Open `http://localhost:3000` for the frontend, or visit `http://localhost:4000` to confirm that the Express server is running.
