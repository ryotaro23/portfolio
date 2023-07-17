import React from 'react';

function VideoBackground() {
  return (
    <div>
      <video style={{ width: '100%', height: '100vh' }} autoPlay loop muted>
        <source src="/STG_flash.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoBackground;
