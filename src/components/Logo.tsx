import React from "react";

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`${className} flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-105`}>
      <img 
        src="/sonolsunartık.png" 
        alt="Fluxiqo Logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
}
