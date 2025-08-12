# CI/CD Documentation

## Overview

This document outlines the CI/CD pipeline for the Heroes Web application using GitHub Actions.

## Pipeline Structure

Our CI/CD pipeline consists of a single workflow file (`.github/workflows/ci.yml`) that handles testing, security scanning, and deployment.

### Triggers

- **Pull Requests**: Runs tests and creates preview deployments
- **Pushes to master**: Runs tests and deploys to production

## Workflow Jobs

### 1. Test Job

Runs on every pull request and push to master branch.

**Steps:**

- Checkout code
- Setup Node.js 20.x with npm caching
- Install dependencies (`npm ci`)
- Run linting (`npm run lint`)
- Run tests (`npm test`)
- Run type checking (`npm run type-check`)
- Build application (`npm run build`)
- Run security audit (`npm audit --audit-level=moderate`)
- Run CodeQL analysis for security scanning
- Upload test coverage to Codecov

### 2. Deploy Preview Job

Runs only on pull requests, after the test job passes.

**Steps:**

- Setup and build the application
- Deploy to Vercel preview environment
- Comment on PR with preview URL

### 3. Deploy Job

Runs only on pushes to main/master branches, after the test job passes.

**Steps:**

- Setup and build the application
- Deploy to Vercel production environment

## Security Features

### NPM Audit

- Checks for known vulnerabilities in dependencies
- Runs at moderate audit level
- Fails the build if critical vulnerabilities are found

### CodeQL Analysis

- Static analysis for security vulnerabilities
- Analyzes JavaScript/TypeScript code
- Results appear in GitHub Security tab

## Required Configuration

### GitHub Secrets

Configure these secrets in your GitHub repository settings:

```
VERCEL_TOKEN          # Vercel authentication token
VERCEL_ORG_ID         # Vercel organization ID
VERCEL_PROJECT_ID     # Vercel project ID
```

### Package.json Scripts

Ensure your `package.json` includes these required scripts:

```json
{
  "scripts": {
    "lint": "eslint . --ext .ts,.tsx,.js,.jsx",
    "test": "jest",
    "type-check": "tsc --noEmit",
    "build": "next build"
  }
}
```

## Deployment Flow

### For Pull Requests

1. Run all tests and quality checks
2. If tests pass, create preview deployment on Vercel
3. Comment on PR with preview URL

### For Main/Master Branch

1. Run all tests and quality checks
2. If tests pass, deploy to Vercel production

## Troubleshooting

### Common Issues

- **Tests failing**: Check the test output in the GitHub Actions logs
- **Build failures**: Usually TypeScript errors - check the type-check step
- **Deployment issues**: Verify Vercel secrets are configured correctly
- **Security audit failures**: Update vulnerable dependencies

_Last updated: August 12, 2025_
