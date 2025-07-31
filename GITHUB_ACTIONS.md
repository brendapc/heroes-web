# GitHub Actions Setup

## Workflows

### **CI** (`.github/workflows/ci.yml`)

- **Trigger**: Pull Requests e pushes para `master`
- **Executa**: Lint, testes, type check, build
- **Node.js**: 18.x e 20.x

### **PR Check** (`.github/workflows/pr-check.yml`)

- **Trigger**: Pull Requests
- **Executa**: Formatação, lint, testes, cobertura, type check, build
- **Extra**: Comenta na PR com resultados

### **Deploy** (`.github/workflows/deploy.yml`)

- **Trigger**: Push para `master`
- **Executa**: Build + deploy para Vercel

## Hooks Locais

### **Pre-commit** (`.husky/pre-commit`)

Executa antes de cada commit:

1. Lint-staged (ESLint nos arquivos modificados)
2. Testes (Jest)
3. Build (verificação de compilação)

## Configuração Vercel

- Secrets configurados no GitHub para deploy automático

## Cobertura

- **Meta**: 80% de cobertura
- **Threshold**: 5% de tolerância
- **Relatórios**: Automáticos em PRs
