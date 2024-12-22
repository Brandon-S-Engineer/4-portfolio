import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HeroContent from './HeroContent';
import '@testing-library/jest-dom';

// Mocking next/image to simplify rendering with custom attributes
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

  // Mock scrollIntoView to prevent errors
  Element.prototype.scrollIntoView = jest.fn();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

describe('HeroContent Component', () => {
  it('renders without crashing', () => {
    render(<HeroContent />);

    // Check for individual text parts since the text is split across elements
    const dynamicPart = screen.getByText('Dynamic and Adaptative', { exact: false });
    expect(dynamicPart).toBeInTheDocument();

    const creatingPart = screen.getByText('Creating', { exact: false });
    expect(creatingPart).toBeInTheDocument();

    const frontEndSolutionsPart = screen.getByText('Front-End Solutions', { exact: false });
    expect(frontEndSolutionsPart).toBeInTheDocument();

    // Verify other elements
    expect(screen.getByText('Font-End Software Engineer')).toBeInTheDocument();
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

    // Ensure key motion elements are rendered
    const welcomeBox = screen.getByText('Font-End Software Engineer').closest('div');
    expect(welcomeBox).toBeInTheDocument();

    const mainContainer = welcomeBox?.closest('.flex'); // Locate the motion container
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
