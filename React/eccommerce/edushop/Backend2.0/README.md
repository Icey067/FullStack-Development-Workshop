# Basic EduShop Backend 2.0 🚀

A simple, robust Express.js backend server designed for learning and testing e-commerce APIs. This project serves as a practical foundation for understanding RESTful APIs, JSON data management, and Node.js server operations.

## 🌟 Key Features

- **RESTful API**: Clean endpoints for product data.
- **JSON Based**: Uses `a.json` as a lightweight database for easy experimentation.
- **Auto-Reload**: Pre-configured with `nodemon` for a seamless development experience.
- **Standardized Responses**: Consistent JSON response structures.

## 🛠️ Tech Stack

- **Node.js**: The runtime environment.
- **Express.js**: Fast, unopinionated, minimalist web framework.
- **FS Module**: For reading local data files.

## 🚀 Getting Started

### 1. Installation

Clone the repository and install dependencies:

```bash
npm install
```

### 2. Running the Server

**Development Mode (Auto-restart on changes):**

```bash
npm run dev
```

**Standard Mode:**

```bash
npm start
```

The server will start on `http://localhost:9000`.

## 📡 API Endpoints

| Method  | Endpoint               | Description                             |
| :------ | :--------------------- | :-------------------------------------- |
| **GET** | `/api/v2/products`     | Get all available products              |
| **GET** | `/api/v2/products/:id` | Get details of a specific product by ID |

## 🧪 Learning Exercises

Try these to improve your backend skills:

1. **Add a Search Filter**: Modify the `/api/v2/products` route to filter by category using query parameters (e.g., `?category=Laptops`).
2. **Add a POST Route**: Create an endpoint to add a new product to `a.json`.
3. **Price Sorting**: Add logic to sort products by price (High to Low or Low to High).
4. **Error Handling**: Implement custom middleware to handle 404 and 500 errors more gracefully.

## 📂 Project Structure

- `index.js`: Main server logic and routing.
- `a.json`: Mock database containing product data.
- `package.json`: Project configuration and scripts.
- `.gitignore`: Files excluded from Git tracking.

---

Built for learning and testing purposes. Happy Coding! 💻
