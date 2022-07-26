import React,{useState} from 'react';
import {nawbar,New_Content} from '../../constants'
import styles from './NewMenu.module.css'

const NewMenu = () => {
    const [number, setNumber] = useState(0);
    return (
        <div className={styles.NewMenu}>
            <div className={styles.navBar}>
                <h1>Новинки</h1>
                <ul>
                    {nawbar.map((post) =>(
                        <li>
                            <a href={post.link}>{post.title}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.menu}>
                {New_Content.map((post) => (
                    <div className={styles.product_block}>
                        <img src={post.img} alt=""/>
                        <h2>{post.title}</h2>
                        <p className={styles.description}>{post.description}</p>
                        <h3>{post.price} сом</h3>
                        <p className={styles.amount}>
                            <b onClick={() => setNumber(number - 1)}>&minus;</b>
                            {number}
                            <b onClick={() => setNumber(number + 1)}>+</b>
                        </p>
                        <button>В корзину</button>

                    </div>
                ))}

            </div>
        </div>
    );
};

export default NewMenu;