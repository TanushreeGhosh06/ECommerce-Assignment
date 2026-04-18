# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# ShopEase

> A modern e-commerce web application built using React + Vite, featuring authentication, cart management, and a fully responsive UI with clean and reusable components.


## Tech Stack

- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Context API (State Management)
- React Icons

---

## Features

### Home Page
- Product listing with responsive grid layout
- Clean UI and fast rendering

### Product Page
- Detailed product view
- Proper spacing and structured layout

### Cart System
- Add / remove products
- Quantity update functionality
- Dynamic total price calculation
- Cart badge in navbar

### Authentication
- Login system (frontend-based)
- Context API for user state management
- Profile icon appears after login
- Dropdown with username + logout option

### Navbar
- Fully responsive navigation bar
- Hover underline animation on links
- Cart item counter badge
- Login button → Profile icon after login
- Mobile hamburger menu support

### Footer
- Fully responsive multi-column layout
- Quick navigation links (Home, Cart, Login)
- Contact information
- Social media icons (Facebook, Instagram, LinkedIn, X)
- Proper React Router navigation enabled

---

## Responsive Design

- Mobile-first approach
- Fully responsive navbar, cart, and footer
- Hamburger menu for small screens
- Adaptive grid layout for all pages

---
## Difficulties Faced in This Project

> During the development of this e-commerce project, I faced a few challenges:

- Handling cart data and authentication state across multiple components using Context API required careful structuring to avoid data inconsistency.
- Making the navbar, footer, and cart page fully responsive across mobile, tablet, and desktop screens took multiple iterations and testing.
- Managing quantity updates, removing items, and calculating the total price dynamically required proper logic handling to avoid UI bugs.

---
## Future Scope of the Project

> This project can be enhanced further with several advanced features:

- Connect with a backend (Node.js) for real product data, authentication, and order management.
- Secure login/signup system with token-based authentication.
- Add payment options like Razorpay/Stripe for real checkout experience.
- Track previous orders for logged-in users.
- Implement an AI-powered chatbot to assist users with product queries, order tracking, and general support to enhance user experience.

