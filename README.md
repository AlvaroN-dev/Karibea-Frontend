# Karibea | Next-Gen E-Commerce Frontend

## 📖 Project Description

Karibea is a modern e-commerce platform for clothing and cosmetics designed to outperform traditional marketplaces with faster, smarter search and filtering capabilities. It offers instant selection by gender, highly organized navigation, and features an intelligent chatbot that recommends products and trends based on individual style, preferences, and budget.

This project represents a scalable, high-performance frontend architecture built with **Next.js 15**, focusing on SEO optimization, server-side rendering, and a seamless user experience.

## 🚀 Key Features

*   **Smart Navigation & Filtering**: Instant product filtering by category (Women, Men, Kids) and dynamic sorting handled via client-side logic for speed.
*   **Next.js App Router**: Utilizes the latest Next.js 15 architecture with Server Components for optimal performance and SEO.
*   **Global State Management**: Centralized `ShopContext` handles complex state interactions including Cart, Wishlist, Authentication, and UI Modals without prop drilling.
*   **Dual Theme Support**: Built-in Dark Mode and Light Mode support using `next-themes` and Tailwind CSS.
*   **Internationalization (i18n)**: Custom-built language context allowing seamless switching between English and Spanish.
*   **Optimized UX**: Implementation of Skeleton loaders, custom page transitions, and interactive UI feedback (toasts, modal loaders).
*   **Responsive Design**: Mobile-first approach with a custom mobile menu and adaptive layouts.

## 🛠️ Technology Stack

*   **Framework**: [Next.js 15](https://nextjs.org/) (React)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **State Management**: React Context API
*   **Theming**: `next-themes`
*   **Utilities**: `clsx`, `tailwind-merge`

## 📂 Project Structure

The project follows a modular architecture designed for scalability and maintainability:

```text
src/
├── app/                        # Next.js App Router (Server Components)
│   ├── [category]/             # Dynamic route for categories (e.g., /mujer, /hombre)
│   ├── shop/                   # Product routes
│   │   └── [id]/               # Dynamic product detail pages
│   ├── layout.tsx              # Root layout with Providers (Theme, Language, Shop)
│   ├── page.tsx                # Home page with Hero and Featured sections
│   ├── loading.tsx             # Global loading states
│   └── not-found.tsx           # Custom 404 error page
│
├── components/                 # Reusable UI Components
│   ├── Auth/                   # Login/Register modals and logic
│   ├── cart/                   # Shopping Cart logic, items, and checkout flow
│   ├── features/               # Complex feature components (Hero, ProductDetail, Chatbot)
│   ├── layout/                 # Global layout elements (Header, Footer, GlobalModals)
│   │   ├── Header/             # Navigation, SearchBar, SettingsToggle
│   │   └── Footer/             # Site footer and links
│   ├── loaders/                # Skeletons and transition loaders
│   ├── modals/                 # interactive popups (ProcessingModal)
│   ├── providers/              # Context Providers wrappers
│   ├── ui/                     # Atomic design elements (Buttons, Inputs, Cards)
│   └── views/                  # Client-side views for dynamic pages
│
├── context/                    # Global React Contexts
│   ├── LanguageContext.tsx     # i18n logic
│   └── ShopContext.tsx         # Cart and Wishlist logic
│
├── constants/                  # Static data and dictionaries
│   ├── dictionary.ts           # Translation strings (EN/ES)
│   └── navLinks.ts             # Navigation configuration
│
├── lib/                        # Utilities and Data fetching
│   ├── data.ts                 # Mock database and filtering functions
│   └── utils.ts                # CSS class merging helper
│
└── styles/                     # Global styles
    └── global.css              # Tailwind and custom variable definitions

##⚡ Getting Started

---

Follow these instructions to set up the project locally.

## Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

## Installation

1 Clone the repository

git clone https://github.com/your-username/karibea-frontend.git
cd karibea-frontend

2 Install dependencies

npm install

3 Run the development server

npm run dev

4 Access the application Open http://localhost:3000 in your browser.

## 🔧 Configuration

---

## Dark Mode

The project uses next-themes configured with the class attribute. Styles are defined in src/styles/global.css using Tailwind's @custom-variant.

## Internationalization

Translations are managed in src/constants/dictionary.ts. To add a new language:

1 Add the translation keys to the dictionary.
2 Update the LanguageContext types.
3 Add the option in the SettingsToggle component.

## 🤝 Contributing

---

Contributions are welcome! Please feel free to submit a Pull Request.

1 Fork the project
2 Create your feature branch (git checkout -b feature/AmazingFeature)
3 Commit your changes (git commit -m 'Add some AmazingFeature')
4 Push to the branch (git push origin feature/AmazingFeature)
5 Open a Pull Request

## 📄 License

---
This project is open-source and available under the MIT License.
