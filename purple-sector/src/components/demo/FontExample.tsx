'use client';
import React from 'react';

import SidebarToggleButton from '@/components/ui/SidebarToggleButton';
import { useState } from 'react';

const FontExample = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="space-y-6 p-8 ">
<button
        onClick={() => {
          console.log("Button clicked");
        }}
        className="p-2 absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-gray-200 rounded"
        aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
      >
      hey  
      </button>
      <h2 className="text-2xl font-geist">Font Variants Examples</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl mb-2 font-formula-bold">Formula Sans</h3>
          <p className="font-formula">This is FormulaSans default</p>
          
          <div className="text-4xl ">
            <p className="font-formula-regular ">This is FormulaSans Regular (400)</p>
            <p className="font-formula-medium">This is FormulaSans Medium (500)</p>
            <p className="font-formula-bold ">This is FormulaSans Bold (700) 2 </p>
            <p className="font-formula-italic">This is FormulaSans Italic 124</p>
          </div>
          
          <div className="space-y-2 mt-4">
            <p className="font-formula font-normal">FormulaSans with font-normal</p>
            <p className="font-formula font-medium">FormulaSans with font-medium</p>
            <p className="font-formula font-bold">FormulaSans with font-bold </p>
            <p className="font-formula italic">FormulaSans with italic</p>
          </div>
        </div>
        
        <div className={`text-4xl`}>
          <h3 className="text-xl mb-2">Other Fonts</h3>
          <p className="font-geist">This is Geist Sans</p>
          <p className="font-mono">This is Geist Mono</p>
          <p className="font-orbitron">This is Orbitron</p>
            <p className="font-kh-light">This is KH Interference Light 12</p>
            <p className="font-kh-regular">This is KH Interference Regular</p>
            <p className="font-kh-bold">This is KH Interference Bold 12</p>
        </div>
      </div>

      
      <div className="mt-8 p-4 border rounded-lg bg-gray-50">
        <p className="formula-medium text-xl">
          For comparison, here's a mixed example with
          <span className="formula-bold"> bold text </span>
          and <span className="formula-italic">italic text</span>
          in a single paragraph.
        </p>
      </div>
    </div>
  );
}

export default FontExample;
