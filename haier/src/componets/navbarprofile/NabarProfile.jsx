import React from 'react'
import './navbarprofile.css'
import users from '../../assets/user.png'
import useDropdown from '../useDropdown'
import ProfileContent from '../profilecontent/ProfileContent'
import user from '../../assets/user.png'
import orders from "../../assets/orders-icon.png";
import watchlist from "../../assets/watchlist-icon.png";
import settings from "../../assets/settings.png";
import community from "../../assets/site-community.png";


const NabarProfile = () => {
  const { open, setOpen, menuRef } = useDropdown();

  return (
    <div>
      <div className="navbar-profile-photo" ref={menuRef}>
        <img
          src={user}
          alt="Profile photo"
          className="Profile-photo"
          onClick={() => setOpen(!open)}
        />
      </div>

      {open && (
          <div className="dropmenu">
            <ProfileContent contentLogo={users} text="Account" />
            <ProfileContent contentLogo={orders} text="Orders" />
            <ProfileContent contentLogo={watchlist} text="Watchlist" />
            <ProfileContent contentLogo={settings} text="Settings" />
            <ProfileContent contentLogo={community} text="Site Community" />
          </div>
        )}
      </div>
  );
};

export default NabarProfile