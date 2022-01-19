import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <div className='header'>
      <button className='user-btn'>
        <PersonOutlineOutlinedIcon />
      </button>
    </div>
  );
};

export default Header;
