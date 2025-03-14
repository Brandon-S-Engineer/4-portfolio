import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HeroContent from './HeroContent';
import '@testing-library/jest-dom';

// Mocking next/image for simplicity
jest.mock('next/image', () => (props: any) => {
  const { src, alt, height, width } = props;
  return (
    <img
      src={src}
      alt={alt}
      data-height={height}
      data-width={width}
    />
  );
});

// Mock scrolling and flashing border behavior
beforeEach(() => {
  document.body.innerHTML = '<div id="footer"></div>';
  jest.useFakeTimers();
  Element.prototype.scrollIntoView = jest.fn(); // Mock scrollIntoView to prevent errors
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

describe('HeroContent Component', () => {
  it('renders without crashing', () => {
    render(<HeroContent />);

    // Use partial matchers for dynamic text
    expect(screen.getByText(/Full-Stack Software Engineer/i)).toBeInTheDocument();
    expect(screen.getByText(/Dynamic and Adaptative/i)).toBeInTheDocument();
    expect(screen.getByText(/Creating/i)).toBeInTheDocument();
    expect(screen.getByText(/Full-Stack Solutions/i)).toBeInTheDocument();

    // Verify additional elements
    expect(screen.getByText(/I'm Brandon Israel Hurtado Soria/i)).toBeInTheDocument();
    expect(screen.getByAltText('work icons')).toBeInTheDocument();
  });

  it('downloads the resume with correct attributes', () => {
    render(<HeroContent />);
    const downloadButton = screen.getByText('Download Resume');
    expect(downloadButton).toHaveAttribute('href', '/0-resume/Resume-Brandon-I-Soria.pdf');
    expect(downloadButton).toHaveAttribute('download');
  });

  it('handles contact button click and footer flashing', () => {
    render(<HeroContent />);
    const contactButton = screen.getByText('Get in Touch');
    const footer = document.getElementById('footer');

    // Ensure the footer element exists
    expect(footer).toBeInTheDocument();
    expect(footer).not.toHaveClass('flash-border');

    // Simulate the button click
    fireEvent.click(contactButton);

    // The class should now be applied
    expect(footer).toHaveClass('flash-border');

    // Advance the timers to simulate 3 seconds passing
    jest.advanceTimersByTime(3000);

    // The class should now be removed
    expect(footer).not.toHaveClass('flash-border');
  });

  it('includes motion props on key elements', () => {
    render(<HeroContent />);

    // Check for the welcome box motion container
    const welcomeBox = screen.getByText(/Full-Stack Software Engineer/i).closest('div');
    expect(welcomeBox).toBeInTheDocument();
    expect(welcomeBox).toHaveClass('Welcome-box');

    // Ensure the motion container is rendered
    const mainContainer = welcomeBox?.closest('.flex');
    expect(mainContainer).toBeInTheDocument();
  });

  it('renders the image with correct attributes', () => {
    render(<HeroContent />);
    const image = screen.getByAltText('work icons');
    expect(image).toHaveAttribute('src', '/mainIconsdark.svg');
    expect(image).toHaveAttribute('data-height', '650');
    expect(image).toHaveAttribute('data-width', '650');
  });
});
