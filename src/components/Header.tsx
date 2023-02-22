import styles from './Header.module.css';

import logo from '../assets/toDo-logo.svg';

export function Header() {

  return (
    <header className={styles.headerContainer}>
      <img src={logo} alt="Logotipo ToDo" />
    </header>
  )
};

