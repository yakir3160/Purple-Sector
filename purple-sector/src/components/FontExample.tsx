import React from 'react';

export default function FontExample() {
  return (
    <div className="space-y-6 p-8">
      <h2 className="text-2xl font-geist">Font Variants Examples</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl mb-2 font-formula-bold">Formula Sans</h3>
          <p className="font-formula">This is FormulaSans default</p>
          
          <div className="text-4xl ">
            <p className="font-formula-regular ">This is FormulaSans Regular (400)</p>
            <p className="font-formula-medium">This is FormulaSans Medium (500)</p>
            <p className="font-formula-bold ">This is FormulaSans Bold (700)</p>
            <p className="font-formula-italic">This is FormulaSans Italic</p>
          </div>
          
          <div className="space-y-2 mt-4">
            <p className="font-formula font-normal">FormulaSans with font-normal</p>
            <p className="font-formula font-medium">FormulaSans with font-medium</p>
            <p className="font-formula font-bold">FormulaSans with font-bold</p>
            <p className="font-formula italic">FormulaSans with italic</p>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl mb-2">Other Fonts</h3>
          <p className="font-geist">This is Geist Sans</p>
          <p className="font-mono">This is Geist Mono</p>
          <p className="font-orbitron">This is Orbitron</p>
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
