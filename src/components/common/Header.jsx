import { Menu } from "@mui/icons-material"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import { navlink } from "../data/dummydata"

export const Header = () => {
  const [responsive, setResponsive] = useState(false);

  const handleLinkClick = () => {
    if (responsive) {
      setResponsive(false);
    }
  }

  return (
    <header>
      <div className='container flexsb'>
        <Link to="/" className='logo'>
          Nass smith
        </Link>
        <div className={responsive ? "hideMenu" : "nav"}>
          {navlink.map((links, i) => (
            <Link to={links.url} key={i} data-aos='zoom-in-left' onClick={handleLinkClick}>
              {links.text}
            </Link>
          ))}
        </div>
        <button className='toggle' onClick={() => setResponsive(!responsive)}>
          <Menu className='icon' />
        </button>
      </div>
    </header>
  )
}
