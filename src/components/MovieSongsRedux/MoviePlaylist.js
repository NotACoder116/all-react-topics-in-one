import { useDispatch, useSelector } from "react-redux";
import { createRandomMovie } from "../GenerateFakeSongsMusic/GenerateSongMusic";
import { addMovie, removeMovie } from "../store";

function MoviePlaylist() {
  const dispatch = useDispatch();
  const moviePlaylist = useSelector(state => state.movies);

  const handleMovieAdd = (movie) => {
    dispatch(addMovie(movie));
  };
  const handleMovieRemove = (movie) => {
    dispatch(removeMovie(movie));
  };

  const renderedMovies = moviePlaylist.map((movie) => {
    return (
      <li key={movie}>
        {movie}
        <button
          onClick={() => handleMovieRemove(movie)}
          className="font-medium bg-red-600 py-3 px-5 rounded-md text-white"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="font-medium">Movie Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleMovieAdd(createRandomMovie())}
            className="border rounded-md py-4 px-4 bg-cyan-500 text-zinc-100"
          >
            + Add Movie to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default MoviePlaylist;
