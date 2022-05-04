import '../homepage.css';
import GymExer from '../assets/gym-exer.png';
import GymSubs from '../assets/gym-subs.png';

import NavBar from '../components/NavigationBar';
import HomeImage from '../components/HomeImage';
import Separator from 'src/components/Separator';
import HomeSection from 'src/components/HomeSection';
import HomeFooter from 'src/components/HomeFooter';

const Home = () => {
    const HomeSections = {
        Title: ["Exercises", "Subscription"],
        Paragraph: ["Here, you can mentor your exercises.", "You can check your subscription status."],
        Image: [GymExer, GymSubs]
    }
    
    return ( 
        <div>
            <NavBar />
            <HomeImage />
            <Separator />
            <HomeSection 
                Title={HomeSections.Title[0]} 
                Paragraph={HomeSections.Paragraph[0]}
                Image={HomeSections.Image[0]}
            />
            <Separator />
            <HomeSection 
                Title={HomeSections.Title[1]} 
                Paragraph={HomeSections.Paragraph[1]}
                Image={HomeSections.Image[1]}
            />
            <Separator />
            <HomeFooter />
        </div>
    );
}
 
export default Home;