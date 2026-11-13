# CI/CD Practice Pipeline

A **full-stack React + Node.js** example demonstrating automated CI/CD with Docker and GitHub Actions.

## 🚀 Key Features
- **Frontend:** React app built with Vite (TypeScript).
- **Backend:** Node.js + Express API.
- **Containerization:** Each service has a Dockerfile, enabling image builds.
- **CI/CD:** GitHub Actions workflow builds Docker images for both services and pushes to Docker Hub. After pushing, a Railway webhook is triggered to redeploy the updated containers.
- **Automation:** Example of an “Infrastructure as Code” pipeline using containers.

## 🛠️ Tech Stack
- **Frontend:** React 18 (Vite, TypeScript)
- **Backend:** Node.js, Express, TypeScript
- **DevOps:** Docker, Docker Compose (for local dev), GitHub Actions, Railway App Deployment.

## 🔧 Getting Started
1. **Clone the repo:** `git clone https://github.com/Nepmine/practice-CICD.git`
2. **Configure Secrets:** In your GitHub Actions settings, add:
   - `DOCKERHUB_USERNAME` and `DOCKERHUB_TOKEN` for image push.
   - `RAILWAY_WEBHOOK_URL` for auto-deploy (if using Railway).
3. **Local Development:** 
   - In separate terminals, run `npm run dev` in `/frontend` and `npm run dev` in `/backend`.
   - Access frontend on [http://localhost:5173](http://localhost:5173) and backend on [http://localhost:5000](http://localhost:5000).
4. **Docker Builds:** The `ci.yml` workflow (on push to `main`) will:
   - Build the frontend and backend Docker images.
   - Push them to Docker Hub (tags like `username/practice-frontend:latest`).
   - Send a POST to the Railway webhook for deployment.

Refer to the GitHub Actions YAML (`.github/workflows/ci.yml`) for details on the CI steps and modify as needed for your own projects.

## 📦 Directory Layout
