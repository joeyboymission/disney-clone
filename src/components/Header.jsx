import { useState } from "react";

// Reference other components and packages
import HeaderItem from "./HeaderItem";

// Image and Logo import
import Logo from "../images/disneyp_logo.png";
import Profile from "../images/profile.png";
import {
  House,
  Search,
  Star,
  PlayCircle,
  Tv,
  EllipsisVertical,
} from "lucide-react";

function Header() {
  const [toggle, setToggle] = useState(false);

  // Menu items
  const menu = [
    { name: "HOME", icon: <House /> },
    { name: "SEARCH", icon: <Search /> },
    { name: "WATCHLIST", icon: <Star /> },
    { name: "ORIGINALS", icon: <PlayCircle /> },
    { name: "MOVIES", icon: <Tv /> },
  ];

  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex items-center gap-10">
        <img
          src={Logo}
          alt="Disney+ Logo"
          className="w-[80px] md:w-[115px] object-cover border-white"
        />

        <div className="hidden md:flex gap-10">
          {menu.map((item, index) => (
            <HeaderItem key={index} name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-10">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem key={index} name={""} Icon={item.icon} />
          )}
        </div>

        <div className="md:hidden" onClick={() => setToggle(!toggle)}>
          <HeaderItem name={""} Icon={<EllipsisVertical />} />
          {toggle ? <div className="absolute mt-3 bg-[#121417] border-gray-700 border-[1px] px-4 py-3">
            {menu.map(
              (item, index) =>
                index > 2 && (
                  <HeaderItem key={index} name={item.name} Icon={item.icon} />
                )
            )}
          </div> : null}
        </div>
      </div>
      <img src={Profile} className="w-[40px] rounded-full"></img>
    </div>
  );
}

export default Header;

