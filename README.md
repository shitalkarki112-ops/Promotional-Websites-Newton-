# New Employee Warehouse Induction

A lightweight web app that delivers an interactive 360° induction experience for new warehouse staff. The project provides a consistent, safety-focused onboarding flow that helps reduce risks and speeds up training.

## Key Features
- Interactive 360° environment for immersive training
- Clear, safety-focused scenarios and guidance
- Simple contact/proposal form backed by a small Express API
- Easy to run locally for demos or testing

## Tech Stack
- Frontend: HTML, CSS, JavaScript (static files: index.html, index.css)
- Backend: Node.js + Express (`server.js`)
- Database helper: `db.js` (uses a local SQL database)

## Quick Start
1. Install dependencies:

	npm install

2. Start the server:

	node server.js

3. Open the app in your browser:

	http://localhost:3000

The server exposes a POST endpoint at `/api/contact` used by the contact/proposal form.

## Development Notes
- The server listens on port 3000 (see `server.js`).
- Database queries are handled in `db.js` — review it before running in production.

## License & Contact
This repository is a demo/starter project. For questions or improvements, open an issue or contact the maintainer.
