import React from 'react'
import style from './main.module.css'
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import many from './many.png';
import gift from './gift.png';
import accum from './accum.png';
import html from './img/html.png';
import psql from './img/psql.png';
import css from './img/css.png';
import node from './img/node.png';
import react from './img/react.png';
import js from './img/js.png';


// import "swiper/css";
// import "swiper/css/effect-fade";

// import SwiperCore, {
//   EffectFade
// } from 'swiper';

// install Swiper modules
// SwiperCore.use([EffectFade]);
function Main() {
  return (
    <>
      <main className={style.background}>

        <div  className={style.content}>
        {/* <img className={style.fon} src="https://www.buhonline.ru/Files/Modules/Publication/13778_o_l_2x.webp?t=1534408192" alt="fon"/> */}
        
        <div className={style.text}>
          <Swiper slidesPerView={1} effect={"fade"}>
          <SwiperSlide>
          <h2 className={style.title}>Taxi-target</h2>   
            <p>Занимаемся размещением рекламы на такси используя умные LED экраны. У нас выгодные тарифы. Расскажите о себе всему городу с помощью новейших технологий наружной рекламы на авто.</p> 
        </SwiperSlide>
              <SwiperSlide>
                <>
                <h2 className={style.title}>Что мы делаем и как это работает</h2>   
            Наше агентство Taxi-target устанавливает умные экраны на такси и корпоративные авто в Москве, предлагаем выгодные тарифы, а также предоставляем возможность показывать digital рекламу там, где это нужно.
                </>
             
        </SwiperSlide>
              <SwiperSlide>
              <h2 className={style.title}>Эффективный геотаргетинг</h2>
              Показывайте свою рекламу только там, где это нужно. На основе данных о местоположении, времени суток, потенциальные клиенты видят динамическую рекламу на машинах такси в заданные моменты.
              </SwiperSlide>
              <SwiperSlide>
              <h2 className={style.title}>Удаленное управление </h2>
              Настройка и изменение рекламной кампании происходит онлайн в личном кабинете. Тестируйте рекламные кампании, выставляйте ежедневные бюджеты, меняйте зоны показов.
              </SwiperSlide>
              <SwiperSlide>
              <h2 className={style.title}>Для таксопарков</h2>
              <ul>
                <li className={style.li}><img src={many} alt="many" className={ style.logo }/>Дополнительный заработок</li>
                <li className={style.li}><img src={gift} alt="gift" className={ style.logo }/>Бесплатное подключение</li>
                <li className={style.li}><img src={accum} alt="accum" className={ style.logo }/>Автономная работа экрана</li>
              </ul>
              </SwiperSlide>
              <SwiperSlide>
              <h2 className={style.title}>Для рекламодателей</h2>
              <ul>
                <li className={style.li}><img src={many} alt="many" className={ style.logo }/>Показ рекламы в недоступных районах</li>
                <li className={style.li}><img src={gift} alt="gift" className={ style.logo }/>Наружная реклама с минимальными бюджетами</li>
                <li className={style.li}><img src={accum} alt="accum" className={ style.logo }/>Измерение результатов рекламной кампании</li>
              </ul>
              </SwiperSlide>
              <SwiperSlide>
    
              <h2 className={style.title}>Для агентств</h2>
              <ul>
                <li className={style.li}> <img src={many} alt="many" className={ style.logo }/>  Простая и удобная интеграция</li>
                <li className={style.li}> <img src={gift} alt="gift" className={ style.logo }/>Отслеживание состояния рекламной кампании</li>
                <li className={style.li}> <img src={accum} alt="accum" className={ style.logo }/>Выходные данные, с которыми удобно работать</li>
              </ul>
              </SwiperSlide>
              {/* <SwiperSlide>
    
              <h2 className={style.title}>Стек технологий на Frontend</h2>
              <ul>
                  <li className={style.lisetck}>
                    <div>
                      <img src={html} alt="html" className={style.logostek} />
                      <img src={css} alt="css" className={style.logostek} />
                      <img src={js} alt="js" className={style.logostek} />
                      <img src={react} alt="react" className={style.logostek} />
                    </div>
                    React.js - библиотека JavaScript для создания пользовательских интерфейсов.
                  </li>
              </ul>
              </SwiperSlide>
              <SwiperSlide>
    
              <h2 className={style.title}>Стек технологий на Backend</h2>
              <ul>
                <li className={style.lisetck}> <img src={node} alt="node" className={ style.logostek }/> Кросс-платформенная среда исполнения JavaScript обеспечивающая стабильную работу сервера с неблокирующим входом/выходом запросов. </li>
                <li className={style.lisetck}> <img src={psql} alt="psql" className={style.logostek} /> Реляционная СУБД для хранения основных данных в системе</li>
              </ul>
              </SwiperSlide> */}
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
