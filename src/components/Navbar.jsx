const Navbar = ({ searchMovie, changeHandler, query }) => {
  return (
    <>
      <div className="bg-gray-900 text-white p-5 flex justify-between">
        <h1 className="text-2xl font-bold">Movie List</h1>
        <form className="flex justify-between gap-3" onSubmit={searchMovie}>
          <input
            type="search"
            placeholder="Movie Search"
            aria-label="search"
            className="text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            name="query"
            value={query}
            onChange={changeHandler}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default Navbar;
