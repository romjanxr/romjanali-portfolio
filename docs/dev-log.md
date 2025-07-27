# 🛠️ Development Log — Romjan Ali Portfolio

This document records daily technical progress, architectural decisions, and implementation notes. It serves as an internal changelog and knowledge base for future reference and scalability.

---

## 📅 2025-07-02

### 📌 Summary

Today's work focused on implementing a comprehensive blog feature on the frontend. This involved creating a dedicated blog page, a detailed post view, and all the necessary components to support filtering, pagination, and social sharing.

---

### ✅ What Was Done

#### 🚀 Blog Feature Implementation

- **Blog Page:** Created a new page at `/blog` to display a grid of all blog posts.
- **Filtering and Searching:** Implemented client-side filtering by category and a search bar to quickly find articles.
- **Pagination:** Added pagination to navigate through a large number of blog posts.
- **Blog Post Page:** Created a dynamic page for individual blog posts using slugs (e.g., `/blog/[slug]`)
- **Component-Based Architecture:** Broke down the blog into a series of reusable components:
  - `BlogCard`: For displaying a preview of each post.
  - `BlogHero`: The header section of the blog page with search and filter controls.
  - `BlogHeader`, `BlogContent`, `AuthorBio`, `SocialShare`: For the detailed blog post view.
- **Data and Types:**
  - Created mock data for blog posts to facilitate frontend development.
  - Defined a `BlogPost` type in TypeScript for type safety.
- **Hooks:**
  - `useBlogFilters`: A custom hook to manage the state of the blog filters and pagination.
  - `useBlogPost`: A custom hook to fetch a single blog post (currently using mock data).

---

### 📁 Architecture Decisions

- **Client-Side Rendering:** The blog is currently rendered on the client-side, with mock data. This allows for a fast initial build and will be connected to the backend API in the future.
- **Component-Driven Development:** The blog feature is built with a component-driven approach, making it easy to maintain and extend.

---

### ⏭️ Next Steps

- Connect the blog to the Django backend to fetch real data.
- Implement a proper loading state for the blog pages.
- Add a commenting system to the blog posts.

---

## 📅 2025-06-30

### 📌 Summary

Focused on building out the project details page, implementing dynamic routing, and further modularizing frontend components for better maintainability.

---

### ✅ What Was Done

#### 🔗 Project Data & Routing

- Added a `slug` field to the project data structure in `data/projectdata.ts` to support SEO-friendly URLs.
- Populated comprehensive project details, including case study content and screenshots, for one project.
- Implemented dynamic routing for project detail pages using these slugs.
- Updated existing project card links to navigate to the new slug-based project detail URLs.

#### 🧩 Component Modularization

- Modularized the project details page into several distinct components:
  - `ProjectHeroSection`: Handles project overview, links, and main image.
  - `ProjectTechnologies`: Displays the list of technologies used.
  - `ProjectScreenshots`: Renders the gallery of project screenshots.
  - `ProjectCaseStudy`: A wrapper component for the entire case study.
- Further broke down the `ProjectCaseStudy` into specialized sub-components for each case study section:
  - `CaseStudyObjective`
  - `CaseStudyChallenges`
  - `CaseStudyTools`
  - `CaseStudyFeatures`
  - `CaseStudyResults`
- Created a reusable `BackButton` UI component to provide consistent navigation.

#### ⚙️ Configuration & Types

- Updated the main navigation menu links to ensure correct routing.
- Created a TypeScript type definition for `Project` data, enhancing type safety and clarity across the frontend.

---

## 📅 2025-06-28

- Implemented the Education and Projects sections.
- Updated Json Data for Education Projects
- Added animations to project images for better visual engagement.
- Fixed various design issues across the site to improve responsiveness and consistency.

---

## 📅 2025-06-27

- Built core sections of the homepage:

  - Navbar
  - Hero Section
  - About Me Section

- Created reusable components for consistent layout and cleaner code structure.

---

## 📅 2025-06-26

- Decided to switch to Next.js for better routing, performance, and scalability compared to plain React.
- Set up Next.js project using App Router (v15).
- Integrated ShadCN UI and Radix UI for consistent and accessible UI components.

---

## 📅 2025-06-25

### 📌 Summary

Initial project setup for a scalable full-stack portfolio application using Django REST Framework and React. The project is structured as a monorepo and designed to evolve as a long-term personal product.

---

### ✅ What Was Done

#### 🏗️ Repository Structure

- Created a **monorepo** with a `backend/` folder using Poetry.
- Decided to keep `frontend/` (React) in the same repository for unified versioning and deployment.

#### ⚙️ Django Project Setup

- Initialized Django project using Poetry and Python 3.13.
- Created core modular apps:
  - `core`: Shared utilities, base logic
  - `users`: Custom user model and auth
  - `projects`: Project showcase API
  - `blog`: Markdown-powered blog system
- Installed and configured **DRF + drf-spectacular** for auto API docs.

#### 🧩 Settings Architecture

- Structured Django settings using environment-based modules:
  - `settings/base.py` — common settings
  - `settings/dev.py` — development-specific settings
  - `settings/prod.py` — production config (to be used later)

#### 🛡️ Git & Environment Setup

- Created `.gitignore` for monorepo (Python, Django, React)
- Initialized `pyproject.toml` and `poetry.lock`

---

### 📁 Architecture Decisions

- Using **monorepo** to share logic and streamline deployments between frontend and backend
- Chose **Poetry** for backend dependency management to ensure reproducible builds
- **Branching strategy** selected:
  - `main` — production-ready, deployable code
  - `dev` — active development
  - Only `--squash` merges into `main` to maintain clean history

---

### ⏭️ Next Steps

- Design and implement a `UserProfile` model with a one-to-one relationship to the `User` model

- Integrate JWT-based authentication for user login and registration

- Configure PostgreSQL as the local development database using `.env` variables and decouple env default

- Scaffold full CRUD APIs for Projects and Blog apps

- Configure and expose API documentation using `drf-spectacular` (Swagger UI)

- Begin planning the frontend architecture, components, and state management strategy after backend API stabilization

---

### 🧠 Notes & Considerations

- Keep feature commits scoped, use Conventional Commits
- Commit to `dev` only, avoid direct commits to `main`
- Consider using GitHub Actions later for CI (linting/tests)
- Will maintain this dev log daily for transparency and future documentation
