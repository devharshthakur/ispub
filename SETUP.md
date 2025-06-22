# 🛠️ Setup and Usage

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
