import React from 'react';
import styles from './Header.module.css'
import LogoFood from '../Media/icons/LOgo.svg'
import Strelka from '../Media/icons/vniz.svg'
import Phone from '../Media/icons/phone.svg'
import Korzina from '../Media/icons/korzina.svg'


const Header = () => {
    return (
        <header className={styles.Header}>
            <img src={LogoFood} alt=""/>
            <div>
              <ul>
               <li>
                   <a href="/">Главная</a>
               </li>
               <li>
                   <a href="/menu">Меню</a>
                   <img src={Strelka} alt=""/>
               </li>
               <li>
                   <a href="/dostavka">Доставка</a>
               </li>
               <li>
                   <a href="/contacts">Контакты</a>
               </li>
               <li>
                   <a href="/phone"><img src={Phone} alt=""/>+996507506556</a>
               </li>
               <li>
                   <a href="/basket">
                       <img src={Korzina} alt=""/><b>1</b>
                   </a>
               </li>
              </ul>
            </div>
        </header>
    );
};

export default Header;