import logo from '../../resources/logo.svg';
import search from '../../resources/1.svg';
import circle from '../../resources/2.svg';
import app from '../../resources/3.svg';

import './header.scss';

const Header = () =>  {
  return (
    <header className="header">
        <div className="header__wrapper">
			<img src={logo} className="header__logo" />
            <ul className="header__nav">
                <li className="header__nav-item">Movies</li>
                <li className="header__nav-item">TV shows</li>
                <li className="header__nav-item">Animations</li>
            </ul>
            <div className="header__icons">
                <div className="header__icons-item"><img src={search} alt="" /></div>
                <div className="header__icons-item"><img src={circle} alt="" /></div>
                <div className="header__icons-item"><img src={app} alt="" /></div>
            </div>
        </div>
    </header>	
  )
}
export default Header;