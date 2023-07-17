import React, { useState } from 'react';

interface ArtWorkProps {
  src: string;
}

const ArtWork: React.FC<ArtWorkProps> = ({ src }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div 
      onMouseOver={() => setShowOverlay(true)} 
      onMouseOut={() => setShowOverlay(false)} 
      style={{ position: 'relative' }}
    >
      <img src={src} alt="" />
      {showOverlay && <div style={{ position: 'absolute', top: 0, left: 0 }}>Overlay content</div>}
    </div>
  );
}

export default ArtWork;
