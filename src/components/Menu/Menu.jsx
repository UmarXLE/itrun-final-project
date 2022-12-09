import React ,{useState} from 'react';
import { NavLink  ,Link } from 'react-router-dom';
import { logout } from '../../redux/userSlice'
import { useDispatch, useSelector } from 'react-redux';
import './menu.css'

const Menu = ({active , setActive , styles}) => {
    const user = useSelector(state  => state.user.currentUser)
    const dispatch = useDispatch()
    return (
        <div className={active ? 'menu active':'menu ' } onClick={()=> setActive(true)}>
            <div className='blur'></div>
            <div className='menuContent' onClick={(e)=>e.stopPropagation()}>
                {/* <h2></h2> подумать над заголовком будет ли он вообще */}
                {user?.status === "admin" && <>
                        <NavLink to='/createnews'>Create News</NavLink>
                        <NavLink to='/createdonation'>Create Donation</NavLink>
                        </> 
                         }

                        <NavLink to='/news'>News</NavLink>
                        {user?.status !== "admin" && <>
                        <NavLink to='/about'>About</NavLink>
                        
                        </> }
                        <NavLink to='/donation'>Donations</NavLink>
                        
                        {user?.status === 'admin' && <NavLink to='/favoritenews'>Favorite News</NavLink>}
                        {user?.status === 'guest' && <NavLink to='/favoritenews'>Favorite News</NavLink> }


                        {
                            user ? (
                                <div className={styles.user}>
                                <NavLink to='/profiluser/:id' className={styles.nameUser}>{user?.login}</NavLink>
                                <button className={styles.logout} onClick={()=> dispatch(logout())}>выйти </button>
                                </div>
                            ):(
                                <>
                                 <NavLink to='/profile'>Profile</NavLink>
                                </>
                            )
                        }
            </div>
            
        </div>
    );
};

export default Menu;