import { Link } from 'react-router-dom';
import styles from './style.module.css';
import logo from './../../assets/logo.png'; // Adjust the path based on your folder structure

const NavBar = () => {
    return (
        <div className="w-100 d-flex justify-content-between align-items-center mx-3 py-3 z-2 col-12">
            <div className={styles.logo}>
                <img src={logo} alt="Logo" height={100} />
            </div>
            <div className="d-flex gap-3 text-white">
                <Link to="/" className='text-white text-decoration-none'>Home</Link>
                <Link to="/about" className='text-white text-decoration-none'>About</Link>
                <Link to="/services" className='text-white text-decoration-none'>Services</Link>
                <Link to="/support" className='text-white text-decoration-none'>Support</Link>
            </div>
            <div className={`d-flex gap-3`}>
                <button className={`${styles.login} h-50`}>Login</button>
                <button className={`${styles.signup} h-50`}>Sign Up</button>
            </div>
        </div>
    );
};

export default NavBar;
