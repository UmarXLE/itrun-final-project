import React from 'react';
import styles from './useritem.module.css'

const UserItem = (props) => {
    return (
        <div className={styles.item}>
            <div className={styles.userIcon}>
                <img src={props.photo} alt="" />
            </div>

            <div className={styles.userInfo}>
                <h2>{props.name}</h2>
                <p></p>
            </div>

            <div className={styles.userDop}>
                {/* дополнитльеные дданные   */}
            </div>
             
        </div>
    );
};

export default UserItem;