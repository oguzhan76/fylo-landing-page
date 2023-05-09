import logo from '/logo.svg';

const Header = () => {
    return(
        <div className='header-container'>
            <div className='header'>
                <img src={logo}/>
                <div className='header__buttons'>
                    <button className='text-button'>Features</button>
                    <button className='text-button'>Team</button>
                    <button className='text-button'>Sign In</button>
                </div>
            </div>
        </div>
    )
};

export default Header;