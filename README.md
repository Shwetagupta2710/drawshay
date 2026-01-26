# DrawShay ✨  
**A collaborative document editor + whiteboard SaaS built with Next.js and Convex**

DrawShay is a full-stack SaaS application that allows users to **create teams, manage files, write documents, and draw on a whiteboard — all on the same screen**.  
It is designed to demonstrate real-world product engineering, database design, and scalable frontend architecture.

This project was built to deeply understand **Convex database**, SaaS patterns, and production-ready app deployment.

---

## 🚀 Live Demo
👉 https://drawshay.vercel.app/

---

## 🎯 Why DrawShay?
Most tutorials stop at CRUD. DrawShay goes further:

- Real-time document editing
- Canvas/whiteboard integration
- Team & file management
- Free vs Paid plan control
- Production deployment with Convex + Vercel

This is not a demo app — it’s a **real SaaS-style product**.

---

## ✨ Key Features

### 🧑‍🤝‍🧑 Team & File Management
- Create multiple teams
- Create, organize, and manage files inside teams
- Track total files with a progress bar

### 📝 Document + 🎨 Whiteboard (Same Screen)
- Write rich text documents using **Editor.js**
- Draw freely on a **whiteboard (Excalidraw)**
- Save and retrieve both document & canvas data
- Seamless switching between writing and drawing

### 🧠 Convex Database (Core Learning)
- Convex queries & mutations
- Alternate query strategies
- Separate dev and production environments
- Real-time, serverless backend

### 🔐 Authentication & Security
- Authentication using **Kinde**
- Protected routes
- Secure access to teams and files

### 💳 SaaS Concepts
- Free plan vs Paid plan logic
- Upgrade UI (Pricing section)
- Feature gating based on plan

### 📦 Scale & Polish
- 50+ document features
- 30+ whiteboard tools
- Clean UI with Radix + Tailwind
- Production-ready deployment

---

## 🧱 Tech Stack

### Frontend
- **Next.js 14**
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Radix UI**
- **Editor.js**
- **Excalidraw**

### Backend
- **Convex (Database + Backend)**
- Queries & Mutations
- Real-time data handling

### Auth
- **Kinde Auth**

### Deployment
- **Vercel**
- **Convex Cloud**

---

## 🛠️ Installation & Setup

```bash
git clone https://github.com/your-username/drawshay.git
cd drawshay
npm install
npm run dev
