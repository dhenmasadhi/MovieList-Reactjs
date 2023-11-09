import React from "react";

const VITE_APP_BASEIMGURL = "https://image.tmdb.org/t/p/w500";

const Modal = ({
  show,
  onHide,
  title,
  vote_average,
  release_date,
  overview,
  poster_path,
}) => {
  return (
    <>
      <div
        className={`m-auto fixed z-10 overflow-y-auto inset-0 w-full bg-gray-500 bg-opacity-80 ${
          show ? "flex" : "hidden"
        }`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="bg-white p-4 rounded-lg shadow-md max-w-[40vw] mx-auto">
          <button
            className="absolute top-0 right-0 m-4 text-white bg-red-600 rounded-md px-4"
            onClick={onHide}
          >
            Close
          </button>
          <img
            className="m-auto object-cover mb-2 rounded-lg max-h-[50vh]"
            src={VITE_APP_BASEIMGURL + poster_path}
            alt="Poster"
          />
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <h4>ImDb: {vote_average}</h4>
          <h4>Release Date: {release_date}</h4>
          <div className="mt-2">
            <h4>Overview</h4>
            <p>{overview}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
