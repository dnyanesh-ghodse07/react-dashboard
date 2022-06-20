import React from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import "./Widgets.scss";

type Iprops = {
  type: string;
}

const Widget:React.FC<Iprops> = ({type}) => {

  let data;
  //temp
  const amount = 100;
  const diff = 20;
  switch (type) {
    case "users":
        data = {
          title: "USERS",
          isMoney: false,
          link: "See all users",
          icon: <PersonOutlineOutlinedIcon className="icon" style={{color: "crimson", backgroundColor: "rgba(217,0,0,0.3)"}}/>
        }
      break;
      case "order":
        data = {
          title: "ORDER",
          isMoney: false,
          link: "View all orders",
          icon: <ShoppingCartOutlinedIcon className="icon" style={{color: "blue", backgroundColor: "rgba(27,20,200,0.3)"}} />
        }
      break;
      case "earnings":
        data = {
          title: "EARNINGS",
          isMoney: true,
          link: "See all users",
          icon: <MonetizationOnOutlinedIcon className="icon" style={{color: "green", backgroundColor: "rgba(27,200,0,0.3)"}} />
        }
      break;
      case "balance":
        data = {
          title: "BALANCE",
          isMoney: true,
          link: "See details",
          icon: <AccountBalanceWalletOutlinedIcon className="icon" style={{color: "purple", backgroundColor: "rgba(217,0,0,0.3)"}} />
        }
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data?.title}</span>
        <span className="counter">{data?.isMoney && "$"} {amount} </span>
        <span className="link">{data?.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
            <KeyboardArrowUpIcon />
            {diff}
        </div>
          {data?.icon}
      </div>
    </div>
  );
};

export default Widget;
