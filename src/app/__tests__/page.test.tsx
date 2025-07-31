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

  it('displays the neocities style title', () => {
    render(<Home />);

    expect(screen.getByText('🐱✨ GATINHOS FOFINHOS ✨🐱')).toBeInTheDocument();
    expect(
      screen.getByText('~*~ Bem-vindo ao meu site de gatinhos! ~*~')
    ).toBeInTheDocument();
  });

  it('contains the welcome section', () => {
    render(<Home />);

    expect(
      screen.getByText('🎉 Bem-vindo ao meu site de gatinhos! 🎉')
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Este é o lugar mais fofo da internet/)
    ).toBeInTheDocument();
  });

  it('has navigation menu', () => {
    render(<Home />);

    expect(screen.getByText('🏠 Home')).toBeInTheDocument();
    expect(screen.getByText('😺 Gatinhos')).toBeInTheDocument();
    expect(screen.getByText('📚 Curiosidades')).toBeInTheDocument();
    expect(screen.getByText('📝 Guestbook')).toBeInTheDocument();
    expect(screen.getByText('🔗 Links')).toBeInTheDocument();
  });

  it('displays cat gallery', () => {
    render(<Home />);

    expect(screen.getByText('🐱 Galeria de Gatinhos 🐱')).toBeInTheDocument();
    expect(screen.getByText('Gatinho Feliz')).toBeInTheDocument();
    expect(screen.getByText('Gatinho Travesso')).toBeInTheDocument();
    expect(screen.getByText('Gatinho Apaixonado')).toBeInTheDocument();
    expect(screen.getByText('Gatinho Beijoqueiro')).toBeInTheDocument();
    expect(screen.getByText('Gatinho Chorão')).toBeInTheDocument();
    expect(screen.getByText('Gatinho Surpreso')).toBeInTheDocument();
  });

  it('has fun facts section', () => {
    render(<Home />);

    expect(
      screen.getByText('📚 Curiosidades sobre Gatinhos 📚')
    ).toBeInTheDocument();
    expect(screen.getByText('Gatinhos Dormem Muito!')).toBeInTheDocument();
    expect(screen.getByText('Gatinhos Ronronam!')).toBeInTheDocument();
    expect(screen.getByText('Língua Especial!')).toBeInTheDocument();
    expect(screen.getByText('Patas Sensíveis!')).toBeInTheDocument();
  });

  it('has guestbook section', () => {
    render(<Home />);

    expect(screen.getByText('📝 Guestbook 📝')).toBeInTheDocument();
    expect(
      screen.getByText('Deixe uma mensagem para os gatinhos! 💕')
    ).toBeInTheDocument();
    expect(screen.getByText(/Os gatinhos são demais/)).toBeInTheDocument();
  });

  it('has links section', () => {
    render(<Home />);

    expect(screen.getByText('🔗 Links Fofos 🔗')).toBeInTheDocument();
    expect(screen.getByText('🐱 Meus Amigos')).toBeInTheDocument();
    expect(screen.getByText('🎨 Recursos')).toBeInTheDocument();
  });

  it('has footer with neocities style', () => {
    render(<Home />);

    expect(
      screen.getByText('Feito com 💜 e muito amor pelos gatinhos! 🐱✨')
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Melhor visualizado em 800x600/)
    ).toBeInTheDocument();
  });
});
