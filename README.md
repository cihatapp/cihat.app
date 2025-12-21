# cihat.app

A modern, responsive personal portfolio website built with pure HTML, CSS, and JavaScript.

**[Live Demo](https://cihat.app)**

---

## Features

- **Dark/Light Theme** - System-aware with manual toggle, persisted in localStorage
- **Bilingual Support** - Full Turkish and English language switching
- **Fully Responsive** - Optimized for all devices from mobile to 4K
- **No Frameworks** - Pure vanilla JS for blazing fast load times
- **Smooth Animations** - Intersection Observer-based reveal effects
- **Interactive Elements** - Particle background, cursor glow, typing effect

---

## Tech Stack

No frameworks or build tools - just pure web technologies:

- HTML5 - Semantic markup
- CSS3 - Custom properties, Grid, Flexbox
- JavaScript - ES6+, Intersection Observer API
- GitHub Actions - Automated SSH deployment

---

## Project Structure

```
cihat.app/
├── index.html          # Main HTML structure
├── style.css           # All styles with CSS custom properties
├── main.js             # Animations and interactions
├── robots.txt          # SEO directives
├── assets/             # Static assets
└── .github/workflows/  # CI/CD deployment
```

---

## Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/cihatapp/personal_website.git
   ```

2. Open `index.html` in your browser, or serve locally:
   ```bash
   python -m http.server 8000
   ```

---

## Deployment

Automatic deployment via GitHub Actions on push to `main`.

Required secrets:
- `SSH_HOST` - Server hostname
- `SSH_PRIVATE_KEY` - SSH private key

---

## Customization

### Theme Colors

```css
:root {
    --accent: #6366f1;
    --bg: #0a0a0f;
    --text: #ffffff;
}
```

### Bilingual Content

```html
<span class="tr">Türkçe</span>
<span class="en">English</span>
```

---

## Author

**Cihat Karaboga**

- Website: [cihat.app](https://cihat.app)
- GitHub: [@cihatapp](https://github.com/cihatapp)
- LinkedIn: [chtkb](https://linkedin.com/in/chtkb)
- Email: dev@cihat.app

---

MIT License
