import "./Navbar.css";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

function Navbar(props) {
    const links= props.links;
    return (
        <nav>
            <div>
                <RocketLaunchIcon/>

                <h2 >Logo</h2>
                <h2>{props.header}</h2>
            </div>
           
        <div>
           {
           links.map((link) => (
            <button key ={link.id}>
                <a href="{link.link}">{link.text}</a>
            </button>
           ))
           } 
        </div>

        </nav>
    );
}

export default Navbar;