'use client'
import React from 'react';

interface HamburgerIconProps {
  className?: string;
  onClick?: () => void;
}

const HamburgerIcon: React.FC<HamburgerIconProps> = ({ className, onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
      onClick={onClick}
    >
      <path
        d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"
        className="fill-current"
      />
    </svg>
  );
};

export default HamburgerIcon;
