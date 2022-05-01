import '../homepage.css';
import GymBG from '../assets/gym-bg.jpg';
import NavBar from '../components/NavigationBar';

const Home = () => {
    return ( 
        <div>
            <NavBar />
            <div className='image-section'></div>
            <div className='headline'>
                <p className='headline-head'>Gym Manager is live now!</p><br /><br />
                <p className='headline-text'>Information about your exercises, sessions,
                 subscription all in one place now</p>
                <button className='headline-button'>Learn More</button>
            </div>
        </div>
    );
}
 
export default Home;