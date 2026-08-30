# GitHub Pages Repository Setup & Deployment Guide

This guide details how to publish your Executive Technology Leadership Infographic website on GitHub Pages.

## Directory Layout
```text
portfolio/
├── _config.yml               # Jekyll configuration for GitHub Pages
├── index.md                  # Main portfolio infographic page
├── assets/
│   └── css/
│       └── style.css         # Dark slate/navy executive stylesheet
└── README.md                 # Project documentation
```

## Quick Setup Steps

### Step 1: Create a GitHub Repository
1. Log into your GitHub account (`krishj9`).
2. Click **New Repository**.
3. Name it `portfolio` (or `krishj9.github.io` for your root site).
4. Set visibility to **Public**.

### Step 2: Push Your Files
Open your terminal in the folder containing these files and run:
```bash
git init
git add .
git commit -m "Initial executive portfolio layout"
git branch -M main
git remote add origin https://github.com/krishj9/portfolio.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. On GitHub, go to **Settings** -> **Pages**.
2. Under **Build and deployment**:
   - **Source:** Select `Deploy from a branch`.
   - **Branch:** Select `main` / `/ (root)`.
3. Click **Save**.
4. Your site will be live at `https://krishj9.github.io/portfolio/` in 1-2 minutes.
