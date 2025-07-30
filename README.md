# 🛍️ Full-Stack E-commerce Website

This is a full-featured **E-commerce web application** built using **React**, **Node.js**, **Express**, and **MongoDB**. It supports user authentication, admin-only product management, and a responsive product catalog.

## 📌 Live Demo

*(Add your deployed link here if available)*

---

## 📷 Preview

> Add the screenshots below in a `/screenshots` folder or directly paste image URLs.

![Home Page](screenshots/homepage.png)
![Admin Panel](screenshots/admin-dashboard.png)
![Login](screenshots/login.png)

---

## ✨ Features

### 👨‍💼 Admin Panel

* Only accessible via `admin@gmail.com` and password `123456`
* Add, edit, delete products
* Upload product images
* Secure access with route protection

### 🧑 User Features

* Register/Login
* Browse all products
* View product details
* Secure user authentication
* Protected routes for admin access

### 📂 Tech Stack

| Frontend     | Backend    | Database | Authentication | Styling    |
| ------------ | ---------- | -------- | -------------- | ---------- |
| React        | Node.js    | MongoDB  | JWT            | Bootstrap  |
| React Router | Express.js | Mongoose | bcrypt         | Custom CSS |

---

## 🗂️ Project Structure

```
/client       --> React Frontend
/server       --> Node + Express Backend
```

---

## ⚙️ Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Siddarth305/Full-Stack-Ecommerce-website-using-React-Node.JS-MongoDB.git
cd Full-Stack-Ecommerce-website-using-React-Node.JS-MongoDB
```

### 2️⃣ Backend Setup (`/server`)

```bash
cd server
npm install
```

> Create a `.env` file with:

```env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

```bash
npm run dev
```

### 3️⃣ Frontend Setup (`/client`)

```bash
cd ../client
npm install
npm start
```

> Runs on `http://localhost:3000`

---

## 🔐 Admin Login

```
Email: admin@gmail.com
Password: 123456
```

> Only the admin can access product creation and editing routes.

---

## 🔧 Available Scripts

In `/client`:

* `npm start` - runs the React frontend
* `npm run build` - builds the app for production

In `/server`:

* `npm run dev` - runs server in dev mode using nodemon

---

## 📦 API Endpoints

| Method | Endpoint           | Description               |
| ------ | ------------------ | ------------------------- |
| POST   | /api/auth/login    | User/Admin Login          |
| POST   | /api/auth/register | Register new user         |
| GET    | /api/products      | Fetch all products        |
| POST   | /api/products      | Add product (Admin only)  |
| PUT    | /api/products/\:id | Edit product (Admin only) |
| DELETE | /api/products/\:id | Delete product (Admin)    |

---

## 💡 Future Enhancements

* Cart and Checkout functionality
* Order history
* Search & Filter
* Payment gateway integration (e.g., Razorpay/Stripe)
* Wishlist support

---

## 🙌 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## ScreenShots
<img width="1365" height="631" alt="image" src="https://github.com/user-attachments/assets/e842feb0-44ef-43f3-9f18-278bd870524d" />


<img width="1365" height="679" alt="image" src="https://github.com/user-attachments/assets/dbdc6569-4b1c-4741-8d34-d81870c23cac" />


<img width="1364" height="675" alt="image" src="https://github.com/user-attachments/assets/a795e4a9-b007-4b84-b110-c89ccfb6934c" />


<img width="1365" height="680" alt="image" src="https://github.com/user-attachments/assets/a3c71571-a16b-4c87-b4de-88baff6527e1" />



