# React Introduction - react-website-design

## 🧭 Project Overview
This project is a simple React application developed as an introductory task. It demonstrates fundamental React concepts, including component-based architecture, props, state, and basic application structure. The application showcases a mock blog/content layout with a header, footer, main content area, sidebars, and an image gallery.

## ✨ Key Features & Components
*   **Main Application (`App.js`):** The root component that structures the overall page layout.
*   **Layout Components:**
    *   `Header.js`: Displays the site logo and main navigation.
    *   `Content.js`: Organizes the main content area, including sidebars and a gallery. It also manages some initial state for the content displayed.
    *   `Footer.js`: Contains footer navigation and copyright information.
*   **Content Display:**
    *   `ContentMain.js`: Renders a sample blog post.
    *   `ContentLeft.js`: Displays a list of categories.
    *   `ContentRight.js`: Shows a list of popular posts.
*   **Image Gallery (`Gallery.js`):** A component to display a collection of images with titles. Data is sourced from `galleryData.js` and passed via props.
*   **Reusable UI Elements:**
    *   `Nav.js`: A flexible navigation component used in both header and footer.
    *   `Logo.js`: A simple component for the site logo.
*   **Page Views (Examples):**
    *   `PageGallery.js`: A dedicated page view showcasing the image gallery, demonstrating how components can be assembled into different page structures.
    *   `PagePost.js`: A basic page view for displaying a single post.

## 🛠 Tech Stack

  ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-grey?style=for-the-badge&logo=javascript)
  ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black)
  ![Babel](https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=black)

## 🚀 Getting Started

### Prerequisites
*   Node.js and npm (or yarn) installed on your system.

### Installation
1.  Clone the repository (if applicable) or navigate to the project directory.
2.  Install the project dependencies:
    ```bash
    npm install
    ```

### Running the Development Server
To start the Webpack development server and view the application:
```bash
npm run start
```
*(This command assumes a `start` script is configured in your `package.json` to execute `webpack-dev-server` or a similar command, which is typical for projects using the provided `webpack.config.js`.)*

The application will then be accessible in your web browser, usually at:
`http://localhost:8080`

## 🎨 Styling
Styling in this project is primarily handled using **inline styles** defined as JavaScript objects within each component file. This approach is common for smaller projects or for demonstrating component-specific styling in React.

## ⚙️ Webpack Configuration
The project uses Webpack, configured via `webpack.config.js`, for the following tasks:
*   **JavaScript Bundling:** Transpiles ES6+ JavaScript (including JSX) to browser-compatible code using `babel-loader` and bundles it into a single file (`app.min.js`).
*   **HTML Generation:** Uses `HtmlWebpackPlugin` to generate an `index.html` file in the `build` directory, automatically injecting the bundled JavaScript.
*   **Development Server:** (Implicitly) Webpack's development server provides live reloading and serves the application during development.

The main entry point for Webpack is `src/app.js`, and the output is directed to the `build` folder.

## 📌 Lessons Learned (from this project structure)
*   **Component-Based Architecture:** Understanding how to break down a UI into isolated, reusable React components.
*   **Props:** Learning to pass data and functionality down the component tree from parent to child components.
*   **State:** Basic usage of component-local state (`this.state` in class components) to manage dynamic data and trigger re-renders.
*   **JSX:** Writing UI structures declaratively using JSX syntax.
*   **Project Setup:** Gaining familiarity with a basic React project structure and a simple Webpack configuration for bundling and development.
*   **Modularity:** Organizing components into logical directories (`layout`, `common`) for better code organization and maintainability.
*   **Data Flow:** Observing how data (e.g., `galleryData`, `post` info) is defined, passed, and rendered within components.

## 🙏 Acknowledgements
*   This project was created as a learning exercise to understand the fundamentals of React.
*   Inspired by tasks and guidance from devmentor.pl.
