# Express + EJS + Bootstrap Starter Template

A clean and modular starter template for building Node.js applications using **Express**, **EJS**, **Bootstrap 5**, **multi-language support**, **dark/light theme**, and a simple **MVC structure**.

This template is designed to be lightweight, easy to extend, and suitable as a solid foundation for small and medium-sized applications.

---

## Requirements

- **Node.js v18+**
- **npm**
- *(Optional)* MariaDB / MySQL

---

## Installation

```bash
npm install
npm start
```

Your app will be available at:

```
http://localhost:3000
```

---

## Project Structure

```
src/
│-- app.js
│
│-- controllers/
│     └── homeController.js
│
│-- routes/
│     └── homeRoutes.js
│
│-- views/
│     │-- layout/
│     │     └── main.ejs
│     │
│     │-- partials/
│     │     ├── head.ejs
│     │     ├── navbar.ejs
│     │     └── footer.ejs
│     │
│     │-- pages/
│     │     └── home.ejs
│     │
│     └── errors/
│           ├── 404.ejs
│           └── 500.ejs
│
│-- lang/
│     ├── it.js
│     ├── en.js
│     ├── de.js
│     ├── fr.js
│     └── languagesRegistry.js
│
│-- services/
│     └── LanguageService.js
│
└-- public/
       └── (static assets)
```

---

## Template Architecture

This starter follows a clean and predictable **MVC pattern**.

### **Routing**

```js
router.get("/", homeController.index);
```

### **Controller Example**

```js
const homeController = {
  index: (req, res) => res.render("pages/home")
};
```

### **Injecting Language & Title into Views**

Each view can optionally specify:

```ejs
<% pageKey = "navbar.home"; %>
```

A helper in the middleware resolves the translated page title automatically.

---

## Layout System & Partials

Uses **express-ejs-layouts** to provide:

- A main layout (`layout/main.ejs`)
- Shared partials (`head`, `navbar`, `footer`)
- Body content inserted via `<%- body %>`

---

## Dark/Light Theme Support

- Toggle available for mobile & desktop
- Icons aligned: `SVG - toggle - SVG`
- Automatically synced between devices
- Value stored in `localStorage`
- Controlled via `data-theme="dark/light"` on `<html>`

---

## Multi-Language System

Supported languages:

- 🇮🇹 Italian (default)
- 🇬🇧 English
- 🇩🇪 German
- 🇫🇷 French

### Usage in EJS:

```ejs
<%= t("navbar.home") %>
```

### Language handling:

- Query parameter `?lang=it`
- Persistent language saved in `localStorage`
- Automatic redirect when missing `lang`

### Language service resolves nested objects:

```js
t("home.title")
```

---

## Error Pages (404 & 500)

This template includes:

- `views/errors/404.ejs`
- `views/errors/500.ejs`

Automatically served by:

```js
app.use((req, res) => {
  res.status(404).render("errors/404", { url: req.originalUrl });
});
```

and

```js
app.use((err, req, res, next) => {
  res.status(500).render("errors/500", { error: err.message });
});
```

---

## Static Files

Everything under `public/` is served automatically by Express.

Use:

```
/css/style.css
/js/app.js
/img/logo.png
```

---

## Environment Variables

Supports:

- `.env.dev`
- `.env.prod`

Automatically selected based on:

```
NODE_ENV=production
```

---

## Customization Guidelines

You can easily extend this template by:

### Adding new pages
- Create a new controller
- Add a route
- Create the EJS view (using layout automatically)

### Adding new languages
- Create a new file such as `es.js`
- Register it in `languagesRegistry.js`

### Changing the default theme
- Set `dark` or `light` inside your theme activation script

### Changing the default language
- Modify `defaultLang` inside `languagesRegistry.js`

---

## Useful for

- Prototyping new web apps
- Internal dashboards
- Lightweight websites
- Multilingual projects
- Templates for educational use

---

## Author

Simone Boffelli — 2025