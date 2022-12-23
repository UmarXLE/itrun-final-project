import React ,{useState} from 'react';
import { NavLink  ,Link } from 'react-router-dom';
import { logout } from '../../redux/userSlice'
import { useDispatch, useSelector } from 'react-redux';
import './menu.css'
import {BiNews ,BiDonateHeart ,BiUserCircle} from 'react-icons/bi'
import {CgProfile} from 'react-icons/cg'
import {FcAbout} from 'react-icons/fc'
import {MdOutlineCreate ,MdOutlineFavoriteBorder} from 'react-icons/md'
import {IoMdCreate} from 'react-icons/io'
import {FiUserCheck } from 'react-icons/fi'


const Menu = ({active , setActive , styles}) => {
    const user = useSelector(state  => state.user.currentUser)
    const dispatch = useDispatch()
    return (
        <div className={active ? 'menu active':'menu ' } onClick={()=> setActive(true)}>
            <div className='blur'></div>
            <div className='menuContent' onClick={(e)=>e.stopPropagation()}>
                {/* <h2></h2> подумать над заголовком будет ли он вообще */}
                {user?.status === "admin" && <>
                        <NavLink to='/createnews'><MdOutlineCreate style={{fontSize:'20px',marginRight:'5px'}}/>Create News</NavLink>
                        <NavLink to='/createdonation'><IoMdCreate style={{fontSize:'20px',marginRight:'5px'}}/>Create Donation</NavLink>
                        </> 
                         }

                        <NavLink to='/news'><BiNews style={{fontSize:'20px',marginRight:'5px'}}/>News</NavLink>
                        {user?.status !== "admin" && <>
                        <NavLink to='/about'><FcAbout style={{fontSize:'20px',marginRight:'5px'}}/>About</NavLink>
                        
                        </> }
                        <NavLink to='/donation'><BiDonateHeart style={{fontSize:'20px',marginRight:'5px',color:'white'}}/>Donations</NavLink>
                        
                        {user?.status === 'admin' && <NavLink to='/favoritenews'><MdOutlineFavoriteBorder style={{fontSize:'20px',marginRight:'5px'}}/>Favorite News</NavLink>}
                        {user?.status === 'guest' && <NavLink to='/favoritenews'><MdOutlineFavoriteBorder style={{fontSize:'20px',marginRight:'5px'}}/>Favorite News</NavLink> }


                        {
                            user ? (
                                <div className={styles.user}>
                                <NavLink to='/profiluser/:id' className={styles.nameUser}><FiUserCheck style={{fontSize:'20px',marginRight:'5px'}}/>{user?.login}</NavLink>
                                {/* <button className={styles.logout} onClick={()=> dispatch(logout())}>выйти </button> */}
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