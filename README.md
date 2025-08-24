# Seetharama Millets and Nuts - E-commerce Website

This is the official e-commerce website for **Seetharama Millets and Nuts**.

## Features
- User authentication (JWT-based)
- Product catalog (millets, dry fruits, nuts)
- Shopping cart & checkout (Cash on Delivery + Razorpay support)
- Order confirmation emails (to customer & admin)
- Admin panel for managing products and viewing orders
- Daily admin order summary email with CSV attachment

## Tech Stack
- Frontend: React (Vite) + TailwindCSS
- Backend: Node.js + Express
- Database: MongoDB Atlas
- Deployment: Vercel (frontend) + Render (backend)
- Payments: Razorpay (optional)
- Emails: Gmail SMTP (App Password)

## Setup Instructions

### 1. Clone repo
```bash
git clone https://github.com/YOUR_USERNAME/seetharama-millets.git
cd seetharama-millets
```

### 2. Backend Setup
```bash
cd server
cp .env.example .env   # fill values
npm install
npm start
```

### 3. Frontend Setup
```bash
cd client
cp .env.example .env   # fill values
npm install
npm run dev
```

### 4. Deployment
- Deploy **server/** to Render
- Deploy **client/** to Vercel
- Update `.env` files accordingly

## License
MIT License
