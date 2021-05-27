import {Link} from "react-router-dom"

function Navbar({changeTrigger}) {
    return (
        <div className='navbar'>
            <div>
                <Link to='/' >Vartotojai</Link>
                <Link to='/create_user'>Kurti vartotoją</Link>
            </div>

        </div>
    );
}

export default Navbar;