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
        
        <div className={style.text}>
          <Swiper slidesPerView={1}  modules={[EffectFade]} effect="fade">
          <SwiperSlide>
          <h2 className={style.title}>Taxi-target</h2>   
            Занимаемся размещением рекламы на такси используя умные LED экраны. У нас выгодные тарифы. Расскажите о себе всему городу с помощью новейших технологий наружной рекламы на авто.
        </SwiperSlide>
              <SwiperSlide>
              <h2 className={style.title}>Что мы делаем и как это работает</h2>   
            Наше агентство Taxi-target устанавливает умные экраны на такси и корпоративные авто в Москве, предлагаем выгодные тарифы, а также предоставляем возможность показывать digital рекламу там, где это нужно. С помощью медиа-платформы для управления наружной рекламой в реальном времени, можно эффективно охватывать и вовлекать клиентов своим продуктом.
        </SwiperSlide>
              <SwiperSlide>
              <h2 className={style.title}>Эффективный геотаргетинг</h2>
              Показывайте свою рекламу только там, где это нужно. На основе данных о местоположении, времени суток, потенциальные клиенты видят динамическую рекламу на машинах такси в заданные моменты. Получите максимальную выгоду от покупки рекламы.
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
