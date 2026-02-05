# 🛒 EduShop - Modern E-commerce Platform

EduShop is a sleek, responsive e-commerce web application built with **React 19**. It features a dynamic product catalog, detailed product views, and a professional design system.

[![React Version](https://img.shields.io/badge/react-v19.0.0-blue.svg)](https://reactjs.org/)
[![React Router](https://img.shields.io/badge/react--router--dom-v7.0.0-red.svg)](https://reactrouter.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## ✨ Features

- **Product Catalog**: Displays a list of products in a table.
- **Product Details**: Shows the ID of a product when clicked.
- **Navigation**: Basic routing between Home, About Us, and Login.
- **Data Fetching**: Loads product data from a JSON file.
- **404 Page**: Basic page for handling incorrect URLs.

---

## 🛠️ Tech Stack

- **Frontend**: [React.js](https://reactjs.org/) (Hooks, Context API)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Styling**: Vanilla CSS3 (Custom Design System)
- **Data Management**: State-driven UI with centralized data fetching.

---

## 🚀 Getting Started

Follow these steps to get the project up and running locally.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Icey067/edushop_v2.git
   cd edushop_v1
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

The app will be available at `http://localhost:3000`.

---

## 📁 Project Structure

```text
src/
├── Common/          # Shared layout components (Header, Footer)
├── Components/      # Reusable UI components (ProductTable, TableRow)
├── Pages/           # Page-level components (Home, ProductDetails, 404)
├── App.js           # Main application shell & Routing Outlet
├── index.js         # Entry point & Router configuration
└── App.css          # Global styling & Design tokens
```

---

## 📝 Roadmap

- [ ] User Authentication (Login/Signup)
- [ ] Shopping Cart functionality
- [ ] Payment Gateway Integration
- [ ] Product Search & Filtering
- [ ] Database integration with Firebase/Node.js

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

Developed with ❤️ by [Icey067](https://github.com/Icey067)
