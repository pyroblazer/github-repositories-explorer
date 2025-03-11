# GitHub Repositories Explorer

Deployed at https://github-repositories-explorer-taupe.vercel.app/

Ignatius Timothy Manullang

A React application that integrates with the GitHub API to allow users to search for up to 5 GitHub users by a partial username and, upon selection, view all of their repositories.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [ESLint Configuration](#eslint-configuration)
- [Testing](#testing)
- [Deployment](#deployment)
- [Recruitment Task Details](#recruitment-task-details)
- [Additional Notes](#additional-notes)

## Project Overview

This project was created as a recruitment task. The application uses the GitHub API to search for users and display their repositories. With a focus on clean code, proper error handling, good user experience, and mobile responsiveness, this project showcases best practices in React and TypeScript development.

## Features

- **User Search:** Find up to 5 GitHub users with a similar username.
- **Repository Display:** Click on a user to view their repositories (with no limit on the number of repositories shown).
- **Error Handling:** Gracefully handles API errors and displays loading states.
- **Responsive Design:** Mobile-friendly design using TailwindCSS.
- **Testing:** Unit and integration tests implemented with Jest and React Testing Library.
- **Modern Tooling:** Built using Vite for fast development and HMR.

## Technologies Used

- **React**
- **TypeScript**
- **Vite**
- **TailwindCSS**
- **Jest** & **React Testing Library** (for testing)
- **ESLint** (with recommended, strict, and stylistic type-checked rules)

## Setup and Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/pyroblazer/github-repositories-explorer.git
   cd github-repositories-explorer
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```
   
3. **Run the development server:**
   ```bash
   pnpm dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173).

## ESLint Configuration

This project uses a Vite-based React + TypeScript setup.

## Testing

To run the tests, use:

```bash
pnpm test
```

## Deployment

1. **Build the production bundle:**
   ```bash
   pnpm build
   ```
2. **Deploy the contents of the `dist` folder** to your hosting provider (e.g., GitHub Pages, Netlify, Vercel).

## Recruitment Task Details

**Project Name:** GitHub Repositories Explorer

**Description:**  
Create a React application that integrates with the GitHub API. The app allows users to search for up to 5 GitHub users with usernames similar to the entered value and, upon selection, displays all repositories for that user.  
API Documentation: [GitHub API v3](https://developer.github.com/v3/)

**Requirements:**

- Use React and TypeScript.
- Use any libraries for forms, styling, testing, and state management as needed.
- The app must be hosted in a public GitHub repository.
- The app must be hosted and accessible via URL.
- Provide a proper README with setup instructions.
- Handle errors and loading states gracefully.
- Ensure a good user experience (e.g., keyboard events handling).
- Use English for all UI text.

**Nice to Have:**

- Implement unit and integration tests.
- Ensure responsiveness for mobile view.
- Showcase best practices in code quality and application architecture.

## Additional Notes

- **File Structure:**  
  The project is organized with separate folders for components, hooks, services, and type definitions to ensure scalability and maintainability.
- **API and Error Handling:**  
  API calls and error handling are managed in a dedicated service and custom hooks to separate concerns.
- **Unique Keys in Lists:**  
  Ensure that list-rendered components (such as repositories) have unique keys (e.g., `repo.id`).

Feel free to contribute and improve upon the project. Enjoy exploring GitHub repositories!

