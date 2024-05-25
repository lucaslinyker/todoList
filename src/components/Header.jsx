import rocketLogo from '/rocket.svg'

import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocketLogo} alt="A logo of a blue rocket" />
      <h1 className={styles.title}>
        to
        <span>do</span>
      </h1>
    </header>
  )
}
