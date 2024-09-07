![LaraJS](https://vnplus.vn/wp-content/uploads/2024/05/Slide-16_9-4-1-optimize.png)

## 🗞️ Description

- LaraJS Boilerplate is a full-stack boilerplate for Laravel and Vue 3. It's a perfect starting point for your next project.
- I'm committed to keeping it up to date with the latest versions of both backend and frontend technologies.

## ✅ Features

- Backend:
  - [x] PHP 8.3.
  - [x] Laravel 11.
  - [x] Laravel Pint.
  - [x] Pest PHP.
  - [x] Larastan.
  - [x] Laravel Debugbar.
  - [x] Laravel Ide Helper.
- Frontend
  - [x] Clean Structure.
  - [x] Pnpm.
  - [x] Vite Vue3 + Typescript.
  - [x] Husky.
  - [x] Eslint + Prettier + CommitLint.
  - [x] Auto Import.
  - [x] Vue Router.
  - [x] Pinia.
  - [x] Axios.
  - [x] Nprogress.
  - [x] Sass.

## ⚙️ Installation

- Backend:
  - Run `composer install`.
  - Run `cp .env.example .env`.
  - Run `php artisan key:generate`.
  - Run `php artisan serve`.
- Frontend:
  - Run `pnpm install`.
  - Run `pnpm dev`.
  - Note: vite.config.mts
    - If you want to run directly from the Laravel server, you can use the laravel-vite-plugin
    - If you want to run the Vite server separately, you can comment out the laravel-vite-plugin and remove index.html from the root folder.
