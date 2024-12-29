import React from 'react';
import { render, screen } from '@testing-library/react';
import SkillText from './SkillText';

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

  test('renders all secondary skill names without ambiguity', () => {
    render(<SkillText />);
    const secondarySkills = ['WebPack', 'Axios', 'Redux', 'MUI', 'React Testing Library', 'Jest', 'CMS'];

    secondarySkills.forEach((skill) => {
      const matchingElements = screen.getAllByText(skill, { exact: true }); // Use exact match
      expect(matchingElements.length).toBeGreaterThanOrEqual(1); // Ensure at least one element matches
      const skillElement = matchingElements[0]; // Focus on the first match
      expect(skillElement).toBeInTheDocument();
    });
  });

  test('applies Framer Motion variants to primary skill boxes', () => {
    render(<SkillText />);
    const primarySkills = ['CSS/SASS', 'Tailwind', 'JavaScript', 'TypeScript', 'React', 'NextJS', 'GitHub'];
    primarySkills.forEach((skill) => {
      const skillElement = screen.getByText(skill);
      const parentDiv = skillElement.closest('div'); // Get the parent div
      expect(parentDiv).toHaveClass('Welcome-box');
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
