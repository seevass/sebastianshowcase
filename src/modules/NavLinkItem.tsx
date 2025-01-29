import React, { useState } from 'react';
import { NavLink } from '@mantine/core';
import './NavLinkItem.css';
import { getRandomHoverColor } from '../helpers/colorUtils';
import { useMediaQuery } from '@mantine/hooks';
import { theme } from '../theme'; 

const BASE_PATH = '/sebastianshowcase'; // Global base path for GitHub Pages

interface NavLinkItemProps {
  to: string;
  label: string;
  isExternal?: boolean;
}

const NavLinkItem: React.FC<NavLinkItemProps> = ({ to, label, isExternal = false }) => {
  const [hoverColor, setHoverColor] = useState<string | null>(null);

  const handleMouseEnter = () => {
    if (!hoverColor) {
      setHoverColor(getRandomHoverColor());
    }
  };

  const handleMouseLeave = () => {
    setHoverColor(null);
  };

  // Adjust internal link to add the base path and hash prefix
  const adjustedHref = isExternal
    ? to
    : to.startsWith('mailto:') // Check if it's a mailto link
    ? to // Directly use the mailto link as is
    : to.endsWith('.pdf') // Check if it's a PDF or another file
    ? `${BASE_PATH}/${to}` // Append the base path for the PDF file
    : `${BASE_PATH}#${to}`; // For regular routes with hash

    const isMobile = useMediaQuery(`(max-width: ${theme?.breakpoints?.lg})`);
    const navbar_font_size = isMobile ? '2.5rem' : '3rem';
  return (
    <NavLink
      className="navLink"
      label={label}
      component="a"
      href={adjustedHref}
      target={isExternal ? '_blank' : undefined} // Opens in a new tab if external
      rel={isExternal ? 'noopener noreferrer' : undefined} // Security for external links
      style={{ color: hoverColor || 'var(--main-text-color)'}}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      styles={{
        label: {
          fontSize: navbar_font_size,
        },
      }}
    />
  );
};

export default NavLinkItem;
