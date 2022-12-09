import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserItem from '../UsetItem/UserItem';
import styles from './topusers.module.css'
import Button from '@mui/material/Button';
import {Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const TopUsers = () => {
    const [users ,setUsers ] = useState([])
    console.log(users)

    useEffect(()=>{
        axios.get(`http://localhost:3009/users?_limit=12`)
            .then(res => setUsers(res.data))
    },[])

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
    <div className={styles.wrapperBg}>
        <div className={styles.wrapper}>
            
            <div className={styles.info}>
                <div>
                    <h2 className={styles.title}>Top Users</h2>
                </div>

                {/* <div className={styles.filterUsers}>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                                >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                    </Box>
                 </div> */}

            </div>

            <div className={styles.usersWrapper}>
                {
                    users.map(user => {
                        return <UserItem 
                        key = {user.id}
                        name = {user.login}
                        photo = {user.photo}
                        />
                    })
                }
            </div>

            <Link to='/users'>
             <Button variant="contained"> All Users</Button>
            </Link>

        </div>
    </div>
    );
};

export default TopUsers;