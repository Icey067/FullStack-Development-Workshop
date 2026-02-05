# 🎲 Dice Game

A sleek, interactive web-based dice game built with HTML, CSS, and JavaScript. Challenge a friend and see who can reach the winning score first!

## 🚀 Features

- **Real-time Scoring**: Tracks current roll totals and accumulated bank scores.
- **Dynamic UI**: Smooth transitions and active player highlighting.
- **Responsive Design**: Clean layout with modern aesthetics and backdrop blur effects.
- **Reset Functionality**: Quickly start a new game anytime.

## 📜 Logic

This game follows the classic rules:

1.  **Winning Condition**: The first player to reach **20 points** (or the target score) wins the game!
2.  **Rolling the Dice**:
    - Roll a **2-6**: The number is added to your **Current Score**.
    - Roll a **1**: Your entire **Current Score** is lost, and it becomes the next player's turn.
3.  **Holding Score**:
    - Click **Hold** to add your **Current Score** to your **Total Score**.
    - After holding, your turn ends immediately.
4.  **Turn Switching**: The turn switches if you roll a 1 or if you choose to Hold.

## 🛠️ Technologies Used

- **HTML5**: Semantic structure.
- **CSS3**: Custom styling, gradients, and Glassmorphism effects.
- **JavaScript (ES6)**: Game logic and DOM manipulation.
- **Google Fonts**: 'Nunito Sans' for modern typography.

## 📂 Project Structure

- `index.html`: The main entry point and structure of the game.
- `project.css`: Contains all visual styling and animations.
- `index.js`: The core logic for rolling, holding, and switching turns.
- `assets/`: Contains image assets for the dice faces (1-6).

## 🏃 How to Run

1.  Clone or download this repository.
2.  Open the `index.html` file in any modern web browser.
3.  Start rolling!

