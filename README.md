# Apply Loop
Apply Loop is a modern web application built with Next.js, React, and TypeScript. The project is designed with a clean application structure, reusable components, and a scalable development workflow for building and maintaining application-related features.

## Overview
Apply Loop is maintained as a private web application under the `weareapplyloop` organization. The codebase follows a component-based architecture and uses the Next.js App Router structure to keep routes, pages, assets, and shared UI logic easy to manage.

The project is currently structured for active development, staging, and production release workflows.

## Tech Stack
* Next.js
* React
* TypeScript
* JavaScript
* CSS
* npm
* ESLint

## Repository Structure
```txt
apply-loop/
├── app/                  # Application routes, pages, and layouts
├── components/           # Reusable UI components
├── public/               # Static files and public assets
├── styles/               # Global styles and styling utilities
├── .gitignore            # Git ignored files and folders
├── README.md             # Project documentation
├── eslint.config.mjs     # ESLint configuration
├── next.config.ts        # Next.js configuration
├── package.json          # Project scripts and dependencies
├── package-lock.json     # Locked dependency versions
├── postcss.config.mjs    # PostCSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Getting Started
Follow the steps below to run the project locally.

### Prerequisites
Make sure you have the following installed:
* Node.js
* npm
* Git

You can check your installed versions with:
```bash
node -v
npm -v
git --version
```

## Installation
Clone the repository:

```bash
git clone https://github.com/weareapplyloop/apply-loop.git
```

Navigate into the project directory:
```bash
cd apply-loop
```

Install project dependencies:
```bash
npm install
```

## Running the Development Server
Start the local development server:
```bash
npm run dev
```
Open the application in your browser:
```txt
http://localhost:3000
```
The app will reload automatically when changes are made to the source files.

## Available Scripts
### Start development server

```bash
npm run dev
```
Runs the application locally in development mode.

### Build for production
```bash
npm run build
```
Creates an optimized production build of the application.

### Start production server
```bash
npm run start
```
Runs the built application locally in production mode.
### Run lint checks
```bash
npm run lint
```
Checks the project for linting issues.

## Branch Workflow
This repository uses a branch-based workflow for managing development, testing, and releases.
```txt
main        # Stable main branch
dev         # Active development branch
stage       # Staging/testing branch
production  # Production-ready branch
```
Recommended development flow:
1. Create a new feature branch from `dev`.
2. Make and test your changes locally.
3. Commit your changes with a clear message.
4. Push the feature branch to GitHub.
5. Open a pull request into `dev`.
6. Move tested work from `dev` to `stage`.
7. Promote approved changes from `stage` to `production`.

Example:
```bash
git checkout dev
git pull origin dev
git checkout -b feature/your-feature-name
```
After making changes:
```bash
git add .
git commit -m "Add your clear commit message"
git push origin feature/your-feature-name
```
## Development Guidelines
When working on this project:
* Keep components reusable and easy to maintain.
* Follow the existing folder structure before creating new folders.
* Use TypeScript where possible for safer development.
* Keep styling consistent across pages and components.
* Avoid committing unused files, test code, or console logs.
* Test changes locally before opening a pull request.
* Keep commits focused on one clear change at a time.
* Use clear branch names such as `feature/login-page`, `fix/navbar-layout`, or `update/homepage-copy`.

## Environment Variables
If environment variables are required, create a `.env.local` file in the project root.
Example:
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
```
Do not commit `.env.local` or any sensitive values to the repository.
For production or staging environments, configure environment variables directly inside the hosting platform.

## Deployment
This project can be deployed on any platform that supports Next.js applications.
Before deploying, create a production build locally:

```bash
npm run build
```
If the build succeeds, the application is ready to be deployed.

Recommended deployment environments:
* Development: local machine
* Staging: `stage` branch
* Production: `production` branch

## Pull Request Checklist
Before opening a pull request, confirm that:
* The project runs locally.
* The build completes successfully.
* No unnecessary files were added.
* No sensitive values were committed.
* The change follows the existing code style.
* The pull request has a clear title and description.

## Commit Message Examples
Use clear and direct commit messages.
```txt
Add homepage layout
Fix navigation spacing
Update application form styling
Refactor shared button component
Improve mobile responsiveness
```

## Project Status
This project is under active development.
Features, routes, and documentation may change as the application grows.

## Maintainers
Apply Loop Team
GitHub Organization: `weareapplyloop`

## License
This repository is private and maintained by the Apply Loop team. All rights reserved.
