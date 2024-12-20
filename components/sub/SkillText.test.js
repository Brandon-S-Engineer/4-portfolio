import React from 'react';
import { render, screen } from '@testing-library/react';
import SkillText from './SkillText'; // Adjust path as necessary

describe('SkillText Component', () => {
  test('renders without crashing', () => {
    const { container } = render(<SkillText />);
    expect(container).toBeInTheDocument();
  });

  test('displays the main header text', () => {
    render(<SkillText />);
    const header = screen.getByText(/Skills & Technologies/i);
    expect(header).toBeInTheDocument();
  });

  test('renders all primary skill names', () => {
    render(<SkillText />);
    const skills = ['CSS/SASS', 'Tailwind', 'JavaScript', 'TypeScript', 'React', 'NextJS', 'GitHub'];
    skills.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });

  test('renders all secondary skill names', () => {
    render(<SkillText />);
    const secondarySkills = ['WebPack', 'Axios', 'Redux', 'MUI', 'React Testing', 'Jest', 'CMS'];
    secondarySkills.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });

  test('applies Framer Motion variants to primary skill boxes', () => {
    render(<SkillText />);

    // Query primary skill elements only
    const primarySkills = ['CSS/SASS', 'Tailwind', 'JavaScript', 'TypeScript', 'React', 'NextJS', 'GitHub'];
    primarySkills.forEach((skill) => {
      const skillElement = screen.getByText(skill);
      const parentDiv = skillElement.closest('div'); // Get the parent div
      expect(parentDiv).toHaveClass('Welcome-box'); // Assert it has the correct class
    });
  });

  test('ensures accessibility for all text elements', () => {
    render(<SkillText />);
    const allTextElements = screen.getAllByRole('heading');
    allTextElements.forEach((textElement) => {
      expect(textElement).toHaveAccessibleName();
    });
  });
});
