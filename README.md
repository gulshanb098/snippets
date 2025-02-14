# 🚀 Snippet Application

This is a **Next.js + TypeScript + Prisma (SQLite)** application where users can **write a topic and related code snippet** to store it. Users can also **list all created snippets, view, edit, and delete them**.

## ✨ Features
- 📝 **Create** a new snippet with a topic and related code
- 📜 **List** all stored snippets
- 🔍 **View** snippet details
- ✏️ **Edit** and update snippets
- 🗑️ **Delete** snippets

## 📌 Prerequisites
Make sure you have the following installed:
- 🟢 [Node.js](https://nodejs.org/) (LTS version recommended)
- 📦 [npm](https://www.npmjs.com/) (or yarn/pnpm)
- 🗄️ [SQLite](https://www.sqlite.org/index.html) (comes bundled with Prisma)

## ⚙️ Installation

1. **Clone the repository** 📂
   ```sh
   git clone https://github.com/gulshanb098/snippets.git
   cd snippet-app
   ```

2. **Install dependencies** 📥
   ```sh
   npm install  # or yarn install or pnpm install
   ```

3. **Setup environment variables** 🔑
   Create a `.env` file in the root directory and add the following:
   ```env
   DATABASE_URL="file:./dev.db"
   ```

4. **Run database migrations** 🏗️
   ```sh
   npx prisma migrate dev --name init
   ```

5. **Start the development server** 🚀
   ```sh
   npm run dev  # or yarn dev or pnpm dev
   ```
   The application will be available at `http://localhost:3000`

## 🎯 Usage

- Navigate to `http://localhost:3000`
- Create a new snippet by entering a topic and code
- View, edit, or delete snippets as needed

## 🚀 Deployment

To deploy the application, use a platform like **Vercel** or **Render**:

```sh
npm run build  # or yarn build or pnpm build
npm start  # or yarn start or pnpm start
```

## 📜 License
This project is open-source and available under the **MIT License**.
