# Tetris

A classic Tetris game built with React.

## Overview

This is a web-based Tetris implementation. It's built using React and makes advantage of functional components and hooks for state management and side effects.

## Features

*   **Responsive Design:** The game can adapt to different screen sizes.
*   **Score Tracking:** There's a score counter on the right-hand side.
*   **Level Progression:** The game increases in difficulty with faster falling speeds over time.

## How to Play

Use the following controls to play the game:

*   **Left Arrow:** Move the Tetromino left.
*   **Right Arrow:** Move the Tetromino right.
*   **Up Arrow:** Rotate the Tetromino.
*   **Down Arrow:** Soft drop the Tetromino (increase falling speed).
*   **d:** Instant drop the Tetromino based on its current state.

On mobile, you can use gestures:
*   Swipe left or right to move the Tetromino horizontally.
*   Swipe down to instnat drop the Tetromino.
*   Tap the screen to rotate the Tetromino. 

## Getting Started

To run the game locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/naowalrahman/tetris.git
    ```
2.  **Navigate to the project directory:**

    ```bash
    cd tetris-game
    ```
3.  **Install dependencies:**

    ```bash
    npm install
    ```
4.  **Start the development server:**

    ```bash
    npm start
    ```

    Open http://localhost:3000 to view it in your browser.
