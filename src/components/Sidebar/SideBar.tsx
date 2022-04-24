import React from 'react'
import './Sidebar.scss'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PersonOutline from '@mui/icons-material/PersonOutline';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import AddToQueueOutlinedIcon from '@mui/icons-material/AddToQueueOutlined';

const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
          <span className="logo">
            Alpha Admin
          </span>
      </div>
      <hr />
      <div className="center">
          <ul>
            <p className="title">
              MAIN
            </p>
            <li>
                <DashboardOutlinedIcon  className="icon"/>
               <span>Dashboard</span>
            </li>
            <p className="title">LIST</p>
            <li>
              <PersonOutline className="icon"/>
                <span>Users</span>
            </li>
            <li>
                <StoreOutlinedIcon className="icon"/>
                <span>Products</span>
            </li>
            <li>
                <CreditCardOutlinedIcon  className="icon"/>
                <span>Orders</span>
            </li>
            <li>
                <LocalShippingOutlinedIcon className="icon"/>
                <span>Delivery</span>
            </li>
            <p className="title">USEFUL</p>
            <li>
                <QueryStatsOutlinedIcon  className="icon"/>
                <span>Stats</span>
            </li>
            <li>
                <NotificationsActiveOutlinedIcon className="icon"/>
                <span>Notifications</span>
            </li>
            <p className="title">SERVICES</p>
            <li>
                <AddToQueueOutlinedIcon className="icon"/>
                <span>System</span>
            </li>
            <li>
              <PsychologyOutlinedIcon className="icon"/>
                <span>Logs</span>
            </li>
            <li>
              <SettingsOutlinedIcon className="icon"/>
                <span>Settings</span>
            </li>
            <p className="title">USER</p>
            <li>
              <AccountCircleOutlinedIcon className="icon"/>
                <span>Profile</span>
            </li>
            <li>
              <LogoutOutlinedIcon className="icon"/>
                <span>Logout</span>
            </li>
          </ul>
      </div>
      <div className="bottom">
        <div className="colorOption">

        </div>
        <div className="colorOption">
          
          </div>
      </div>
    </div>
  )
}

export default SideBar