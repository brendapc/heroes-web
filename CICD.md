# CI/CD Documentation

## Overview

This document outlines the Continuous Integration and Continuous Deployment (CI/CD) approach for the Heroes Web application, including best practices, security considerations, and workflow explanations.

## Table of Contents

- [CI/CD Pipeline Overview](#cicd-pipeline-overview)
- [Workflow Structure](#workflow-structure)
- [Security Scanning](#security-scanning)
- [Deployment Strategy](#deployment-strategy)
- [Best Practices](#best-practices)
- [Environment Setup](#environment-setup)
- [Troubleshooting](#troubleshooting)

## CI/CD Pipeline Overview

Our CI/CD pipeline is built using GitHub Actions and consists of multiple workflows designed to ensure code quality, security, and reliable deployments.

### Pipeline Goals

1. **Quality Assurance**: Automated testing, linting, and formatting checks
2. **Security**: Vulnerability scanning and dependency auditing
3. **Reliability**: Multi-environment testing and gradual deployments
4. **Efficiency**: Fast feedback loops and parallel execution
5. **Transparency**: Clear reporting and PR integration

## Workflow Structure

### 1. Pull Request Check Workflow (`pr-check.yml`)

**Trigger**: Pull request events to `main` or `master` branches

**Purpose**: Lightweight quality checks with PR feedback

**Jobs**:

- **quality-check**: Runs formatting, linting, tests, type checking, and build
- **PR Comments**: Automatically comments on PRs with test results and coverage

### 2. CI Workflow (`ci.yml`)

**Trigger**: Pull requests and pushes to `main`/`master` branches

**Purpose**: Comprehensive testing, security scanning, and deployment

**Jobs**:

#### Test Job

- **Matrix Strategy**: Tests on Node.js 18.x and 20.x
- **Steps**:
  - Code checkout
  - Node.js setup with npm caching
  - Dependency installation
  - Linting (`npm run lint`)
  - Testing (`npm test`)
  - Type checking (`npm run type-check`)
  - Build verification (`npm run build`)
  - Coverage upload to Codecov

#### Security Scan Job

- **NPM Audit**: Checks for known vulnerabilities in dependencies
- **Snyk Scanning**: Advanced security vulnerability detection
- **CodeQL Analysis**: Static analysis for security issues
- **SARIF Upload**: Results uploaded to GitHub Security tab

#### Deploy Preview Job (PR only)

- **Conditions**: Only runs on pull request events
- **Dependencies**: Requires test and security-scan jobs to pass
- **Steps**:
  - Build application
  - Deploy to Vercel preview environment
  - Comment on PR with preview URL

#### Deploy Job (Production)

- **Conditions**: Only runs on pushes to main/master branch
- **Dependencies**: Requires test and security-scan jobs to pass
- **Steps**:
  - Build application
  - Deploy to Vercel production environment

## Security Scanning

### NPM Audit

- **Purpose**: Identifies known vulnerabilities in npm dependencies
- **Threshold**: Moderate level and above
- **Action**: Continues on error but reports issues

### Snyk Security Scan

- **Purpose**: Advanced vulnerability detection and remediation suggestions
- **Threshold**: High severity vulnerabilities
- **Requirements**: `SNYK_TOKEN` secret must be configured
- **Output**: SARIF format for GitHub Security integration

### CodeQL Analysis

- **Purpose**: Static analysis for security vulnerabilities and code quality
- **Language**: JavaScript/TypeScript
- **Integration**: Results appear in GitHub Security tab

## Deployment Strategy

### Preview Deployments

- **Trigger**: Every pull request
- **Environment**: Vercel preview environment
- **URL**: Unique preview URL per PR
- **Updates**: Automatic on new commits to PR

### Production Deployments

- **Trigger**: Pushes to main/master branch
- **Environment**: Vercel production environment
- **Strategy**: Direct deployment after all checks pass
- **Rollback**: Manual through Vercel dashboard if needed

## Best Practices

### 1. Branch Protection

- Require PR reviews before merging
- Require status checks to pass
- Enforce up-to-date branches before merging
- Restrict pushes to main/master branch

### 2. Secret Management

- Store sensitive data in GitHub Secrets
- Use environment-specific secrets
- Rotate secrets regularly
- Never commit secrets to code

### 3. Testing Strategy

- **Unit Tests**: Test individual components and functions
- **Integration Tests**: Test component interactions
- **E2E Tests**: Test complete user workflows (recommended addition)
- **Coverage**: Maintain >80% code coverage

### 4. Security Best Practices

- Regular dependency updates
- Automated security scanning
- Principle of least privilege for secrets
- Security-focused code reviews

### 5. Performance Optimization

- **Caching**: Use npm cache in CI
- **Parallel Jobs**: Run independent jobs concurrently
- **Matrix Strategy**: Test multiple Node.js versions
- **Conditional Execution**: Skip unnecessary steps

### 6. Monitoring and Observability

- Track deployment success rates
- Monitor application performance post-deployment
- Set up alerts for critical failures
- Maintain deployment logs

## Environment Setup

### Required Secrets

Configure the following secrets in your GitHub repository settings:

```
VERCEL_TOKEN          # Vercel authentication token
VERCEL_ORG_ID         # Vercel organization ID
VERCEL_PROJECT_ID     # Vercel project ID
SNYK_TOKEN           # Snyk authentication token (optional)
```

### Node.js Scripts

Ensure your `package.json` includes these scripts:

```json
{
  "scripts": {
    "lint": "eslint . --ext .ts,.tsx,.js,.jsx",
    "format:check": "prettier --check .",
    "test": "jest",
    "test:coverage": "jest --coverage",
    "type-check": "tsc --noEmit",
    "build": "next build"
  }
}
```

### Vercel Configuration

Ensure Vercel is configured to require GitHub deployments:

- Disable automatic deployments in Vercel dashboard
- Enable GitHub integration
- Configure production branch as main/master

## Troubleshooting

### Common Issues

#### 1. Deployment Skipped

- **Cause**: Branch protection rules or workflow conditions
- **Solution**: Check if branch matches deployment conditions

#### 2. Security Scan Failures

- **Cause**: High-severity vulnerabilities detected
- **Solution**: Update dependencies or add security exceptions

#### 3. Test Failures

- **Cause**: Code changes breaking existing functionality
- **Solution**: Fix tests or update implementation

#### 4. Build Failures

- **Cause**: TypeScript errors or missing dependencies
- **Solution**: Fix compilation errors and ensure dependencies are installed

### Debugging Steps

1. **Check Workflow Logs**: Review GitHub Actions logs for detailed error messages
2. **Local Reproduction**: Run the same commands locally to reproduce issues
3. **Dependency Issues**: Clear npm cache and reinstall dependencies
4. **Environment Variables**: Verify all required secrets are configured

## Continuous Improvement

### Metrics to Track

- Build success rate
- Deployment frequency
- Time to deployment
- Security vulnerability resolution time
- Test coverage trends

### Recommended Enhancements

1. **E2E Testing**: Add Playwright or Cypress tests
2. **Performance Testing**: Add Lighthouse CI for performance monitoring
3. **Staging Environment**: Add intermediate staging deployment
4. **Rollback Automation**: Implement automatic rollback on deployment failures
5. **Notification Integration**: Add Slack/Teams notifications for deployments

## Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vercel Deployment Documentation](https://vercel.com/docs/deployments)
- [Snyk Documentation](https://docs.snyk.io/)
- [Jest Testing Framework](https://jestjs.io/docs/getting-started)
- [ESLint Configuration](https://eslint.org/docs/user-guide/configuring)

---

_Last updated: August 11, 2025_
