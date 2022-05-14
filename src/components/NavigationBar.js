import { Link } from 'react-router-dom';
import Logo from '../assets/barbell.png';

const NavBar = () => {
    return (
        <div className="navigationBar">
            <ul className="navigationList">
                <li>
                    <ul className="logoList">
                        <li id='home-logo'><img src={Logo} /></li>
                        <li id='home-title'>Gym Manager</li>
                    </ul>
                </li>
                <li>
                    <ul className="buttonList">
                        <li><Link className='sign-buttons' to="/trainer/login">Sign in as a trainer</Link></li>
                        <li><Link className='sign-buttons' to="/login">Sign in as a trainee</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;