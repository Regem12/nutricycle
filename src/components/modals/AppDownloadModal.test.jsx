import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import AppDownloadModal from './AppDownloadModal';

describe('AppDownloadModal Component', () => {
  const mockOnClose = vi.fn();

  it('renders modal when open is true', () => {
    render(<AppDownloadModal open={true} onClose={mockOnClose} />);
    
    expect(screen.getByText('Application Under Development')).toBeInTheDocument();
    expect(screen.getByText(/NutriCycle mobile app is still being built/i)).toBeInTheDocument();
  });

  it('does not render when open is false', () => {
    const { container } = render(
      <AppDownloadModal open={false} onClose={mockOnClose} />
    );
    
    expect(container.firstChild).toBeNull();
  });

  it('calls onClose when close button is clicked', () => {
    render(<AppDownloadModal open={true} onClose={mockOnClose} />);
    
    const closeButton = screen.getByText('Got it');
    fireEvent.click(closeButton);
    
    expect(mockOnClose).toHaveBeenCalled();
  });
});
