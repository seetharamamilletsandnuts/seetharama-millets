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

# Seetharama Millets and Nuts 🌾🥜

E-commerce web app for selling millets, dry fruits, and nuts.

## 🚀 Project Structure

seetharama-millets/
│── client/ # React frontend (Vercel deployment)
│── server/ # Node.js + Express backend (Render deployment)

seetharama-millets/
│── client/             # React frontend
│── server/             # Node.js + Express backend
│── .gitignore
│── README.md
│── package.json
│── vercel.json         # (for frontend if deployed via Vercel root)

client/
├── public/
│   └── favicon.ico
├── src/
│   ├── App.js
│   ├── index.js
│   ├── api.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Products.js
│   │   ├── Cart.js
│   │   ├── Checkout.js
│   │   ├── Login.js
│   │   └── Admin.js
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   └── ProductCard.js
├── package.json

server/
├── index.js
├── package.json
├── .env.example
├── models/
│   ├── Product.js
│   ├── Order.js
│   └── User.js
├── routes/
│   ├── auth.js
│   ├── products.js
│   ├── orders.js
│   └── admin.js


## 🛠 Tech Stack
- Frontend: React (client/)
- Backend: Node.js + Express + MongoDB (server/)
- Database: MongoDB Atlas
- Deployment: 
  - Render (backend)
  - Vercel (frontend)
- Email: Nodemailer (SMTP with Gmail)

## ⚙️ Setup Instructions

### 1. Clone Repo
```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/seetharama-millets.git
cd seetharama-millets
2. Setup Backend
cd server
npm install


Create .env in server/ with:

MONGO_URI=your_mongodb_uri
SMTP_USER=your_email
SMTP_PASS=your_app_password


Run locally:

npm run dev

3. Setup Frontend
cd ../client
npm install
npm start

4. Deploy

Backend → Render (server/)

Frontend → Vercel (client/)


---