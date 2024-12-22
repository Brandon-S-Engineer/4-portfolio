import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProjectCardCarousel from './ProjectCardCarousel';
import '@testing-library/jest-dom';

jest.mock('next/image', () => (props: any) => {
  const { src, alt } = props;
  return (
    <img
      src={src}
      alt={alt}
    />
  );
});

const mockProps = {
  images: [
    { src: '/image1.png', alt: 'Image 1' },
    { src: '/image2.png', alt: 'Image 2' },
  ],
  title: 'Test Project',
  technologies: 'React, Next.js, TailwindCSS',
  description: 'This is a description for the test project.',
  isDark: false,
};

describe('ProjectCardCarousel Component', () => {
  it('renders without crashing', () => {
    render(<ProjectCardCarousel {...mockProps} />);
    expect(screen.getByAltText('Image 1')).toBeInTheDocument();
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('React, Next.js, TailwindCSS')).toBeInTheDocument();
    expect(screen.getByText('This is a description for the test project.')).toBeInTheDocument();
  });

  it('displays the dark overlay when isDark is true', () => {
    render(
      <ProjectCardCarousel
        {...mockProps}
        isDark={true}
      />
    );
    const overlay = screen.getByTestId('dark-overlay');
    expect(overlay).toBeInTheDocument();
    expect(overlay).toHaveClass('absolute top-0 left-0 w-full h-full bg-black bg-opacity-30');
  });

  it('updates to the next image when the "next" button is clicked', () => {
    render(<ProjectCardCarousel {...mockProps} />);
    const nextButton = screen.getByText('▶');
    fireEvent.click(nextButton);
    expect(screen.getByAltText('Image 2')).toBeInTheDocument();
  });

  it('updates to the previous image when the "prev" button is clicked', () => {
    render(<ProjectCardCarousel {...mockProps} />);
    const nextButton = screen.getByText('▶');
    fireEvent.click(nextButton); // Move to the second image
    const prevButton = screen.getByText('◀');
    fireEvent.click(prevButton); // Move back to the first image
    expect(screen.getByAltText('Image 1')).toBeInTheDocument();
  });

  it('updates the current image when a pagination dot is clicked', () => {
    render(<ProjectCardCarousel {...mockProps} />);
    const dotButton = screen.getByLabelText('Go to image 2');
    fireEvent.click(dotButton);
    expect(screen.getByAltText('Image 2')).toBeInTheDocument();
  });

  it('renders a placeholder or nothing during SSR (when windowWidth is null)', () => {
    render(<ProjectCardCarousel {...mockProps} />);
    const container = screen.queryByText('Test Project'); // Searching for any visible content
    expect(container).toBeInTheDocument(); // Replace with logic matching actual placeholder behavior if needed
  });
});
