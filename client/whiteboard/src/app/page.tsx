'use client'
import styles from "./page.module.css";
import { Tldraw } from "tldraw";
import './index.css'
import io from 'socket.io-client'

const socket = io('http://localhost:5000')

socket.on('connect', () => {
  console.log('connected to server')
})

socket.on('disconnect', () => {
  console.log('disconnected from server')
})

socket.on('drawing', (data) => {
  console.log('Received drawing: ', data)
})

function handleNewDrawing(data: any) {
  socket.emit('drawing', data)
}

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