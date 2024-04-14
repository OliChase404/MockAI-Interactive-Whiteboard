'use client'
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import './index.css'
import WhiteBoard from "./WhiteBoard";

function Home() {

  return (
    <main className={styles.main}>
      <div style={{ position: 'fixed', inset: 150 }}>
        <WhiteBoard />
      </div>
      <div>
        put stuff here
      </div>
    </main>
  )
}


export default Home;
