import React from 'react';
import styles from './Content.module.css'
import Right from '../../Media/icons/right.svg'
import BigBurger from '../../Media/img/бургер.svg'

const Content = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.Content}>
              <h1>Доставка вкусной еды до 30 минут + напиток в подарок!</h1>
                <p>Доставим заказ вовремя и можете рассчитывать, что еда будет доставлен всегда горячим и ароматным.</p>
                <button>Перейти в меню <img src={Right} alt=""/></button>
            </div>
            <img className={styles.burger} src={BigBurger} alt=""/>
        </div>
    );
};

export default Content;