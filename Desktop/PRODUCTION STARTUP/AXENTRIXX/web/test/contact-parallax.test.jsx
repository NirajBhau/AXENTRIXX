import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import ContactPage from '../src/app/contact/page';

// Mock the components that aren't relevant to parallax testing
vi.mock('../src/components/Header', () => ({
  default: () => <div data-testid="header">Header</div>
}));

vi.mock('../src/components/Footer', () => ({
  default: () => <div data-testid="footer">Footer</div>
}));

vi.mock('../src/components/ContactForm', () => ({
  default: () => <div data-testid="contact-form">Contact Form</div>
}));

describe('Contact Page Parallax Effect', () => {
  let matchMediaMock;
  
  beforeEach(() => {
    // Mock window.matchMedia for reduced motion preference
    matchMediaMock = vi.fn((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
    
    window.matchMedia = matchMediaMock;
    
    // Mock window dimensions
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1920,
    });
    
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 0,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('Desktop viewport (> 1024px)', () => {
    it('should render parallax background with correct initial transform', () => {
      const { container } = render(<ContactPage />);
      
      // Find the parallax background layer
      const parallaxLayer = container.querySelector('[style*="translate3d"]');
      
      expect(parallaxLayer).toBeTruthy();
      expect(parallaxLayer.style.transform).toContain('translate3d(0, 0px, 0)');
    });

    it('should apply 0.5 speed multiplier on desktop', async () => {
      window.innerWidth = 1920;
      const { container } = render(<ContactPage />);
      
      // Simulate scroll
      window.scrollY = 100;
      window.dispatchEvent(new Event('scroll'));
      
      await waitFor(() => {
        const parallaxLayer = container.querySelector('[style*="translate3d"]');
        // Desktop should use 0.5 multiplier: 100 * 0.5 = 50px
        expect(parallaxLayer.style.transform).toContain('translate3d(0, 50px, 0)');
      });
    });

    it('should have background image URL set', () => {
      const { container } = render(<ContactPage />);
      const parallaxLayer = container.querySelector('[style*="translate3d"]');
      
      expect(parallaxLayer.style.backgroundImage).toContain('contact-hero-bg');
    });

    it('should have will-change transform for GPU acceleration', () => {
      const { container } = render(<ContactPage />);
      const parallaxLayer = container.querySelector('[style*="translate3d"]');
      
      expect(parallaxLayer.style.willChange).toBe('transform');
    });
  });

  describe('Tablet viewport (768px - 1024px)', () => {
    it('should apply 0.3 speed multiplier on tablet', async () => {
      window.innerWidth = 900;
      const { container } = render(<ContactPage />);
      
      // Trigger resize event
      window.dispatchEvent(new Event('resize'));
      
      await waitFor(() => {
        // Simulate scroll
        window.scrollY = 100;
        window.dispatchEvent(new Event('scroll'));
      });
      
      await waitFor(() => {
        const parallaxLayer = container.querySelector('[style*="translate3d"]');
        // Tablet should use 0.3 multiplier: 100 * 0.3 = 30px
        expect(parallaxLayer.style.transform).toContain('translate3d(0, 30px, 0)');
      });
    });
  });

  describe('Mobile viewport (< 768px)', () => {
    it('should apply 0.2 speed multiplier on mobile', async () => {
      window.innerWidth = 375;
      const { container } = render(<ContactPage />);
      
      // Trigger resize event
      window.dispatchEvent(new Event('resize'));
      
      await waitFor(() => {
        // Simulate scroll
        window.scrollY = 100;
        window.dispatchEvent(new Event('scroll'));
      });
      
      await waitFor(() => {
        const parallaxLayer = container.querySelector('[style*="translate3d"]');
        // Mobile should use 0.2 multiplier: 100 * 0.2 = 20px
        expect(parallaxLayer.style.transform).toContain('translate3d(0, 20px, 0)');
      });
    });

    it('should scale background image appropriately', () => {
      window.innerWidth = 375;
      const { container } = render(<ContactPage />);
      const parallaxLayer = container.querySelector('[style*="translate3d"]');
      
      expect(parallaxLayer.style.backgroundSize).toBe('cover');
      expect(parallaxLayer.style.backgroundPosition).toBe('center');
    });
  });

  describe('Theme switching', () => {
    it('should maintain parallax functionality in light mode', () => {
      const { container } = render(<ContactPage />);
      
      const parallaxLayer = container.querySelector('[style*="translate3d"]');
      expect(parallaxLayer).toBeTruthy();
      
      // Check overlay exists for light mode
      const overlay = container.querySelector('.bg-black\\/40');
      expect(overlay).toBeTruthy();
    });

    it('should have appropriate overlay opacity for both themes', () => {
      const { container } = render(<ContactPage />);
      
      // Check for overlay with both light and dark mode classes
      const overlay = container.querySelector('[class*="bg-black"]');
      expect(overlay).toBeTruthy();
      expect(overlay.className).toMatch(/bg-black\/40|bg-black\/60/);
    });
  });

  describe('Reduced motion preference', () => {
    it('should disable parallax transform when reduced motion is preferred', async () => {
      // Mock reduced motion preference
      matchMediaMock.mockImplementation((query) => ({
        matches: query === '(prefers-reduced-motion: reduce)',
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      }));
      
      const { container } = render(<ContactPage />);
      
      await waitFor(() => {
        const parallaxLayer = container.querySelector('[style*="transform"]');
        expect(parallaxLayer.style.transform).toBe('none');
      });
    });

    it('should set will-change to auto when reduced motion is preferred', async () => {
      matchMediaMock.mockImplementation((query) => ({
        matches: query === '(prefers-reduced-motion: reduce)',
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      }));
      
      const { container } = render(<ContactPage />);
      
      await waitFor(() => {
        const parallaxLayer = container.querySelector('[style*="will-change"]');
        expect(parallaxLayer.style.willChange).toBe('auto');
      });
    });
  });

  describe('Text readability', () => {
    it('should have overlay layer for text readability', () => {
      const { container } = render(<ContactPage />);
      
      // Check for dark overlay
      const overlay = container.querySelector('.bg-black\\/40');
      expect(overlay).toBeTruthy();
    });

    it('should render hero text content above parallax background', () => {
      render(<ContactPage />);
      
      const heading = screen.getByText('Contact us');
      expect(heading).toBeTruthy();
      
      const subtext = screen.getByText('We would love to hear from you');
      expect(subtext).toBeTruthy();
    });

    it('should have proper z-index layering', () => {
      const { container } = render(<ContactPage />);
      
      // Parallax background should have z-0
      const parallaxLayer = container.querySelector('[style*="translate3d"]');
      expect(parallaxLayer.className).toContain('z-0');
      
      // Content should have higher z-index
      const contentContainer = container.querySelector('.relative.z-10');
      expect(contentContainer).toBeTruthy();
    });
  });

  describe('Image loading fallback', () => {
    it('should have fallback gradient class when image fails to load', () => {
      const { container } = render(<ContactPage />);
      
      // The component checks image loading on mount
      // If image fails, it should have gradient fallback
      const parallaxLayer = container.querySelector('[style*="translate3d"]');
      
      // Check that parallax layer exists and has either image or gradient
      expect(parallaxLayer).toBeTruthy();
      expect(
        parallaxLayer.style.backgroundImage || 
        parallaxLayer.className.includes('bg-gradient')
      ).toBeTruthy();
    });
  });

  describe('Performance optimization', () => {
    it('should use translate3d for GPU acceleration', () => {
      const { container } = render(<ContactPage />);
      const parallaxLayer = container.querySelector('[style*="transform"]');
      
      expect(parallaxLayer.style.transform).toContain('translate3d');
      expect(parallaxLayer.style.transform).not.toContain('translateY');
    });

    it('should use passive scroll listener', () => {
      const addEventListenerSpy = vi.spyOn(window, 'addEventListener');
      
      render(<ContactPage />);
      
      expect(addEventListenerSpy).toHaveBeenCalledWith(
        'scroll',
        expect.any(Function),
        { passive: true }
      );
    });

    it('should clean up event listeners on unmount', () => {
      const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');
      
      const { unmount } = render(<ContactPage />);
      unmount();
      
      expect(removeEventListenerSpy).toHaveBeenCalledWith(
        'scroll',
        expect.any(Function)
      );
      expect(removeEventListenerSpy).toHaveBeenCalledWith(
        'resize',
        expect.any(Function)
      );
    });
  });

  describe('Parallax layer styling', () => {
    it('should have extended height for scroll range', () => {
      const { container } = render(<ContactPage />);
      const parallaxLayer = container.querySelector('[style*="translate3d"]');
      
      expect(parallaxLayer.style.height).toBe('120%');
      expect(parallaxLayer.style.top).toBe('-20%');
    });

    it('should have absolute positioning', () => {
      const { container } = render(<ContactPage />);
      const parallaxLayer = container.querySelector('[style*="translate3d"]');
      
      expect(parallaxLayer.className).toContain('absolute');
      expect(parallaxLayer.className).toContain('inset-0');
    });

    it('should have background cover and center positioning', () => {
      const { container } = render(<ContactPage />);
      const parallaxLayer = container.querySelector('[style*="translate3d"]');
      
      expect(parallaxLayer.style.backgroundSize).toBe('cover');
      expect(parallaxLayer.style.backgroundPosition).toBe('center');
    });
  });

  describe('Responsive parallax speed adjustment', () => {
    it('should update parallax speed on window resize', async () => {
      const { container } = render(<ContactPage />);
      
      // Start with desktop
      window.innerWidth = 1920;
      window.dispatchEvent(new Event('resize'));
      
      await waitFor(() => {
        window.scrollY = 100;
        window.dispatchEvent(new Event('scroll'));
      });
      
      await waitFor(() => {
        const parallaxLayer = container.querySelector('[style*="translate3d"]');
        expect(parallaxLayer.style.transform).toContain('translate3d(0, 50px, 0)');
      });
      
      // Change to mobile
      window.innerWidth = 375;
      window.dispatchEvent(new Event('resize'));
      
      await waitFor(() => {
        window.scrollY = 100;
        window.dispatchEvent(new Event('scroll'));
      });
      
      await waitFor(() => {
        const parallaxLayer = container.querySelector('[style*="translate3d"]');
        expect(parallaxLayer.style.transform).toContain('translate3d(0, 20px, 0)');
      });
    });
  });

  describe('Hero section structure', () => {
    it('should have relative positioning on hero section', () => {
      const { container } = render(<ContactPage />);
      const heroSection = container.querySelector('section');
      
      expect(heroSection.className).toContain('relative');
      expect(heroSection.className).toContain('overflow-hidden');
    });

    it('should render all interactive elements', () => {
      render(<ContactPage />);
      
      // Check for contact form
      expect(screen.getByTestId('contact-form')).toBeTruthy();
      
      // Check for contact info
      expect(screen.getByText('Get in touch')).toBeTruthy();
      expect(screen.getByText('Send us a message')).toBeTruthy();
    });
  });
});
