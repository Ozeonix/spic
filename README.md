# CampusBloom Portal

A modern, production-ready frontend portal built with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, and **Supabase**.

---

## 🚀 Tech Stack
- **Framework**: React 18 + Vite (SWC)
- **Styling**: Tailwind CSS + Shadcn UI
- **Database / Auth**: Supabase
- **State Management**: React Query (TanStack Query)
- **Containerization**: Docker (Multi-stage Nginx alpine)
- **CI/CD**: AWS CodeBuild (`buildspec.yml`)

---

## 🛠️ Local Development

### Prerequisites
- Node.js (v20+)
- npm (installed automatically with Node.js)

### Setup Instructions
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd campusbloom-portal
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root of the project (this file is ignored by git to keep your credentials secure):
   ```env
   VITE_SUPABASE_PROJECT_ID="your_supabase_project_id"
   VITE_SUPABASE_URL="https://your_supabase_project_id.supabase.co"
   VITE_SUPABASE_PUBLISHABLE_KEY="your_supabase_anon_key"
   VITE_API_URL="http://localhost:8080" # optional
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:8080`.

---

## 🐳 Docker Deployment

The application is configured to run in a production-ready Docker container using a multi-stage build.
- **Stage 1 (Builder)**: Installs npm dependencies and builds static assets.
- **Stage 2 (Runner)**: Copies build outputs to a lightweight **Nginx** alpine image and configures custom routing, caching, and healthchecks.

### Running with Docker Compose
1. Make sure your shell environment has your Supabase variables set, or create a `.env` file:
   ```bash
   export VITE_SUPABASE_PROJECT_ID="your_project_id"
   export VITE_SUPABASE_URL="https://your_project_id.supabase.co"
   export VITE_SUPABASE_PUBLISHABLE_KEY="your_anon_key"
   ```
2. Build and start the container:
   ```bash
   docker compose up --build -d
   ```
3. Access the portal at `http://localhost:3000`. The container healthcheck endpoint is configured at `http://localhost/health`.

---

## ☁️ AWS Deployment Guide

There are three main options for deploying this static React SPA to AWS:

### Option 1: AWS Amplify (Recommended & Simplest)
AWS Amplify is a fully managed service for deploying frontend web applications.
1. Go to the **AWS Amplify Console**.
2. Click **New App** > **Host web app**.
3. Connect your Git repository (GitHub, GitLab, Bitbucket, or CodeCommit).
4. Amplify will automatically detect the Vite build settings.
5. In **Build Settings**, add your environment variables (`VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`, etc.).
6. Click **Save and deploy**. Amplify will handle SSL, CDN distribution, and CI/CD out-of-the-box.

### Option 2: Amazon S3 + CloudFront (Most Cost-Effective & Scalable)
Since this is a static Single Page Application (SPA), hosting it directly from S3 and distributing it via CloudFront CDN is the standard best practice.
1. **Build the application locally or in a CI pipeline**:
   ```bash
   npm run build:prod
   ```
2. **S3 Setup**:
   - Create an Amazon S3 Bucket (e.g., `campusbloom-portal`).
   - Keep public access blocked (access will be granted via CloudFront Origin Access Control).
3. **CloudFront Setup**:
   - Create a CloudFront Distribution.
   - Set the Origin to your S3 bucket.
   - Enable **Origin Access Control (OAC)** to secure the bucket.
   - Configure **Custom Error Responses**:
     - Error Code: `404` or `403`
     - Response Page Path: `/index.html`
     - HTTP Status Code: `200`
     *(This is necessary for React Router's client-side routing to function properly).*
4. **Deploy**: Upload the contents of the `dist/` folder to the S3 bucket.

### Option 3: ECS/Fargate (Docker Container Deployment)
If your architecture requires hosting the application in containerized environments:
1. Push the built Docker image to **AWS Elastic Container Registry (ECR)**.
2. Create an **AWS ECS Task Definition** using the ECR image.
3. Deploy the task definition to an **ECS Service** using **AWS Fargate** (Serverless container hosting).
4. Place the ECS Service behind an **Application Load Balancer (ALB)** mapping public port `80` or `443` to the container port `80`.

---

## ⚙️ CI/CD Pipeline (AWS CodePipeline & CodeBuild)

The repository contains a `buildspec.yml` configuration file for **AWS CodeBuild**.
During the pipeline execution:
1. Dependencies are installed (`npm ci`).
2. Code quality is checked (`npm run lint`, `npm run type-check`, `npm run test`).
3. The production bundle is compiled (`npm run build:prod`).
4. CodeBuild packages **only** the `dist/` directory as a build artifact, which can be hooked directly to an **S3 deployment provider** or an **Amplify deployment provider**.
