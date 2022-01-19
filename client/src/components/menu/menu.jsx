import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import MusicCard from '../card/card.jsx';
import { selectMusicForPreview } from './../../redux/music/music.selector';
import './menu.scss';

const Menu = ({ songs }) => {
  return (
    <div className='menu'>
      {songs.map(({ id, ...otherProps }) => (
        <MusicCard key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  songs: selectMusicForPreview,
});

export default connect(mapStateToProps)(Menu);
