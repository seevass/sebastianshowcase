import React, { useState } from 'react';
import { NavLink } from '@mantine/core';
import './NavLinkItem.css';
import { getRandomHoverColor } from '../helpers/colorUtils';

const BASE_PATH = '/sebastian-showcase'; // Global base path

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

  // Prepend the base path to the `to` prop if it's not already an external URL
  const adjustedHref = isExternal ? to : `${BASE_PATH}${to}`;

  return (
    <NavLink
      className="navLink"
      label={label}
      component="a"
      href={adjustedHref}
      target={isExternal ? '_blank' : undefined} // Opens in a new tab if external
      rel={isExternal ? 'noopener noreferrer' : undefined} // Security for external links
      style={{ color: hoverColor || 'var(--main-text-color)' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default NavLinkItem;
