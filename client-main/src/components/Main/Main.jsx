import React from 'react'
import style from './main.module.css'
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';
import 'swiper/swiper.min.css'

function Main() {
  return (
    <>
      <main className={style.background}>

        <div  className={style.content}>
        {/* <img className={style.fon} src="https://www.buhonline.ru/Files/Modules/Publication/13778_o_l_2x.webp?t=1534408192" alt="fon"/> */}
        <h2 className={style.title}>Taxi-target</h2>
        <div className={style.text}>
          <Swiper slidesPerView={1}  modules={[EffectFade]} effect="fade">
        <SwiperSlide>
          Taxi-target - приложение, которое создано для транслирования рекламных видеороликов на экранах, размещенных на автомобилях службы такси.
        </SwiperSlide>
        <SwiperSlide>
          Ранжирование видеороликов будет осуществляться по комбинации геолокации, коэффициента качества, статуса рекламодателя, таргетингу, времени трансляции и т.д. На экран будет попадать видео с наилучшим сочетанием показателей.
        </SwiperSlide>
        </Swiper>
        </div>
        <Link to="/Karta" className='button'>Поехали!</Link>
        </div>

      </main>
      <footer className={style.footer}>
      <Avatar style={{ backgroundColor: '#0066CC', width: '30px', height: '30px' }}>
        <LocalTaxiIcon />
      </Avatar>
      <p className={style.otstupy}>Elbrus Bootcamp © 2021</p> 
    </footer>
  </>
  )
}

export default Main
