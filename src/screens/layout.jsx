import { Outlet } from 'react-router-dom';
import NavBar from '../components/nav_bar/nav_bar';

const Layout = () => {
    return (

        <div className="d-flex flex-column align-items-start bg-dark px-5">
            <NavBar />
            <Outlet />
        </div>

    )
}

export default Layout;
