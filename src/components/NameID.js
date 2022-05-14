import '../membership-styling.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

const NameID = (props) => {
    return (
        <div>
            <div id='membership-container'>
                <ul id='membership-list'>
                    <li id="user-data">
                        <p className='mem-userNameID' style={{ fontSize: "2em" }}>
                            {props.name}
                        </p>
                        <p className='mem-userNameID'>User ID: {`${props.id}`}</p>
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