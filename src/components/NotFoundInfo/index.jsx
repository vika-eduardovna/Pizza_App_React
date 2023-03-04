import React from 'react'
import s from './NotFoundBlock.module.scss'


export default function NotFoundBlock() {
  return (
    <div className={s.root}>
        <span>🙁</span>
        <br />
        <h1>Nothing found here...</h1>
    </div>
  )
}
