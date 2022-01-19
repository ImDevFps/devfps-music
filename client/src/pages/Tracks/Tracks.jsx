import React from 'react';
import { connect } from 'react-redux';
import { selectTracks } from './../../redux/music/music.selector';
import './Tracks.scss'
import TrackItem from './../../components/trackItem/TrackItem';

const TracksPage = ({ singer }) => {
  const { artist, img, tracks } = singer;
  return (
    <div className='singer-page'>
      <div className='singer-banner'>
        <img className='singer-img' src={img} alt={artist} />
        <h2 className='singer-artist'>{artist}</h2>
      </div>
      <div className='singer-songs'>
        {tracks.map((song, idx) => (
          <TrackItem key={song.id} song={song} idx={idx + 1} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  singer: selectTracks(ownProps.match.params.singerId)(state),
});

export default connect(mapStateToProps)(TracksPage);
