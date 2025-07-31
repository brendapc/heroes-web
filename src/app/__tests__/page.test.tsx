import { render, screen } from '@testing-library/react';
import Home from '../page';

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({
    src,
    alt,
    width,
    height,
    className,
    'aria-hidden': ariaHidden,
  }: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    'aria-hidden'?: boolean;
    [key: string]: unknown;
  }) => {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        aria-hidden={ariaHidden}
      />
    );
  },
}));

describe('Home Page', () => {
  it('renders the main heading and content', () => {
    render(<Home />);

    // Check if the page renders without crashing
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('displays the Next.js logo', () => {
    render(<Home />);

    const logo = screen.getByAltText('Next.js logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/next.svg');
  });

  it('contains the getting started instructions', () => {
    render(<Home />);

    expect(screen.getByText(/Get started by editing/)).toBeInTheDocument();
    expect(
      screen.getByText(/Save and see your changes instantly/)
    ).toBeInTheDocument();
  });

  it('has deploy and docs links', () => {
    render(<Home />);

    const deployLink = screen.getByRole('link', { name: /Deploy now/i });
    const docsLink = screen.getByRole('link', { name: /Read our docs/i });

    expect(deployLink).toBeInTheDocument();
    expect(docsLink).toBeInTheDocument();

    expect(deployLink).toHaveAttribute(
      'href',
      'https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
    );
    expect(docsLink).toHaveAttribute(
      'href',
      'https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
    );
  });

  it('has footer links', () => {
    render(<Home />);

    expect(screen.getByRole('link', { name: /Learn/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Examples/i })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /Go to nextjs.org/i })
    ).toBeInTheDocument();
  });
});
