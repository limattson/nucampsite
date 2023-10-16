import { Navbar, NavbarBrand } from 'reactstrap';
import NucampLogo from '../app/assets/img/logo.png';

const Header = () => {
    return (
        //place NavBar Header component here
        // you
        <Navbar dark color='primary' sticky='top' expand='md'>

            <NavbarBrand href='/'>
                <img src={NucampLogo} alt='nucamp logo' className='float-start' />
            </NavbarBrand>
        </Navbar>
    )
}

export default Header;