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
                        <li><button className='sign-buttons'>Sign in as a trainer</button></li>
                        <li><button className='sign-buttons'>Sign in as a trainee</button></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
 
export default NavBar;