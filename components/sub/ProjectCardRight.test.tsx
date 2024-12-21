import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectCardRight from './ProjectCardRight';
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
  src: '/test-image.png',
  title: 'Test Project',
  description: 'This is a test description.',
  isDark: false,
};

describe('ProjectCardRight Component', () => {
  it('renders without crashing', () => {
    render(<ProjectCardRight {...mockProps} />);
    expect(screen.getByAltText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('This is a test description.')).toBeInTheDocument();
  });

  it('passes correct props to the Image component', () => {
    render(<ProjectCardRight {...mockProps} />);
    const img = screen.getByAltText('Test Project');

    expect(img).toHaveAttribute('src', mockProps.src);
    expect(img).toHaveAttribute('alt', mockProps.title);
  });

  it('renders the dark overlay when isDark is true', () => {
    render(
      <ProjectCardRight
        {...mockProps}
        isDark={true}
      />
    );
    const overlay = screen.getByTestId('dark-overlay'); // Locate the overlay with data-testid
    expect(overlay).toBeInTheDocument(); // Check if the overlay exists
    expect(overlay).toHaveClass('bg-black bg-opacity-30'); // Verify the overlay's classes
  });

  it('does not render the dark overlay when isDark is false', () => {
    render(<ProjectCardRight {...mockProps} />);
    const overlay = screen.queryByTestId('dark-overlay'); // Ensure no overlay is rendered
    expect(overlay).not.toBeInTheDocument();
  });

  it('displays the correct title and description', () => {
    render(<ProjectCardRight {...mockProps} />);
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
  });
});

// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import ProjectCardRight from './ProjectCardRight';
// import '@testing-library/jest-dom';

// jest.mock('next/image', () => (props: any) => {
//   const { src, alt } = props;
//   return (
//     <img
//       src={src}
//       alt={alt}
//     />
//   );
// });

// const mockProps = {
//   src: '/test-image.png',
//   title: 'Test Project',
//   description: 'This is a test description.',
//   isDark: false,
// };

// describe('ProjectCardRight Component', () => {
//   it('renders without crashing', () => {
//     render(<ProjectCardRight {...mockProps} />);
//     expect(screen.getByAltText('Test Project')).toBeInTheDocument();
//     expect(screen.getByText('Test Project')).toBeInTheDocument();
//     expect(screen.getByText('This is a test description.')).toBeInTheDocument();
//   });

//   it('passes correct props to the Image component', () => {
//     render(<ProjectCardRight {...mockProps} />);
//     const img = screen.getByAltText('Test Project');

//     expect(img).toHaveAttribute('src', mockProps.src);
//     expect(img).toHaveAttribute('alt', mockProps.title);
//   });

//   it('renders the dark overlay when isDark is true', () => {
//     render(
//       <ProjectCardRight
//         {...mockProps}
//         isDark={true}
//       />
//     );
//     const overlay = screen.getByRole('region', { hidden: true }); // Simulate overlay detection
//     expect(overlay).toHaveClass('bg-black bg-opacity-30');
//   });

//   it('renders the dark overlay when isDark is true', () => {
//     render(
//       <ProjectCardRight
//         {...mockProps}
//         isDark={true}
//       />
//     );
//     const overlay = screen.getByTestId('dark-overlay'); // Locate the overlay with data-testid
//     expect(overlay).toBeInTheDocument(); // Check if the overlay exists
//     expect(overlay).toHaveClass('bg-black bg-opacity-30'); // Verify the overlay's classes
//   });

//   it('displays the correct title and description', () => {
//     render(<ProjectCardRight {...mockProps} />);
//     expect(screen.getByText(mockProps.title)).toBeInTheDocument();
//     expect(screen.getByText(mockProps.description)).toBeInTheDocument();
//   });
// });
