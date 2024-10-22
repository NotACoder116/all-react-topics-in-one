import MoviePlaylist from "./MoviePlaylist";
import SongPlaylist from "./SongPlaylist";
import './MovieSong.css';
import { useDispatch } from "react-redux";
import { resetMovies, resetSongs } from "../store";
export default function ParentMovieSong() {
    const dispatch = useDispatch();

  const handleResetClick = () => {
    dispatch(resetSongs());
    dispatch(resetMovies());
  };

  return (
    <div className="movie-song-container container is-fluid m-5">
      <button onClick={() => handleResetClick()} className="px-2 py-2 text-zinc-100 rounded-md mb-4 bg-pink-400">
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}
