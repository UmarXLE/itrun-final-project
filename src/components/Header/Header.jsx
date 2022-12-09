import React , {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink  ,Link, useNavigate } from 'react-router-dom';
import styles from './header.module.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { logout } from '../../redux/userSlice'
import { useLocation } from 'react-router-dom';
import Menu from '../../components/Menu/Menu';
import Tooltip from '@mui/material/Tooltip';



const Header = () => {
    let location = useLocation();
    const navigate = useNavigate()
    console.log(location)
    const [ menuActive , setMenuActive ] = useState(false)
    const user = useSelector(state  => state.user.currentUser)
    const dispatch = useDispatch()
    // user.status == 'admin' ? () : ()
 
    return (
        <div className={styles.headerWrapper}>

        
        <header>
                <div className={styles.headerLeft}>
                <Tooltip title="Home" arrow>
                    <div className={styles.headerLogoWrapper}>
                       <NavLink  to='/'> <img src="./img/logo.png" alt="" /></NavLink>
                    </div>
                    </Tooltip>

                </div>

                <div className={styles.headerRight}>
                    <nav className={styles.nav}>
                        {user?.status === "admin" && <>
                        <NavLink to='/createnews'>Create News</NavLink>
                        <NavLink to='/createdonation'>Create Donation</NavLink>
                        </> 
                         }

                        <NavLink to='/news' className={styles.active}>News</NavLink>
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
                                <button className={styles.logout} onClick={()=>{
                                    dispatch(logout())
                                    navigate('/profile')
                                } }>выйти </button>
                                </div>
                            ):(
                                <>
                                 <NavLink to='/profile'>Profile</NavLink>
                                </>
                            )
                        }
                    </nav>

                        {/*  */}

                            <nav className={styles.menuWrapper}>

                                    <div className={styles.burgerBtn} onClick={()=>setMenuActive(!menuActive)}>
                                    <span></span>
                                    </div>

                                    <main>
                                    </main>
                                    <Menu styles={styles} active = {menuActive} setActive = {setMenuActive} />
                            </nav>
                </div>
                

        </header>
        
        </div>
    );
};
 
export default Header;