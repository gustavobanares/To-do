import React from 'react'

import styles from './Header.module.css'


const Header = () => {
  return (
    <div>
    <header className={styles.header}>
      <h1>React + TS To do</h1>
    </header>
    </div>
  )
}

export default Header