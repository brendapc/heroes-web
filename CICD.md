# CI/CD Documentation

## Overview

This document outlines the CI/CD pipeline for the Heroes Web application using GitHub Actions.

## Pipeline Structure

Our CI/CD pipeline consists of a single workflow file (`.github/workflows/ci.yml`) that handles all testing, security scanning, and deployment.

### Triggers

- **Pull Requests**: Runs full test suite and creates preview deployments
- **Pushes to main/master**: Runs full test suite and deploys to production

## Workflow File

### CI Workflow (`ci.yml`)

**Trigger**: Pull requests and pushes to main/master branches

**Purpose**: Complete CI/CD pipeline with quality checks, security scanning, and deployment

**Jobs:**

#### Test Job

- Checkout code
- Setup Node.js 20.x with npm caching
- Install dependencies (`npm ci`)
- Check formatting (`npm run format:check`)
- Run linting (`npm run lint`)
- Run tests with coverage (`npm run test:coverage`)
- Run type checking (`npm run type-check`)
- Build application (`npm run build`)
- Run security audit (`npm audit --audit-level=moderate`)
- Run CodeQL analysis for security scanning
- Upload test coverage to Codecov

#### Deploy Preview Job

Runs only on pull requests, after the test job passes.

- Setup and build the application
- Deploy to Vercel preview environment
- Comment on PR with preview URL

#### Deploy Job

Runs only on pushes to main/master branches, after the test job passes.

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

### Required Package.json Scripts

Ensure your `package.json` includes these required scripts:

```json
{
  "scripts": {
    "format:check": "prettier --check .",
    "lint": "eslint . --ext .ts,.tsx,.js,.jsx",
    "test": "jest",
    "test:coverage": "jest --coverage",
    "type-check": "tsc --noEmit",
    "build": "next build"
  }
}
```

## Deployment Flow

### For Pull Requests

1. Run full test suite with quality checks (formatting, linting, tests, type checking)
2. Run security scanning (npm audit + CodeQL)
3. If all tests pass, create preview deployment on Vercel
4. Comment on PR with preview URL

### For Main/Master Branch

1. Run full test suite with quality checks and security scanning
2. If tests pass, deploy to Vercel production

## Troubleshooting

### Common Issues

- **Tests failing**: Check the test output in the GitHub Actions logs
- **Build failures**: Usually TypeScript errors - check the type-check step
- **Deployment issues**: Verify Vercel secrets are configured correctly
- **Security audit failures**: Update vulnerable dependencies

### Getting Help

1. Check GitHub Actions logs for detailed error messages
2. Run the same commands locally to reproduce issues
3. Verify all required secrets are configured in repository settings

---

_Last updated: August 12, 2025_
