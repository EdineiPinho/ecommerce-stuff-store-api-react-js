import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../img/h-logo.jpg';

const Header = () => {
  return (
    <header>
      <nav className={styles.header + " animeUp"}>
        <NavLink to='/' end>
          <img src={logo} alt='Logo Hanek' />
        </NavLink>
        <ul>
          <li>
            <NavLink className={styles.link} to='/' end>Produtos</NavLink>
          </li>
          <li>
            <NavLink className={styles.link} to='contato'>Contato</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header