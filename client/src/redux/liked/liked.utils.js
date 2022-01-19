export const addSongToLiked = (likedSongs, songToAdd) => {
  const existingSongs = likedSongs.find(
    (likedSong) => likedSong.song.id === songToAdd.song.id
  );
  if (existingSongs) {
    return likedSongs.map((likedSong) =>
      likedSong.song.id === songToAdd.song.id ? { ...likedSong } : likedSong
    );
  }
  return [...likedSongs, { ...songToAdd }];
};

export const removeSongFromLiked = (likedSongs, songToRemove) => {
  const existingSongs = likedSongs.find(
    (likedSong) => likedSong.song.id === songToRemove.song.id
  );
  if (existingSongs) {
    return likedSongs.filter((likedSong) => likedSong.song.id !== songToRemove.song.id);
  }
  return likedSongs.map((likedSong) =>
    likedSong.song.id === songToRemove.song.id ? { ...likedSong } : likedSong
  );
};
