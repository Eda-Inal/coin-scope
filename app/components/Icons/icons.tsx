'use client'
import React from 'react';

interface CloseIconProps {
  className?: string;
  onClick?: () => void;
}

export const CloseIcon: React.FC<CloseIconProps> = ({ className, onClick }) => {
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
        d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"
        className="fill-current"
      />
    </svg>
  );
};

interface DarkIconProps {
  className?: string;
  onClick?: () => void;
}

export const DarkIcon: React.FC<DarkIconProps> = ({ className, onClick }) => {
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

interface HamburgerIconProps {
  className?: string;
  onClick?: () => void;
}

export const HamburgerIcon: React.FC<HamburgerIconProps> = ({ className, onClick }) => {
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

interface LightIconProps {
  className?: string;
  onClick?: () => void;
}

export const LightIcon: React.FC<LightIconProps> = ({ className, onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      width="24px"
      viewBox="0 0 128 128"
      className={className}
      onClick={onClick}
    >
      <g>
        <path d="M64.079,95.543c-17.39,0-31.537-14.148-31.537-31.538c0-17.389,14.147-31.535,31.537-31.535s31.537,14.146,31.537,31.535 C95.616,81.395,81.469,95.543,64.079,95.543z M64.079,36.47c-15.184,0-27.537,12.353-27.537,27.535 c0,15.184,12.354,27.538,27.537,27.538s27.537-12.354,27.537-27.538C91.616,48.823,79.263,36.47,64.079,36.47z" />
      </g>
      <g>
        <g>
          <path d="M64.079,114.086c-1.104,0-2-0.896-2-2V101.41c0-1.105,0.896-2,2-2s2,0.895,2,2v10.676 C66.079,113.189,65.184,114.086,64.079,114.086z" />
          <path d="M64.079,28.603c-1.104,0-2-0.896-2-2V15.926c0-1.104,0.896-2,2-2s2,0.896,2,2v10.677 C66.079,27.708,65.184,28.603,64.079,28.603z" />
        </g>
        <g>
          <path d="M112.159,66.006h-10.676c-1.104,0-2-0.896-2-2c0-1.104,0.896-2,2-2h10.676c1.104,0,2,0.896,2,2 C114.159,65.109,113.264,66.006,112.159,66.006z" />
          <path d="M26.676,66.006H16c-1.104,0-2-0.896-2-2c0-1.104,0.896-2,2-2h10.676c1.104,0,2,0.896,2,2 C28.676,65.109,27.78,66.006,26.676,66.006z" />
        </g>
      </g>
      <g>
        <g>
          <path d="M98.075,100.004c-0.512,0-1.023-0.195-1.414-0.586l-7.548-7.549c-0.781-0.781-0.781-2.047,0-2.828s2.047-0.781,2.828,0 l7.548,7.549c0.781,0.781,0.781,2.047,0,2.828C99.099,99.809,98.587,100.004,98.075,100.004z" />
          <path d="M37.63,39.558c-0.512,0-1.023-0.195-1.414-0.586l-7.548-7.549c-0.781-0.781-0.781-2.828,0-2.828 c0.781-0.781,2.047-0.781,2.828,0l7.548,7.549c0.781,0.781,0.781,2.048,0,2.828C38.653,39.363,38.142,39.558,37.63,39.558z" />
        </g>
        <g>
          <path d="M90.527,39.558c-0.512,0-1.023-0.195-1.414-0.586c-0.781-0.781-0.781-2.048,0-2.828l7.55-7.549 c0.781-0.781,2.047-0.781,2.828,0s0.781,2.048,0,2.828l-7.55,7.549C91.551,39.363,91.039,39.558,90.527,39.558z" />
          <path d="M30.082,100.004c-0.512,0-1.023-0.195-1.414-0.586c-0.781-0.781-0.781-2.049,0-2.828l7.549-7.549 c0.781-0.781,2.047-0.781,2.828,0s0.781,2.049,0,2.828l-7.549,7.549C31.105,99.809,30.594,100.004,30.082,100.004z" />
        </g>
      </g>
    </svg>
  );
};
