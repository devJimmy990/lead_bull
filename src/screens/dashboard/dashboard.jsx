import { Link, Outlet } from "react-router-dom";
import styles from './style.module.css';

export default function DashboardScreen() {
    return (
        <div className={`${styles.main} col-12 d-flex align-items-center`}>
            <div className={`${styles.container} col-2 justify-content-evenly align-items-center d-flex flex-column border-0 rounded-4 bg-dark gap-3`}>
                <Link to="/user/:id" className='text-white text-decoration-none fs-5'>Overview</Link>
                <Link to="/user/:id/leads" className='text-white text-decoration-none fs-5'>Leads</Link>
                <Link to="/user/:id/sales" className='text-white text-decoration-none fs-5'>Sales</Link>
                <Link to="/user/:id/tickets" className='text-white text-decoration-none fs-5'>Tickets</Link>
                <Link to="/user/:id/tasks" className='text-white text-decoration-none fs-5'>Tasks</Link>
                <Link to="/user/:id/services" className='text-white text-decoration-none fs-5'>Services</Link>
            </div>
            <div className="col-9 text-center fs-1 h-100 overflow-hidden">
                <Outlet />
            </div>
        </div>
    );
}


