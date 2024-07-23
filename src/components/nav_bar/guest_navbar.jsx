import { Link } from 'react-router-dom';
import styles from './style.module.css';
import logo from './../../assets/logo.png'; // Adjust the path based on your folder structure

const NavBar = () => {
    return (
        <div className="w-100 col-12 d-flex justify-content-between align-items-center z-2 mx-3 py-3">
            <div className={styles.logo}>
                <img src={logo} alt="Logo" height={100} />
            </div>
            <div className="d-flex gap-3 text-white">
                <Link to="/" className='text-white text-decoration-none fs-5'>Home</Link>
                <Link to="/about" className='text-white text-decoration-none fs-5'>About</Link>
                <Link to="/services" className='text-white text-decoration-none fs-5'>Services</Link>
                <Link to="/support" className='text-white text-decoration-none fs-5'>Support</Link>
            </div>
            <div className={`d-flex gap-3`}>
                <button className={`${styles.login} h-50`}>Login</button>
                <button className={`${styles.contact} h-50`}>Contact Us</button>
            </div>
        </div>
    );
};

export default NavBar;
