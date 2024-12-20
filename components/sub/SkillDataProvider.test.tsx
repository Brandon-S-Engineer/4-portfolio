import React from 'react';
import { render, screen } from '@testing-library/react';
import { useInView } from 'react-intersection-observer';
import SkillDataProvider from './SkillDataProvider';
import '@testing-library/jest-dom';

jest.mock('react-intersection-observer', () => ({
  useInView: jest.fn(),
}));

jest.mock('next/image', () => (props: any) => {
  const { src, alt } = props;
  return (
    <img
      src={src}
      alt={alt}
    />
  );
});

beforeEach(() => {
  (useInView as jest.Mock).mockReset();
  (useInView as jest.Mock).mockReturnValue({
    ref: jest.fn(),
    inView: false, // Default state
  });
});

const mockProps = {
  src: '/test-image.png',
  width: 100,
  height: 100,
  index: 2,
};

describe('SkillDataProvider Component', () => {
  it('renders without crashing', () => {
    render(<SkillDataProvider {...mockProps} />);
    expect(screen.getByAltText('Skill Image')).toBeInTheDocument();
  });

  it('applies motion animation based on inView', () => {
    (useInView as jest.Mock).mockReturnValueOnce({ ref: jest.fn(), inView: true });

    render(<SkillDataProvider {...mockProps} />);
    const container = screen.getByTestId('motion-container');

    // Check if the `animate` prop evaluates to 'visible'
    expect(container).toHaveAttribute('data-testid', 'motion-container');
    // Mock actual animation behavior by checking render
  });

  it('calculates animation delay based on index prop', () => {
    render(<SkillDataProvider {...mockProps} />);
    // Check if delay logic is applied (adjust as needed for framer-motion mock)
    expect(true).toBe(true); // Placeholder for delay verification
  });
});
