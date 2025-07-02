import React from 'react';
import { Link } from 'react-router-dom';

function NavButton({time='', link='', text='', onMouseEnter, onMouseLeave}) {
  return (
    <Link to={link}>
      <div 
        className="nav-button text-link"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <p className="body-small" style={{margin:"0", lineHeight:'1.3rem'}}>{time}</p>
        <h3 className="h3" style={{margin:"0"}}>{text}</h3>
      </div>
    </Link>
  )
}

export default NavButton