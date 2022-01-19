import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import SearchItems from './../../components/SearchItems/SearchItems';
import { selectMusicForPreview } from './../../redux/music/music.selector';
import './Search.scss';
import ArtistCard from './../../components/artist-card/ArtistCard';

const Search = ({ songs }) => {
  const [searchField, setSearchFiled] = useState('*');
  const tracks = songs.map((track) => track.tracks).flat();

  const trackRes = tracks.filter((track) =>
    track.title.toLowerCase().includes(searchField.toLowerCase())
  );

  const artistRes = songs.filter((song) =>
    song.artist.toLowerCase().includes(searchField.toLowerCase())
  );

  const handleChange = (e) => {
    if (e.target.value === '') {
      setSearchFiled('*');
    } else {
      setSearchFiled(e.target.value);
    }
  };

  return (
    <div className='search-page'>
      <div className='search-box'>
        <SearchIcon className='search-box-icon' />
        <input
          type='search'
          placeholder='artist or songs'
          onChange={handleChange}
        />
      </div>
      {artistRes.length !== 0 ? <h2 className='search-artist'>Artist</h2> : ''}
      <div className='artist-result'>
        {artistRes.map((singer) => (
          <ArtistCard key={singer.id} singer={singer} />
        ))}
      </div>
      {trackRes.length !== 0 ? <h2 className='search-songs'>Songs</h2> : ''}
      <div className='search-result'>
        {trackRes.filter((item, idx) => idx < 7).map((item) => (
          <SearchItems key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  songs: selectMusicForPreview,
});

export default connect(mapStateToProps)(Search);
