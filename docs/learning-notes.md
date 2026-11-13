# TeamFlow learning notes

## Task 1: project foundations

TeamFlow has two independently runnable applications:

- `frontend/` is a Next.js application that uses React and Tailwind CSS.
- `backend/` is a Node.js application that uses Express.

React component files use the `.jsx` extension in this project. Plain JavaScript modules use `.js`.

## 1. What is Node.js, and how is it different from Express.js?

**Node.js** is a JavaScript runtime. A runtime is the program that can execute JavaScript outside a web browser. TeamFlow uses Node.js to run the backend on your computer or a server.

**Express.js** is a library that runs inside Node.js. It provides convenient tools for creating a web server, defining routes, and returning responses.

```text
Node.js   = runs backend JavaScript
Express   = helps Node.js receive HTTP requests and send responses
```

Express cannot run by itself; it needs Node.js.

## 2. Why are the frontend and backend separate?

The frontend is responsible for the user interface: pages, buttons, forms, and displaying data. It runs in the browser.

The backend is responsible for server-side work: business rules, authentication, database access, and secrets. It runs in Node.js and is not sent to the browser.

Keeping them separate means they can be developed, tested, and deployed independently. Later, they will communicate through HTTP requests.

```text
Browser → Next.js frontend → HTTP request → Express backend → future database
```

## 3. What does `package.json` do?

Each application has its own `package.json`. It is the application's manifest: a file that describes the application to npm.

It contains:

- `name` — the application name.
- `dependencies` — packages needed while the application runs, such as `express` or `next`.
- `scripts` — named commands you can run with npm.
- `type: "module"` in the backend — tells Node.js that backend `.js` files use modern `import` and `export` syntax.

`package-lock.json` is related but different: it records the exact package versions installed so another computer can reproduce the same dependency tree.

## 4. What do npm scripts do?

npm scripts are shortcuts stored in `package.json`. Instead of remembering a long command, you use a meaningful name.

Current backend scripts:

```text
npm run dev    → starts Node.js in watch mode
npm run start  → starts Node.js normally
npm run check  → checks server.js for JavaScript syntax errors
```

Current frontend scripts:

```text
npm run dev    → starts the Next.js development server
npm run build  → creates an optimized production build
npm run start  → runs the production build
npm run lint   → checks code style and common mistakes
```

## 5. How does the Node.js server start?

When you run `npm run dev` inside `backend/`, npm runs this command:

```text
node --watch src/server.js
```

`node` starts the Node.js runtime. `--watch` means Node.js restarts the server when you save a backend source file.

Inside `src/server.js`:

1. `dotenv/config` reads values from `backend/.env`.
2. `express()` creates the Express application.
3. `app.use(express.json())` adds middleware that can read JSON request bodies.
4. `app.get("/", ...)` defines what happens for a `GET /` request.
5. `app.listen(port, ...)` starts listening for requests, normally on port `4000`.

## 6. How do Next.js and Express run on separate ports?

A port is a numbered entry point for a program using your computer's network connection. One computer can run many web servers at the same time as long as each one uses a different port.

The frontend normally runs on port `3000` and the backend on port `4000`, so both can run at the same time without competing for the same network address.

```text
http://localhost:3000  → Next.js frontend
http://localhost:4000  → Express backend
```

The port is part of a URL's origin. Therefore, when the frontend starts sending requests to the backend in a future task, the Express server will need CORS configuration to allow requests from `http://localhost:3000`.
