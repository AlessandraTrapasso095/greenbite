🥗 GreenBite

Vegetarian recipes made easy

GreenBite is a React web application that allows users to search and explore vegetarian recipes using the Spoonacular API.


🚀 Live Demo

🔗 Deploy: https://greenbite-veg.netlify.app/

🔗 GitHub Repository: https://github.com/AlessandraTrapasso095/greenbite.git

🛠 Tech Stack

- React

- React Router DOM

- Axios

- Vite

- Spoonacular API

- CSS (custom responsive layout)

- Netlify (deployment)


📦 Features:

🔎 Search vegetarian recipes

📄 Recipe detail page with:

- Image

- Ready time

- Servings

- Vegetarian info

- Ingredients list

- Summary

- Instructions

⚡ Loading and error handling states

📱 Fully responsive layout

🌐 Client-side routing

🔐 Environment variables for API key



🧠 Project Structure
src/
│
├── assets/ and public/ for favicon and logo             
├── components/        
│   ├── Header.jsx
│   ├── SearchBar.jsx
│   ├── RecipeGrid.jsx
│   └── RecipeCard.jsx
│
├── pages/
│   ├── Home.jsx
│   └── RecipeDetail.jsx
│
├── context/
│   └── RecipeContext.jsx
│
├── services/
│   └── spoonacular.js
│
├── styles/
│   ├── App.css
│   ├── Header.css
│   ├── SearchBar.css
│   ├── RecipeGrid.css
│   ├── RecipeCard.css
│   └── RecipeDetail.css
│
├── App.jsx
├── main.jsx
└── index.css


📱 Responsive Design

The layout is fully responsive:

- 4 columns on large screens

- 3 columns under 980px

- 2 columns under 720px

- 1 column under 520px

- Mobile layout stack for recipe detail page under 900px


🎓 Academic Context

This project was developed as part of:

Start2Impact – Web Developer Path

It demonstrates:

- API integration

- State management with Context

- Routing

- Responsive design

- Production deployment

- Environment variable management


👩‍💻 Author

Alessandra Trapasso
Web Developer

Project created for educational purposes.