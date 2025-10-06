# Website (but in Laravel)

A re-write of my [personal website](https://github.com/NickTheWilder/website) but in Laravel.
Another saga of rewriting a website in a new framework to get a feel for what's interesting to me.

## Requirements

- PHP 8.2+
- Composer
- Node.js 18+
- bun

## Installation

1. Install dependencies:
```bash
composer install && bun install
```

2. Copy the environment file and generate application key:
```bash
cp .env.example .env
php artisan key:generate
```

3. Configure your database in `.env` and run migrations:
```bash
php artisan migrate
```
Current runs a local SQLite database. Migrations will provide enough data to get started.

4. Run the development server:
```bash
composer run dev
```
The application will be available at http://localhost:8000.

## Lint & Format

Prettier (auto-fix)
```bash
bun format
```
ESLint (auto-fix):
```bash
bun lint
```

<p align="center">
  <img height=500 width=500 src="https://media1.tenor.com/m/F7Cd9OI_XRQAAAAC/kid-meme.gif">
</p>
