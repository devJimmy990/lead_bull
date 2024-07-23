import { UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Avatar } from "antd";
import DropDowmMenu from "../drop_down_menu";
// import "./DashboardNavbar.css"; // Import the CSS file

export default function DashboardNavbar() {
    const [service, setService] = useState('Appointment');
    return (
        <div className="dashboard-navbar col-12 d-flex justify-content-end align-items-center p-3">
            <DropDowmMenu
                value={service}
                className="w-25 h-100"
                placeholder="Select a service"
                onSelect={(val) => setService(val)}
                options={[
                    { label: 'Appointment', value: '1' },
                    { label: 'Option 1', value: '2' },
                    { label: 'Option 2', value: '3' },
                    { label: 'Option 3', value: '4' },
                ]}
                hasSearch={true}
            />
            <Avatar size="large" icon={<UserOutlined />} style={{ cursor: 'pointer', marginLeft: '16px' }} />
        </div>
    );
}
