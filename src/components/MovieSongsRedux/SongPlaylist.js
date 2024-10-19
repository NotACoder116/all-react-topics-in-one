import { useDispatch, useSelector } from "react-redux";
import { createRandomSong } from "../GenerateFakeSongsMusic/GenerateSongMusic";
import { addSong, removeSong } from "../store";


function SongPlaylist() {
    const dispatch =  useDispatch();
  // To Do:
  // Get list of songs
  const songPlaylist = useSelector(state=> {
    return state.songs
  });

  const handleSongAdd = (song) => {
    dispatch(addSong(song));
  };
  const handleSongRemove = (song) => {
    dispatch(removeSong(song));
  };

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song}>
        {song}
        <button
          onClick={() => handleSongRemove(song)}
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
        <h3 className="font-medium">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="border rounded-md py-4 px-4 bg-cyan-500 text-zinc-100"
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
