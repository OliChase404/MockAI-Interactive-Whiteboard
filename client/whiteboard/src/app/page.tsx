'use client'
import styles from "./page.module.css";
import { Tldraw } from "tldraw";
import './index.css'

function Canvas() {


  return (
    <main className={styles.main}>
      <div style={{ position: 'fixed', inset: 150 }}>
        <Tldraw />
      </div>
      <div>
        footer
      </div>
    </main>
  )
}


export default Canvas;