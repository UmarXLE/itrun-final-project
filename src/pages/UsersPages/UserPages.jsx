import axios from 'axios';
import React, { useEffect  , useState} from 'react';
import BreadCrums from '../../components/BreadCrums/BreadCrums';
import UserItem from '../../components/UsetItem/UserItem';
import styles from './userpages.module.css'
import Footer from '../../components/Footer/Footer'
import TextField from '@mui/material/TextField';


const UserPages = () => {

    const [users , setUsers] = useState([])
    const [search , setSearch] = useState('')
    const [ filteredUsers , setFilteredUsers] = useState([])

    useEffect(()=>{ 
        axios.get('http://localhost:3009/users')
            .then(res => {
                setUsers(res.data)
                setFilteredUsers(res.data)
            })
    },[])

    
    const findUsers = (e) => {
        setFilteredUsers(users.filter(user => user.name.toLowerCase().includes(e.target.value.toLowerCase())))
    }




    return (
        <div className={styles.wrapper}>

        <BreadCrums title = 'All Users'/>
        <div className={styles.search}>
            <div className={styles.searchBlog}>
                <h2>{search}</h2>
                <TextField 
                id="outlined-basic" 
                value={search}
                onChange ={findUsers}
                label="Search User" 
                style={{width:'50%'}}
                variant="outlined" />
                
                
            </div>
        </div>
        <div className={styles.wrapperUsers}>
            {
                filteredUsers.map(user => {
                    return <UserItem 
                    id = {user.id}
                    key = {user.id}
                    photo = {user.photo}
                    name = {user.login}
                    />
                })
            }
        </div>
        <Footer />
        </div>
    );
};

export default UserPages;