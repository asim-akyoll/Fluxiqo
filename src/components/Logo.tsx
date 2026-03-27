import React from "react";

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={`${className} transform transition-all duration-300 hover:scale-105`} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="fluxiqo-logo-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ff00ff" />
          <stop offset="60%" stopColor="#a200ff" />
          <stop offset="100%" stopColor="#4a0080" />
        </linearGradient>
      </defs>
      
      <g stroke="url(#fluxiqo-logo-grad)" strokeWidth="3.5" opacity="0.95">
        <ellipse cx="17" cy="50" rx="11" ry="15" />
        <ellipse cx="28" cy="50" rx="11" ry="27" />
        <ellipse cx="39" cy="50" rx="11" ry="38" />
        <ellipse cx="50" cy="50" rx="11" ry="46" />
        <ellipse cx="61" cy="50" rx="11" ry="38" />
        <ellipse cx="72" cy="50" rx="11" ry="27" />
        <ellipse cx="83" cy="50" rx="11" ry="15" />
      </g>
    </svg>
  );
}
