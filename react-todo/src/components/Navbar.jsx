// import { useNavigate } from "react-router-dom";
import '../styles/navbar.css';

export default function Navbar ({ data }) {
    return (
        <div>
            <nav>
                <h3 className='title'>To Do Dev</h3>

                <div className='end'>
                    <h4>{data}</h4>

                    <div className='button'>
                        <button id='addButton'>Add</button>
                        <button id='settingsButton'>Settings</button>
                    </div>
                </div>
            </nav>
        </div>
    )    
}