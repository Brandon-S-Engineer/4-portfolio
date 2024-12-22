import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectCard from './ProjectCard';
import '@testing-library/jest-dom';

// Mock next/image to simplify testing
jest.mock('next/image', () => (props: any) => {
  const { src, alt, width, height } = props;
  return (
    <img
      src={src}
      alt={alt}
      data-width={width}
      data-height={height}
    />
  );
});

const mockProps = {
  src: '/test-image.png',
  title: 'Test Project',
  description: 'This is a description for the test project.',
  isDark: false,
};

describe('ProjectCard Component', () => {
  it('renders without crashing', () => {
    render(<ProjectCard {...mockProps} />);
    expect(screen.getByAltText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('This is a description for the test project.')).toBeInTheDocument();
  });

  it('renders the dark overlay when isDark is true', () => {
    render(
      <ProjectCard
        {...mockProps}
        isDark={true}
      />
    );

    // Locate the overlay using a query for its unique class
    const overlay = screen.getByAltText('Test Project').closest('div')?.querySelector('.bg-black.bg-opacity-30');

    // Ensure the overlay exists
    expect(overlay).not.toBeNull();
    expect(overlay).toHaveClass('absolute top-0 left-0 w-full h-full bg-black bg-opacity-30');
  });

  it('does not render the dark overlay when isDark is false', () => {
    render(<ProjectCard {...mockProps} />);
    const overlay = screen.getByText('Test Project').closest('div')?.querySelector('div > div');
    expect(overlay).toBeNull(); // Ensure the overlay does not exist
  });

  it('passes correct props to the Image component', () => {
    render(<ProjectCard {...mockProps} />);
    const img = screen.getByAltText('Test Project');
    expect(img).toHaveAttribute('src', mockProps.src);
    expect(img).toHaveAttribute('data-width', '1000');
    expect(img).toHaveAttribute('data-height', '1000');
  });

  it('renders the title and description correctly', () => {
    render(<ProjectCard {...mockProps} />);
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
  });
});
