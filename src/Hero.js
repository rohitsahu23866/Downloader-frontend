import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import ProgressIndicator from './ProgressIndicator';

const Hero = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [progress, setProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);

 // Example of an API call in your React app
const handleDownload = async () => {
    try {
      const response = await fetch('https://downloader-backend-t4xz.onrender.com/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: videoUrl }),
      });
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'video.mp4'; // Default name for the downloaded file
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-center" id="Home">
      <div>
        <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
          <span className="primary-color">Welcome to The</span> <br />
          <TypeAnimation
            sequence={["Video Downloader", 3000, "", 1000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-white sm:text-lg my-6 lg:text-xl">
          You can download any YouTube video. Just paste the link down below.
        </p>
        <div className="my-8">
        <input
            type="text"
            placeholder="Enter YouTube video URL"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            className="px-4 py-2 rounded-lg mr-4 text-lg w-full md:w-auto"
            style={{ maxWidth: '600px' }}
            />


          <button
            onClick={handleDownload}
            className="px-6 py-3 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white"
          >
            Download
          </button>
        </div>
      </div>

      {isDownloading && <ProgressIndicator progress={progress} />}
    </div>
  );
};

export default Hero;
