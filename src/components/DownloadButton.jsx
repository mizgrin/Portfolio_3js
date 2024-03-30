import React from 'react';

const DownloadButton = () => {
  const downloadCV = () => {
    window.open('https://github.com/your-username/your-repo/raw/main/cv.pdf', '_blank');
  };

  return (
    <button
      onClick={downloadCV}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Download CV
    </button>
  );
};

export default DownloadButton;
