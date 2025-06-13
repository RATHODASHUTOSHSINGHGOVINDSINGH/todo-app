# TodoApp Project

This is a my TodoApp website built using React.js and Vite.

🔹 Tech Stack: React + Vite, React Router, Tailwind CSS

🔹 Hosted on: Vercel

Check it out 👉 https://todo-app-ashutosh-rathod-projects.vercel.app/

📂 Code: https://github.com/RATHODASHUTOSHSINGHGOVINDSINGH/todo-app

💡 Real-world problem:

Most users lose their tasks after a refresh or can’t easily manage them.
This causes poor UX and makes simple apps frustrating to use.

✅ My solution:

Add ✍️ / Edit ✏️ / Delete ❌ tasks

Mark tasks done with checkboxes ✔️

Save data in LocalStorage so nothing gets lost

Clean UI with Tailwind CSS

✨ Features:

✅ Add ✍️ / Edit ✏️ / Delete ❌ tasks

✅ Checkbox to mark completion ✔️

✅ Data saved in LocalStorage (so no lost tasks!)

✅ Clean UI with Tailwind CSS

✅ Deployed on Vercel

This project helped me improve my understanding of:

🔄 State & effect hooks (useState, useEffect)

🧠 Component logic & clean code

🧩 Real-world UI/UX problem-solving

## Installation

Follow these steps to set up the project locally.

### 1. Install Vite with React

```sh
npm create vite@latest Todolist --template react
cd Todolist
npm install
npm run dev
```

### 2. Install Tailwind CSS v4

```sh
npm install tailwindcss @tailwindcss/vite
```

Then, configure `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Add Tailwind to `src/index.css`:

```css
@import "tailwindcss";
```

### 3. Configure the Vite Plugin

Add the `@tailwindcss/vite` plugin to your Vite configuration.

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
});
```

### 4. Install React Router v7

To add React Router v7 to your project, run:

```sh
npm install react-router
```

Then, wrap your application with the `<BrowserRouter>` component. Update your `main.jsx` or `index.jsx` file as follows:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

For more details, check the [official React Router documentation](https://reactrouter.com/start/library/installation).

### 5. Initialize Git Repository

```sh
git init
git remote add origin <your-repo-url>
git add .
git commit -m "Initial commit"
git push  origin main
```

### 6. Build and Deploy on Vercel (Using GUI)

Before deploying, build the project for production:

```sh
npm run build
```

Then, follow these steps to deploy:

1. Go to [Vercel](https://vercel.com/).
2. Click on **New Project** and import your GitHub repository.
3. Select the repository and configure the settings.
4. Click **Deploy** and wait for the deployment to finish.
5. Once deployed, you will get a live URL for your TodoApp.

### 7. Add `vercel.json`

Create a `vercel.json` file in the root directory with the following content:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## Run Locally

To start the development server:

```sh
npm run dev
```
