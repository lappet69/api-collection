## Getting Started

First clone the repository
```bash
git clone https://github.com/lappet69/api-collection.git
```

Installing dependencies
```bash
npm install
```

Copy .env.example to .env

DB Configuration
```bash
npx sequelize-cli db:create
npx sequelize-cli db:migrate
```

Run development server

```bash
npm run dev
```