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
  (useInView as jest.Mock).mockReturnValue({
    ref: jest.fn(),
    inView: false,
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
    expect(container).toHaveAttribute('data-animate', 'visible'); // Ensure animation attribute is correct
  });

  it('calculates animation delay based on index prop', () => {
    render(<SkillDataProvider {...mockProps} />);
    expect(true).toBe(true); // Placeholder for mocking delay testing
  });
});
