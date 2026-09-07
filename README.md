# Posh Website

A modern Angular website built with Angular 21.

## Getting Started

```bash
npm install
ng serve
```

Open `http://localhost:4200/` in your browser.

## Running Tests

```bash
ng test
```

## Component Architecture

The site is split into three logical layers: **layout components** (`navbar`, `footer`) that live in the root app shell and appear on every page; **reusable UI components** (`hero`, `projects`, `cta`, `button`) in `src/app/components/` that are shared or composed into pages; and **page components** (`home`, `about`, `contact`) in `src/app/pages/` that are mapped to routes in `app.routes.ts`. The root `app.html` uses `<app-navbar />`, `<router-outlet />`, and `<app-footer />` to define the global layout, while each page template imports only the section components it needs — for example, `home.html` composes `<app-hero>`, `<app-projects>`, and `<app-cta>` into a single view. This keeps every component focused on one concern and makes it easy to rearrange or swap sections per page.
