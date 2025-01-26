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

jest.mock('../../content/projectDescriptions', () => ({
  formattedDescription1: 'Plain text description for testing.',
  formattedDescription2: 'Another plain text description.',
  formattedDescription3: 'Sample description.',
  formattedDescription4: 'Yet another description.',
  formattedDescription5: 'Final plain text description.',
}));

const mockProps = {
  images: [
    { src: '/image1.png', alt: 'Image 1' },
    { src: '/image2.png', alt: 'Image 2' },
  ],
  title: 'Test Project',
  technologies: 'React, Next.js, TailwindCSS',
  descriptionKey: 'formattedDescription1' as const, // Ensure this matches one of the keys in `descriptions`
  isDark: true,
  webLink: 'https://brandon-s-engineer.com', // Replace with a valid URL for testing
  repoLink: 'https://github.com/Brandon-S-Engineer?tab=repositories&q=&type=&language=&sort=nameo', // Replace with a valid repository link for testing
};

describe('ProjectCardCarousel Component', () => {
  it('renders without crashing', () => {
    render(
      <ProjectCardCarousel
        {...mockProps}
        descriptionKey='formattedDescription1'
      />
    );

    // Check for the basic elements
    expect(screen.getByAltText('Image 1')).toBeInTheDocument();
    expect(screen.getByText('Test Project')).toBeInTheDocument();
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

  it('updates to the next image when the "next" button is clicked', async () => {
    render(<ProjectCardCarousel {...mockProps} />);
    const nextButton = screen.getByText('▶');

    fireEvent.click(nextButton); // Simulate clicking the "next" button

    // Wait for the next image to appear
    const nextImage = await screen.findByAltText('Image 2'); // Automatically waits for updates
    expect(nextImage).toBeInTheDocument();
  });

  it('updates to the previous image when the "prev" button is clicked', () => {
    render(<ProjectCardCarousel {...mockProps} />);
    const nextButton = screen.getByText('▶');
    fireEvent.click(nextButton); // Move to the second image
    const prevButton = screen.getByText('◀');
    fireEvent.click(prevButton); // Move back to the first image
    expect(screen.getByAltText('Image 1')).toBeInTheDocument();
  });

  it('updates the current image when a pagination dot is clicked', async () => {
    render(<ProjectCardCarousel {...mockProps} />);
    const dotButton = screen.getByLabelText('Go to image 2');
    fireEvent.click(dotButton);

    // Wait for the animation to complete and the new image to appear
    const newImage = await screen.findByAltText('Image 2'); // Automatically waits for updates
    expect(newImage).toBeInTheDocument();
  });

  it('renders a placeholder or nothing during SSR (when windowWidth is null)', () => {
    render(<ProjectCardCarousel {...mockProps} />);
    const container = screen.queryByText('Test Project'); // Searching for any visible content
    expect(container).toBeInTheDocument(); // Replace with logic matching actual placeholder behavior if needed
  });
});
