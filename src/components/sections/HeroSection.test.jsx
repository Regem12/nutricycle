import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HeroSection from './HeroSection';

describe('HeroSection Component', () => {
  const mockSetShowAppModal = () => {};

  it('renders hero title', () => {
    render(<HeroSection setShowAppModal={mockSetShowAppModal} />);
    
    expect(screen.getByText(/Turning Vegetable Waste into Growth/i)).toBeInTheDocument();
  });

  it('renders with correct section id', () => {
    const { container } = render(<HeroSection setShowAppModal={mockSetShowAppModal} />);
    
    expect(container.querySelector('#home')).toBeInTheDocument();
  });

  it('renders description text', () => {
    render(<HeroSection setShowAppModal={mockSetShowAppModal} />);
    
    expect(screen.getByText(/NutriCycle: An IoT-Based/i)).toBeInTheDocument();
  });
});
