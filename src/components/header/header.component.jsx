import React from 'react';
import { Link,useLocation } from 'react-router-dom';
import './header.css'

const Header = () => {
  const location=useLocation();
  return (
    <div className="header">
      <h1> React ToDo App</h1>
      <nav>
        <Link
        className={location.pathname ==='/add' ? 'active':''}
          to="/add">
          Add Item

        </Link>

        <Link
                className={location.pathname ==='/view' ? 'active':''}

          to="/view">
          View Item
        </Link>
      </nav>
    </div>
  )
}

export default Header


