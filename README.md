# cihat.app

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**A modern, responsive personal portfolio website**

[Live Demo](https://cihat.app) · [Report Bug](https://github.com/cihatapp/personal_website/issues) · [Request Feature](https://github.com/cihatapp/personal_website/issues)

</div>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🌓 **Dark/Light Theme** | System-aware theme with manual toggle, persisted in localStorage |
| 🌍 **Bilingual Support** | Full Turkish (TR) and English (EN) language switching |
| 📱 **Fully Responsive** | Optimized for all devices from mobile to 4K displays |
| ⚡ **Performance First** | No frameworks, pure vanilla JS - blazing fast load times |
| 🎨 **Smooth Animations** | Intersection Observer-based reveal animations |
| ✨ **Interactive Effects** | Particle background, cursor glow, typing effect |
| 📊 **Animated Stats** | Counter animations triggered on scroll |
| 🧭 **Smooth Navigation** | Sticky nav with scroll effects and mobile hamburger menu |

---

## 🛠️ Tech Stack

This project intentionally uses **no frameworks or build tools** - just pure web technologies:

```
├── HTML5          → Semantic markup with accessibility in mind
├── CSS3           → Custom properties, Grid, Flexbox, animations
├── JavaScript     → ES6+ vanilla JS, Intersection Observer API
└── GitHub Actions → Automated SSH/rsync deployment
```

### Why No Frameworks?

- **Zero dependencies** = No security vulnerabilities to patch
- **Instant load times** = No JavaScript bundle to parse
- **Full control** = Every line of code is intentional
- **Future-proof** = Web standards don't break

---

## 📁 Project Structure

```
cihat.app/
├── index.html          # Main HTML - semantic structure
├── style.css           # All styles - CSS custom properties for theming
├── main.js             # Interactions - animations, theme/lang switching
├── robots.txt          # SEO - search engine directives
├── assets/             # Static assets (images, fonts)
├── .github/
│   └── workflows/
│       └── deploy.yml  # CI/CD - auto-deploy on push to main
└── .rsyncignore        # Deployment exclusions
```

---

## 🚀 Getting Started

### Prerequisites

Just a web browser and a code editor. No npm, no build steps.

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/cihatapp/personal_website.git
   cd personal_website
   ```

2. **Open in browser**
   ```bash
   # Using Python
   python -m http.server 8000

   # Using PHP
   php -S localhost:8000

   # Using Node (npx)
   npx serve

   # Or just open index.html directly in your browser
   ```

3. **Start editing**
   - Modify `index.html` for content
   - Adjust `style.css` for styling
   - Update `main.js` for behavior

---

## 🌐 Deployment

This project uses **GitHub Actions** with **rsync over SSH** for deployment.

### Automatic Deployment

Every push to `main` triggers automatic deployment:

```yaml
on:
  push:
    branches: [main]
```

### Required Secrets

Configure these in **Settings → Secrets → Actions**:

| Secret | Description |
|--------|-------------|
| `SSH_HOST` | Server IP or hostname |
| `SSH_PRIVATE_KEY` | SSH private key (full content) |

### Manual Deployment

Use the **workflow_dispatch** trigger in GitHub Actions to deploy manually.

---

## 🎨 Customization

### Theme Colors

Edit CSS custom properties in `style.css`:

```css
:root {
    --accent: #6366f1;        /* Primary accent color */
    --accent-hover: #818cf8;  /* Hover state */
    --bg: #0a0a0f;            /* Background */
    --text: #ffffff;          /* Text color */
}
```

### Content

All content is in `index.html` with bilingual structure:

```html
<span class="tr">Türkçe içerik</span>
<span class="en">English content</span>
```

### Typing Effect Phrases

Modify the phrases array in `main.js`:

```javascript
const phrases = {
    tr: ['Türkçe cümle 1', 'Türkçe cümle 2'],
    en: ['English phrase 1', 'English phrase 2']
};
```

---

## 📈 Performance

Lighthouse scores (typical):

| Metric | Score |
|--------|-------|
| Performance | 98-100 |
| Accessibility | 95-100 |
| Best Practices | 100 |
| SEO | 100 |

### Optimizations Applied

- Minimal CSS/JS with no external dependencies
- System fonts with Google Fonts async loading
- CSS containment for paint optimization
- Intersection Observer for lazy animations
- Hardware-accelerated CSS transforms

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Cihat Karaboga**

- Website: [cihat.app](https://cihat.app)
- GitHub: [@cihatapp](https://github.com/cihatapp)
- LinkedIn: [chtkb](https://linkedin.com/in/chtkb)
- X/Twitter: [@cihatapp](https://x.com/cihatapp)
- Email: dev@cihat.app

---

<div align="center">

**Built with ❤️ using pure HTML, CSS & JavaScript**

</div>
