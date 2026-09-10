# 🕵️ Digital Detective

Digital Detective is a full-stack detective investigation game where players solve mysteries through evidence, interviews, timelines, deduction, and logical reasoning.

## 🎮 About

Players take the role of a detective investigating fictional cases.

Instead of simply following a predefined sequence of questions, players must:

- Examine evidence
- Interview suspects and witnesses
- Discover contradictions
- Reconstruct timelines
- Connect clues
- Form theories
- Identify the culprit
- Explain how the crime happened

## 🧩 Current Case

### Case 001 — The Midnight Necklace

A one-of-a-kind diamond necklace disappears during a private gathering at the home of luxury jewelry businessman Arjun Malhotra.

When Arjun is later found unconscious in his study, everyone at the gathering becomes a potential suspect.

The detective must determine:

- Who stole the necklace?
- Who attacked Arjun?
- Where is the necklace?
- Which statements are lies?
- Which suspicious characters are actually innocent?

## 🛠️ Tech Stack

### Backend
- Node.js
- Express
- TypeScript
- MongoDB
- Mongoose

### Frontend
- React
- TypeScript

### Development
- Git
- GitHub
- VS Code

## ✨ What Works Now

- A React investigation board with evidence, interviews, a timeline, and an accusation form
- A MongoDB-backed case model and repeatable seed for Case 001
- API endpoints for health checks, case retrieval, and deduction scoring
- A solution-safe public case endpoint: the answer is only returned after a correct accusation

## 🚀 Run the Game

1. Copy `server/.env.example` to `server/.env` and add your MongoDB connection string.
2. In `server`, run `npm run seed` once to load Case 001.
3. In `server`, run `npm run dev`.
4. In `client`, run `npm run dev` and open the local address it shows.

### API

- `GET /api/health`
- `GET /api/cases`
- `GET /api/cases/case-001`
- `POST /api/cases/case-001/accusation`

The accusation request body needs `culpritId`, `attackSuspectId`, and `necklaceLocation`.

## 📁 Project Structure

```text
Digital Detective/
├── client/                 # React + Vite investigation UI
├── server/                 # Express + MongoDB API
│   └── src/data/case001.ts # First playable mystery
├── README.md
└── .gitignore
