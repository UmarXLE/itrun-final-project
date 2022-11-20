import React from 'react';
import {Link} from 'react-router-dom'
import styles from './newitem.module.css'

const NewsItem = (props) => {
    return (
        <div className={styles.newsItem}>
            <div className={styles.img}>
                <img src={props.img} alt="" />
            </div>

        <div className={styles.info}>
            <h2>{props.title}
             </h2>
                  <p>{props.descr}
                </p>
                <div className={styles.btnWrapepr}>
                <Link to={`/posts/${props.id}`} >more ...</Link>
                <button onClick={props.deleteNews}>Delete</button>

                </div>
        </div>
    </div>
    );
};

export default NewsItem;