import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  const mockScrollToSection = vi.fn();
  const mockSetMobileMenuOpen = vi.fn();

  const defaultProps = {
    mobileMenuOpen: false,
    setMobileMenuOpen: mockSetMobileMenuOpen,
    scrollToSection: mockScrollToSection,
  };

  it('renders logo and brand name', () => {
    render(<Header {...defaultProps} />);
    
    expect(screen.getByText('NutriCycle')).toBeInTheDocument();
    expect(screen.getByAltText('NutriCycle Logo')).toBeInTheDocument();
  });

  it('renders navigation items', () => {
    render(<Header {...defaultProps} />);
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('calls scrollToSection when nav item is clicked', () => {
    render(<Header {...defaultProps} />);
    
    const homeButton = screen.getByText('Home');
    fireEvent.click(homeButton);
    
    expect(mockScrollToSection).toHaveBeenCalledWith('home');
  });

  it('calls scrollToSection when logo is clicked', () => {
    render(<Header {...defaultProps} />);
    
    const logo = screen.getByText('NutriCycle');
    fireEvent.click(logo);
    
    expect(mockScrollToSection).toHaveBeenCalledWith('home');
  });
});
