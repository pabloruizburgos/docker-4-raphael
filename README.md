# Microfrontends Project with Vue 3 and Module Federation

This project demonstrates a microfrontend architecture using **Vue 3**, **Vite**, and **Module Federation**. Each microfrontend is an independent application that is dynamically integrated into a **shell** container.

## Project Structure

- **shell** – Main container that loads all microfrontends (`http://localhost:3000`)
- **mf-accounts** – Displays an account list (`http://localhost:3001`)
- **mf-transactions** – Transaction form (`http://localhost:3002`)
- **mf-movements** – Displays movement history (`http://localhost:3003`)
- **mf-user-preferences** – Read-only user preferences form with edit functionality (`http://localhost:3004`)
- **ui-components** – Shared UI components library (`http://localhost:3005`)

---

## 🚀 Installation

Clone the repository and install dependencies for each subproject:

```bash
cd shell
npm install

cd ../mf-accounts
npm install

cd ../mf-transactions
npm install

cd ../mf-movements
npm install

cd ../mf-user-preferences
npm install

cd ../ui-components
npm install
```

## 🧩 Ports Overview

| Microfrontend         | Folder                | Port |
| --------------------- | --------------------- | ---- |
| Shell                 | `shell`               | 3000 |
| Accounts              | `mf-accounts`         | 3001 |
| Transactions          | `mf-transactions`     | 3002 |
| Movements             | `mf-movements`        | 3003 |
| User Preferences      | `mf-user-preferences` | 3004 |
| UI Components Library | `ui-components`       | 3005 |


## ▶️ Running the Applications

⚠️ Important: ui-components must be running before any microfrontend that uses it (e.g., mf-user-preferences).

Recommended startup order:

1. ui-components (3005):
`npx serve dist --cors -l 3005`

2. mf-accounts (3001):
`npx serve dist --cors -l 3001`

3. mf-transactions (3002):
`npx serve dist --cors -l 3002`

4. mf-movements (3003):
`npx serve dist --cors -l 3003`

5. mf-user-preferences (3004):
`npx serve dist --cors -l 3004`

6. shell (3000):
`npm run dev`


## 📦 Module Federation Setup
Each microfrontend exposes components via @originjs/vite-plugin-federation. The shell loads these components dynamically as remote modules.

Example shell configuration (vite.config.js):

js
Copy
Edit
remotes: {
  'mf-accounts': 'mf-accounts@http://localhost:3001/assets/remoteEntry.js',
  'mf-transactions': 'mf-transactions@http://localhost:3002/assets/remoteEntry.js',
  'mf-movements': 'mf-movements@http://localhost:3003/assets/remoteEntry.js',
  'mf-user-preferences': 'mf-user-preferences@http://localhost:3004/assets/remoteEntry.js',
  'ui-components': 'ui-components@http://localhost:3005/assets/remoteEntry.js'
}
## ✅ Requirements
Node.js >= 18.x

Modern browser (Chrome, Firefox, Edge)

Proper installation of @originjs/vite-plugin-federation in each app

## 🧪 Features
✅ Microfrontend integration via Module Federation

✅ Shared reusable UI components

✅ Top-level await for remote loading

✅ Persistent navigation menu in the shell

✅ View switching based on menu selection

✅ Modal window for editable user preferences

## 📁 Folder Structure
```bash
.
├── shell/
├── mf-accounts/
├── mf-transactions/
├── mf-movements/
├── mf-user-preferences/
└── ui-components/
```

## 🛠️ Development Notes
Ensure remoteEntry.js files are generated inside dist/assets after building each microfrontend.

If a remote module fails to load, check:

- Correct remote URL

- Console errors (CORS, MIME type, 404s)

- That the microfrontend server is running

## 📦 Build and Cleanup
To build each microfrontend:

```bash
npm run build
```
To clean up and reinstall:
```bash
rm -rf dist node_modules
npm install
```