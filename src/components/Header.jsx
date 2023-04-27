import logo from '../assets/images/logo.svg';

const Header = () => {
    return(
        <div className='header-container'>
            <div className='header'>
                <img src={logo}/>
                <div className='header__buttons'>
                    <button>Features</button>
                    <button>Team</button>
                    <button>Sign In</button>
                </div>

            </div>
        </div>
    )
};

export default Header;