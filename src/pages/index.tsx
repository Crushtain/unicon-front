import styles from '../styles/Home.module.css';
import React from "react";
import Link from 'next/link';


function HomePage() {
  return <div className={styles.container}>

    <h1>Привет студент</h1>
    <Link href='/projects' className={styles.btn}>Активные проекты</Link>

  </div>

}

export default HomePage
