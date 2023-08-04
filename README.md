# Fullstack Next 13 with Strapi

## Getting Started

1. Clone the repository locally:

```bash
  git clone https://github.com/gegyhamdani/fullstack-next-strapi.git
```

2. Run `setup` command to setup frontend and backend dependencies:

```bash
  npm run setup
```

3. Next, navigate to your `/backend` directory and set up your `.env` file. You can use the `.env.example` file as reference:

```bash
HOST=localhost
PORT=1337
APP_KEYS="toBeModified1,toBeModified2"
API_TOKEN_SALT=tobemodified
ADMIN_JWT_SECRET=tobemodified
JWT_SECRET=tobemodified
TRANSFER_TOKEN_SALT=tobemodified
```

4. Next, navigate to your `/frontend` directory and set up your `.env` file. You can use the `.env.example` file as reference:

```bash
NEXT_PUBLIC_BACKEND_URL=tobemodified
```

5. Start your project by running the following command:

```bash
  npm run dev
```

You will be prompted to create your first admin user.

![admin-user](https://user-images.githubusercontent.com/6153188/231865420-5f03a90f-b893-4057-9634-9632920a7d97.gif)

## Seeding The Data

There are some sample data that can be used.

In the root project, find `fullstack-cms.tar.gz` file. It will be use to seed the data.

1. Open terminal and make sure the terminal is still in `backend` folder.

2. Run the following command to seed the data:

```bash
  npm run strapi import -- -f ../fullstack-cms.tar.gz
```

This will import the data locally. Log back into admin panel to see the newly imported data.

Learn about data management [here](https://docs.strapi.io/dev-docs/data-management).

## Setting Up The Frontend

Next switch to `/frontend` directory and create `.env` file and paste in the following. 

```bash
NEXT_PUBLIC_BACKEND_URL=tobemodified

```

## Start Both Projects Concurrently

You can start both projects with one command using the `concurrently` package.

You can find the setting inside the `package.json` file inside the root folder.

```json
{
  "scripts": {
    "frontend": "npm run dev --prefix ../frontend/",
    "backend": "npm run develop --prefix ../backend/",
    "setup:frontend": "cd frontend && npm install",
    "setup:backend": "cd backend && npm install",
    "setup": "npm install && npm run setup:frontend && npm run setup:backend",
    "dev": "concurrently \"cd frontend && npm run dev\" \"cd backend && npm run develop develop\""
  },
  "dependencies": {
    "concurrently": "^8.2.0"
  }
}
```

You can start both apps by running `npm run dev`.

## Start Projects Individualy

## Backend
1. Open your terminal and direct it into backend folder
2. Start backend (strapi) by running the following command:

```bash
  npm run develop
```

### Frontend
1. Open your terminal and direct it into frontend folder
2. Start frontend by running the following command:
```bash
  npm run dev
```