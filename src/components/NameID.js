import '../membership-styling.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

const NameID = ({ userData }) => {
    return ( 
        <div>
            <div id='membership-container'>
                <ul id='membership-list'>
                    <li id="user-data">
<<<<<<< HEAD
                        <p className='mem-userNameID' style={{ fontSize: "2em" }}>
                            {props.name}
                        </p>
                        <p className='mem-userNameID'>User ID: {`${props.id}`}</p>
=======
                        <p className='mem-userNameID' style={{fontSize: "2em"}}>
                            {`${userData.firstName} ${userData.lastName}`}
                        </p>
                        <p className='mem-userNameID'>User ID: {`${userData.id}`}</p>
>>>>>>> f4e4cc6b0c882bebd67866bdc4142e50ec54b048
                    </li>
                    <li>
                        <FontAwesomeIcon icon={solid('circle-user')} size="6x" />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NameID;