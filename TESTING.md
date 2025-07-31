# Testing Guide

This project uses Jest and React Testing Library for unit testing.

## Quick Start

```bash
npm test          # Run all tests
npm run test:watch    # Run tests in watch mode
npm run test:coverage # Run tests with coverage
```

## Test Structure

```
src/
├── __tests__/           # Test folders
│   └── ComponentName.test.tsx
├── ComponentName.tsx    # Components
└── utils/
    ├── __tests__/
    │   └── helpers.test.ts
    └── helpers.ts
```

## Basic Test Example

```tsx
import { render, screen } from "@testing-library/react";
import MyComponent from "../MyComponent";

describe("MyComponent", () => {
  it("renders correctly", () => {
    render(<MyComponent />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
});
```

## Common Patterns

### Mock Next.js Image

```tsx
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: any) => (
    <img src={src} alt={alt} {...props} />
  ),
}));
```

### Mock Router

```tsx
jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: jest.fn(), replace: jest.fn() }),
}));
```

## Best Practices

- Test behavior, not implementation
- Use semantic queries (`getByRole`, `getByLabelText`)
- Keep tests simple and focused
- Use descriptive test names
