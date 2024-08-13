import React from "react";
import clockImg from "../assets/images/clock.png";
import userImg from "../assets/images/user.jpg";
import FocusIcon from "../assets/icons/FocusIcon";
import Hourglass from "../assets/icons/Hourglass";
import Stopwatch from "../assets/icons/Stopwatch";
import Earth from "../assets/icons/Earth";
import Bell from "../assets/icons/Bell";
import Gear from "../assets/icons/Gear";
import { Link, useLocation } from "react-router-dom";
const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col justify-between gap-5 bg-[#202020] w-[281px] min-h-screen p-1 select-none">
      <div className="flex flex-col gap-2">
        <header className="flex items-center gap-3 px-3 py-1 text-sm select-none">
          <img src={clockImg} alt="" className="h-[14px]" />
          Clock
        </header>
        <Link className={`sidebar_comp ${location.pathname === "/focus-session" ? "active" : null}`}
          to="/focus-session">
          <FocusIcon />
          Focus sessions
        </Link>
        <Link
          className={`sidebar_comp ${location.pathname === "/timer" ? "active" : null}`}
          to="/timer"
        >
          <Hourglass />
          Timer
        </Link>
        <Link
          className={`sidebar_comp ${location.pathname === "/alarm" ? "active" : null}`}
          to="/alarm"
        >
          <Bell />
          Alarm
        </Link>
        <Link
          className={`sidebar_comp ${location.pathname === "/" ? "active" : null}`}
          to="/"
        >
          <Stopwatch />
          Stopwatch
        </Link>
        <Link
          className={`sidebar_comp ${
            location.pathname === "/world-time" ? "active" : null
          }`}
          to="world-time"
        >
          <Earth />
          World clock
        </Link>
      </div>
      <div className="flex flex-col gap-1">
        <div className="sidebar_comp">
          <img src={userImg} alt="" className="h-[20px] rounded-full" />
          User
        </div>
        <div className="sidebar_comp">
          <Gear />
          Settings
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
