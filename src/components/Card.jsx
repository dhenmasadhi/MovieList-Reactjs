import React, { useState } from "react";
import Modal from "./Modal";

const VITE_APP_BASEIMGURL = "https://image.tmdb.org/t/p/w500";

const Card = ({ title, poster_path, vote_average, release_date, overview }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="flex flex-col items-start bg-white p-4 rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-2">{title}</h1>
      <img
        className="w-full object-cover mb-2 rounded-lg"
        src={VITE_APP_BASEIMGURL + poster_path}
        alt="Poster"
      />
      <button
        className="mx-auto bg-gray-500 rounded-md px-5 py-2"
        type="button"
        onClick={handleShow}
      >
        View More
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        title={title}
        vote_average={vote_average}
        release_date={release_date}
        overview={overview}
        poster_path={poster_path}
      />
    </div>
  );
};

export default Card;
