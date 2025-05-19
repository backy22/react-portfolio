# React Portfolio

A modern, responsive portfolio website built with React 18 and React Router 6. View it live at [ayatsubakino.com](https://ayatsubakino.com).

## 🚀 Technologies Used

- React 18
- React Router 7
- Vite + SSR
- Vanilla Extract
- Node.js 20+
- Typescript
- Notion API
- Amplify

## 🛠️ Setup and Installation

1. Clone the repository:

```bash
git clone https://github.com/backy22/react-portfolio.git
cd react-portfolio
```

2. Install dependencies:

```bash
yarn install
```

3. Start the development server:

```bash
yarn dev
```

The app will be running at [http://localhost:5173](http://localhost:5173)

## 📦 Build

To create a production build:

```bash
yarn build
```

```
dist/
├── server/
│   ├── entry-server.js
│   ├── favicon.png
│   ├── manifest.json
│   ├── robots.txt
│   ├── tsconfig.node.tsbuildinfo
│   ├── server.d.ts
│   ├── server.js
│   ├── api/
│   ├── vite.config.d.ts
│   └── vite.config.js
├── client/
    ├── index.html
    ├── .vite/
    ├── assets/
    ├── robots.txt
    ├── favicon.png
    └── manifest.json
```

```
.amplify-hosting/
├── deploy-manifest.json           # Deployment configuration for AWS Amplify
├── static/                       # Static assets directory
│   ├── favicon.png              # Site favicon
│   ├── manifest.json            # Web app manifest
│   └── robots.txt               # Robots configuration file
└── compute/                     # Compute resources directory
    └── default/                 # Default compute environment
        ├── .env                 # Environment variables
        ├── package.json         # Node.js dependencies and scripts
        ├── node_modules/        # Installed dependencies
        ├── client/              # Client-side build files
        └── server/              # Server-side build files
```

## 🔧 Requirements

- Node.js 20.0.0 or higher
- npm 9.0.0 or higher


## 👩‍💻 Author

Aya Tsubakino
- Website: [ayatsubakino.com](https://ayatsubakino.com)
