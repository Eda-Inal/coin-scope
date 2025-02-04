'use client';
import React from 'react';

interface DarkIconProps {
    className?: string;
    onClick?: () => void;
}

const DarkIcon: React.FC<DarkIconProps> = ({ className, onClick }) => {
    return (
        <svg
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            onClick={onClick}
            width="24px"
            height="24px"
        >
            <rect fill="none" height="256" width="256" />
            <path
                d="M216.7,152.6A91.9,91.9,0,0,1,103.4,39.3h0A92,92,0,1,0,216.7,152.6Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
            />
        </svg>
    );
};

export default DarkIcon;

