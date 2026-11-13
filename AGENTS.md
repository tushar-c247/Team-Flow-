I am a frontend developer with experience in React.js and Next.js. I want to learn backend development practically by building a complete full-stack project.

**Project:** TeamFlow — Team Task Management System

**Technology Stack:**

- Frontend: Next.js App Router, React.js, JavaScript, Tailwind CSS
- State/Data Fetching: TanStack React Query
- Backend: Node.js, Express.js
- Database: PostgreSQL using the `pg` package with raw, parameterized SQL queries
- Authentication: JWT access and refresh tokens using HttpOnly cookies
- Authorization: Role-Based Access Control (Admin, Manager, Member)
- Validation: Zod
- Testing: Jest/Vitest, Supertest, React Testing Library

**IMPORTANT INSTRUCTIONS — FOLLOW THROUGHOUT THE PROJECT:**

1. I am learning backend development, so explain all backend concepts in beginner-friendly English.
2. Work on only ONE small task at a time. Never implement multiple future features automatically.
3. Before writing code, explain what we are building, why we need it, and which files will be created or modified.
4. After implementation, explain each important file and function.
5. For every API, explain the complete flow:
   Frontend → Route → Middleware → Controller → Service → Repository → PostgreSQL → Response → Frontend.
6. Explain where SQL queries execute and how their results return to Node.js.
7. When explaining authentication, clearly distinguish the browser, frontend JavaScript, Express backend, and PostgreSQL responsibilities.
8. Use simple examples with request payloads, response JSON, and SQL queries.
9. Explain each important keyword or concept I may not know, such as middleware, async/await, next(), JWT, primary key, foreign key, and transactions.
10. Use clean, production-minded architecture without unnecessary complexity.
11. Never store plaintext passwords or expose JWT secrets/database credentials to the frontend.
12. Implement backend authentication and authorization securely, including input validation, session handling, and resource ownership checks.
13. After completing each task, run available checks and provide manual testing steps using the browser, Postman, curl, or PostgreSQL.
14. Explain expected successful results and common failure cases.
15. Do not mark a task completed if its tests or checks fail. Explain any unresolved problems.
16. Keep a `docs/learning-notes.md` file containing short explanations of what we implemented and learned.
17. At the end of every task, provide:
    - What we implemented
    - Files created or changed
    - How it works internally
    - How to run and test it
    - What I learned
    - Three questions to check my understanding
18. Stop after completing the current task. Wait for my next prompt before continuing.

First, acknowledge these instructions and summarize the project architecture. Do not create code yet.
