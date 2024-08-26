import React from 'react';
import PropTypes from 'prop-types';

const Lightbox = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative max-h-[800px] overflow-y-auto w-2/3 my-60">
        <img src={image} alt="Lightbox" className="max-w-full max-h-full" />
        <button
          onClick={onClose}
          className="absolute top-[10px] w-[50px] h-[50px] border border-solid border-[1px] border-[#000] right-4 text-black text-2xl bg-white  rounded-full p-2"
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
