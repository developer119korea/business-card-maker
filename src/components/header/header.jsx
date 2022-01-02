import React from 'react';
import styles from './header.module.css';
import { useNavigate } from "react-router-dom";

const Header = ({ onLogout }) => {
  const navigate = useNavigate();

  const onSignout = (event) => {
    onLogout()
      .then(() => {
        console.log("Logined");
        navigate('/');
      });
  };

  return (
    <header className={styles.header} >
      {
        onLogout && <button className={styles.logout} onClick={onSignout}>Logout</button>
      }
      <img className={styles.logo} src="/images/logo.png" alt="logo" />
      <h1 className={styles.title}> Business Card Maker</h1>
    </header >
  );
}

export default Header;
