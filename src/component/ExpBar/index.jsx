import React from 'react';
import { useTheme } from '@emotion/react';

function ExpBar({ ratio }) {
  const theme = useTheme();

  return (
    <svg viewBox="0 0 100 100" width="75vmin" height="75vmin">
      <circle
        cx={50}
        cy={50}
        r={45}
        fill="none"
        stroke={theme.palette.primary.main}
        strokeWidth={5}
      />
      <circle
        cx={50}
        cy={50}
        r={45}
        fill="none"
        stroke={theme.palette.primary.dark}
        strokeWidth={5}
        strokeLinecap="round"
        strokeDasharray={Math.PI * 2 * 45}
        strokeDashoffset={Math.PI * 2 * (1 - ratio) * 45}
        transform="rotate(-90 50 50)"
      />
    </svg>
  );
}

export default ExpBar;
