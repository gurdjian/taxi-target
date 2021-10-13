import React from 'react'
import style from './main.module.css'
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import { Avatar } from '@material-ui/core';

function Main() {
  return (
    <div className={style.background}>
      {/* <img className={style.fon} src="https://www.buhonline.ru/Files/Modules/Publication/13778_o_l_2x.webp?t=1534408192" alt="fon"/> */}
      <h2 className={style.title}>Taxi-target - chtoto pridumat</h2> <br />
      <p className={style.text}>
        Taxi-target - приложение, которое создано для транслирования рекламных видеороликов на экранах, размещенных на автомобилях службы такси.
      </p> <br />
      <p className={style.text}>
        Ранжирование видеороликов будет осуществляться по комбинации геолокации, коэффициента качества, статуса рекламодателя, таргетингу, времени трансляции и т.д. На экран будет попадать видео с наилучшим сочетанием показателей.
      </p>
      <footer className={style.footer}>
        <Avatar style={{ backgroundColor: '#0066CC', width: '30px', height: '30px' }}>
          <LocalTaxiIcon />
        </Avatar>
        <p className={style.otstupy}>Elbrus Bootcamp © 2021</p> 
      </footer>
    </div>
  )
}

export default Main
