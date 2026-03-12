# Pathan Ismail Khan — Portfolio Website

A fully functional, professional React portfolio website for **Pathan Ismail Khan** — Backend Developer.

## 🚀 Live Demo

Deploy to GitHub Pages, Vercel, or Netlify for a live demo.

## 🛠️ Tech Stack

- **React 18** (Create React App)
- **Custom CSS** (no external UI libraries)
- **Google Fonts** (Inter + Poppins)
- **Light mode** design

## 📦 Getting Started

### Prerequisites

- Node.js (v16 or above)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/ismail1945/Ismailkhan.git
cd Ismailkhan

# Install dependencies
npm install

# Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

The production build will be in the `build/` folder.

## 📁 Project Structure

```
├── public/
│   ├── index.html
│   └── resume.pdf        # Replace with your actual resume
├── src/
│   ├── components/
│   │   ├── Navbar.jsx    # Responsive navbar with hamburger menu
│   │   ├── Navbar.css
│   │   ├── Hero.jsx      # Landing section with CTA buttons
│   │   ├── Hero.css
│   │   ├── About.jsx     # About me + contact info + stats
│   │   ├── About.css
│   │   ├── Skills.jsx    # Tech stack + skill bars
│   │   ├── Skills.css
│   │   ├── Experience.jsx  # Tap Academy training
│   │   ├── Experience.css
│   │   ├── Projects.jsx  # E-Commerce & Task Management apps
│   │   ├── Projects.css
│   │   ├── Education.jsx # B.Tech, Intermediate, 10th timeline
│   │   ├── Education.css
│   │   ├── Certifications.jsx  # 5 certifications
│   │   ├── Certifications.css
│   │   ├── Contact.jsx   # Contact form + links
│   │   ├── Contact.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── .gitignore
└── README.md
```

## 🎨 Sections

1. **Hero** — Name, title, tagline, CTA buttons, social links
2. **About** — Professional summary, objective, contact info, stats
3. **Skills** — Tech stack badges, skill progress bars, soft skills
4. **Experience** — Tap Academy Full Stack Java Training
5. **Projects** — E-Commerce Web App & Task Management App
6. **Education** — B.Tech CSE (MITS), Intermediate, High School
7. **Certifications** — Oracle Cloud, AWS, CCNA, Java & AWS Internships
8. **Contact** — Contact form + email/phone/GitHub links
9. **Footer** — Navigation links, social links, credits

## 📄 Resume

Replace `public/resume.pdf` with your actual resume PDF file.

## 🌐 Deployment

### GitHub Pages

```bash
npm install --save-dev gh-pages
# Add to package.json: "homepage": "https://ismail1945.github.io/Ismailkhan"
# Add scripts: "predeploy": "npm run build", "deploy": "gh-pages -d build"
npm run deploy
```

### Vercel / Netlify

Simply connect your GitHub repository and deploy with one click.

---

© 2025 Pathan Ismail Khan. Built with React ❤️