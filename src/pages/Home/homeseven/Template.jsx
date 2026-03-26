import React from 'react'
import style from './template.module.css'
import circle from './pic/text-pattern.png'
const Template = () => {
  return (
    <>
    <div className={style.total}>
    <div className={style.main}>
        <div className={style.circ}>
        <div className={style.circle}><img src={circle}alt="" /></div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Template