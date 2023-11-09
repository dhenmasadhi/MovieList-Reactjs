import { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

const VITE_APP_BASEURL =
  "https://api.themoviedb.org/3/movie/popular?api_key=473135977ef40bb7df401213ea4214cc";

const VITE_APP_BASESEARCHURL =
  "https://api.themoviedb.org/3/search/movie?api_key=473135977ef40bb7df401213ea4214cc&query=";

export default function HomePage() {
  const [movie, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(VITE_APP_BASEURL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  const searchMovie = async (e) => {
    e.preventDefault();
    try {
      const url = `${VITE_APP_BASESEARCHURL}${query}`;
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <Navbar
        searchMovie={searchMovie}
        changeHandler={changeHandler}
        query={query}
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 w-[80%] m-auto my-5">
        {movie.map((movieReq) => (
          <Card key={movieReq.id} {...movieReq} />
        ))}
      </div>
    </>
  );
}
