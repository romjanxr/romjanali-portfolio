# 🛠️ Development Log — Romjan Ali Portfolio

This document records daily technical progress, architectural decisions, and implementation notes. It serves as an internal changelog and knowledge base for future reference and scalability.

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
  - Only `--ff-only` merges into `main` to maintain clean history
- Decided not to enforce GitHub protection rules (private repo on free plan); manual discipline + `--ff-only` will be used

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
