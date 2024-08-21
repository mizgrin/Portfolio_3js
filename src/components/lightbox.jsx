import React from 'react';
import PropTypes from 'prop-types';

const Lightbox = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative">
        <img src={image} alt="Lightbox" className="max-w-full max-h-full" />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl bg-gray-800 rounded-full p-2"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

Lightbox.propTypes = {
  image: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Lightbox;