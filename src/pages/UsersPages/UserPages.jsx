import axios from 'axios';
import React, { useEffect  , useState} from 'react';
import BreadCrums from '../../components/BreadCrums/BreadCrums';
import UserItem from '../../components/UsetItem/UserItem';
import styles from './userpages.module.css'
import Footer from '../../components/Footer/Footer'
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';


const UserPages = () => {

    const [users , setUsers] = useState([])
    const [value , setValue] = useState('')
    // const [ filteredUsers , setFilteredUsers] = useState([])

    useEffect(()=>{ 
        axios.get('http://localhost:3009/users')
            .then(res => {
                setUsers(res.data)
            })
    },[])

    const filteredUsers = users.filter(user => {
        return user.login.toLowerCase().includes(value.toLocaleLowerCase())
    })
    


    return (
        <div className={styles.wrapper}>

        <BreadCrums title = 'All Users'/>
        <div className={styles.search}>
            <div className={styles.searchBlog}>
                <TextField e
                id="outlined-basic" 
                onChange ={(e)=>setValue(e.target.value)}
                label={<SearchIcon/>}
                style={{
                    width:'50%',
                 }}

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