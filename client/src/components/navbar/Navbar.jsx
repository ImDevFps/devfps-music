
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='icon'>
        <Link to='/' className='logo'>
          <div>
            <img src='/favicon.ico' alt="" />
          </div>
          <span className='nav-span'>DevMusic</span>
        </Link>
      </div>
      <ul>
        <li>
          <Link className='nav-link' to='/'>
            <div>
              <HomeIcon />
            </div>
            <span className='nav-span'>Home</span>
          </Link>
        </li>
        <li>
          <Link className='nav-link' to='/search'>
            <div>
              <SearchIcon />
            </div>
            <span className='nav-span'>Search</span>
          </Link>
        </li>
        <li className='playlist'>
          <Link className='nav-link' to='/'>
            <div>
              <FileDownloadIcon className='playlist-icon' />
            </div>
            <span className='nav-span'>Downloaded</span>
          </Link>
        </li>
        <li>
          <Link className='nav-link' to='/liked'>
            <div className='liked'>
              <FavoriteRoundedIcon className='nav-liked'/>
            </div>
            <span className='nav-span'>Liked Songs</span>
          </Link>
        </li>
        <hr />
      </ul>
    </div>
  );
};

export default Navbar;
