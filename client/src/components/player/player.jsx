import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectForceIdx,
  selectSongToPlay,
} from '../../redux/player/player.selector';
import Controls from '../controls/controls.jsx';
import './player.scss';

const Player = ({ song, idx }) => {
  const musicRef = React.createRef(null);
  const [ref, setRef] = useState(musicRef);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [curSong, setCurSong] = useState(0);
  const [nextSong, setNextSong] = useState(curSong);

  useEffect(() => {
    setNextSong(() => {
      if (curSong + 1 > song.length - 1) {
        return 0;
      } else {
        return curSong + 1;
      }
    });
  }, [curSong, song.length, currentTime, duration]);

  useEffect(() => {
    musicRef.current.onended = () => {
      SkipSong(true);
    };
  });

  useEffect(() => {
    if (idx !== null) {
      setCurSong(idx);
    }
  }, [idx]);

  const SkipSong = (forwards = true) => {
    if (forwards) {
      setCurSong(() => {
        let temp = curSong;
        temp++;

        if (temp > song.length - 1) {
          temp = 0;
        }
        return temp;
      });
    } else {
      setCurSong(() => {
        let temp = curSong;
        temp--;

        if (temp < 0) {
          temp = song.length - 1;
        }
        return temp;
      });
    }
  };

  return (
    <div className='player'>
      <audio
        id='myAudio'
        ref={musicRef}
        src={song[curSong] ? song[curSong].src : ''}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration);
          setRef(e.currentTarget);
          setCurrentTime(e.currentTarget.currentTime);
        }}
      ></audio>
      
      {song.length > 0 ? (
        <Controls
          musicRef={ref}
          music={musicRef}
          song={song[curSong]}
          duration={duration}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          SkipSong={SkipSong}
          nextSong={nextSong}
        />
      ) : (
        <div className='select-music-to-play'>select music to Play</div>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  song: selectSongToPlay,
  idx: selectForceIdx,
});

export default connect(mapStateToProps)(Player);
