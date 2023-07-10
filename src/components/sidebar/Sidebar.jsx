import "./sidebar.css"

import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">Admin dashboard</span>
            </div>
            <hr />
            <div className="center">
                <ul >
                    <li>
                        <DashboardIcon />
                        <span>Dashboard</span>
                    </li>
                    <li>
                        < PersonIcon />
                        <span>Users</span>
                    </li>
                    <li>
                        <span>Products</span>
                    </li>
                    <li>
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon />
                        <span>Delivery</span>
                    </li>
                    <li>
                        <span>Status</span>
                    </li>
                    <li>
                        < NotificationsActiveIcon />
                        <span>Notifications</span>
                    </li>
                    <li>
                        <span>System Health</span>
                    </li>
                    <li>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon />
                        <span>Settings</span>
                    </li>
                    <li>
                        <span>Profile</span>
                    </li>
                    <li>
                        <span>Logout</span>
                    </li>

                </ul>
            </div>
            <div className="bottom">color options</div>
        </div>
    )
}
export default Sidebar