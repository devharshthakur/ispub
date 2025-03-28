<p align="center">
  <a href="https://ispub.fun">
    <img src="/public/logo.jpeg" alt="NPM Package Checker Logo" width="120" height="120">
  </a>
</p>

<h1 align="center">NPM Package Checker</h1>

<p align="center">
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js"></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"></a>
  <a href="https://www.npmjs.com/"><img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm"></a>
</p>

<p align="center">
  A sleek, lightning-fast utility to check if an npm package name is available.
  <br>
  <a href="https://ispub.fun"><strong>View Live Demo »</strong></a>
</p>

---

## 🚀 Overview

Finding the perfect, available name for your next Node.js package can be challenging. NPM Package Checker provides an elegant, intuitive interface to instantly verify if a package name is already taken on the npm registry. No more guessing or manual searching!

## ✨ Features

- **⚡ Instant Availability Checks** - Real-time verification against the npm registry
- **🎨 Modern, Minimalist UI** - Clean design focused solely on the task at hand
- **⌨️ Keyboard Optimized** - Press `Enter` to check availability instantly
- **📱 Fully Responsive** - Perfect experience on desktop, tablet, and mobile
- **✅ Clear Visual Feedback** - Instantly understand results with intuitive visual cues
- **🔍 Validation** - Ensures package names follow npm naming conventions

## 🖥️ Screenshots

<p align="center">
  <img src="/public/screenshot.png" alt="NPM Package Checker Screenshot">
</p>

## 🛠️ Tech Stack

- **Frontend Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Icons:** [Lucide React](https://lucide.dev/) / [React Icons](https://react-icons.github.io/react-icons)
- **HTTP Client:** [Axios](https://axios-http.com/)
- **Package Manager:** [pnpm](https://pnpm.io/)

## 🚀 Getting Started

### Prerequisites

- **Node.js:** v18.x or higher ([Download](https://nodejs.org/))
- **pnpm:** v8.x or higher
  ```bash
  npm install -g pnpm
  ```

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/devharshthakur/ispub.git
   cd ispub
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start the development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 💻 How to Use

1. **Enter a Package Name**

   - Type your desired npm package name in the input field
   - The name will be validated against npm naming rules as you type

2. **Check Availability**

   - Click the "Check Availability" button or press `Enter`

3. **View Results**
   - **Green Indicator**: Congratulations! The package name is available
   - **Red Indicator**: The name is already taken
   - **Additional Info**: For taken packages, view basic details about the existing package

## 🌐 API

The application uses the official npm registry API to check package availability:

```
https://registry.npmjs.org/{package-name}
```

## 🚢 Deployment

The easiest way to deploy your own instance is with [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdevharshthakur%2Fispub)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---
