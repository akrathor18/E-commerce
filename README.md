
# E-Commerce Project

## 🛒 Overview

This is a full-stack e-commerce web application built using the MERN stack (MongoDB, Express, React, Node.js). The project includes features such as product browsing, authentication, cart management, and checkout.


## 🚀Features

- User authentication (Sign-up, Login, Logout)

- Admin panel for product management

- Secure payment gateway integration

- Product filtering and search functionality

- Responsive UI with modern design

- User profiles and order history

- Wishlist and cart functionality
## 🏗️ Tech Stack

**Client:** React, TailwindCSS, Redux Toolkit

**Server:**  Node.js, Express.js

**Database:** MongoDB (MongoDB Atlas for hosting)

**Authentication:** JWT (JSON Web Token)

**Deployment:** still developing 
## Installation & Setup

#### Install project with npm

```bash
git clone https://github.com/your-username/ecommerce-project.git
cd ecommerce-project
```
#### Backend Setup
```bash 
cd backend
npm install
cp .env.example .env  # Add your environment variables
npm run dev
```
#### Frontend Setup
```bash 
cd frontend
npm install
npm start
```
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```bash 
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
STRIPE_SECRET=your_stripe_secret_key
```

