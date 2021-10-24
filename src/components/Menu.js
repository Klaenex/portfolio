import React from "react"
import { NavLink,Link } from "react-router-dom"
const Menu = () => {
  return (
    <nav className='menu'>
      <h1 className='title title_menu'>
        <Link className='link link_title' to='/'>Cuozzo<br/>Vincenzo</Link>
      </h1>
      <div className='wrapper wrapper_menu'>
        <NavLink to='#project' id='project' className='link link_menu' activeClassName="link-active">Project</NavLink>
        <NavLink to='/' className='link link_menu' activeClassName="link-active">About</NavLink>
      </div>
    </nav>
  )
}

export default Menu
