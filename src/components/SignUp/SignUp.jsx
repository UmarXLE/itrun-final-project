import React , {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './signup.module.css'
import axios from 'axios'

const SignUp = () => {


    const [email ,setEmail ]  = useState('')

    const handleSubmit = () => {
        axios.post(`http://localhost:3009/emailnews`,{
            email
        })
            .then(res => {
                console.log(res.data)
                setEmail('')
            })
    }
    return (
        <div className={styles.wrapper}>


            <h2 className={styles.title}>Sign up for the BlagoCom Newsletter</h2>
            
            <form className={styles.form}>
            <TextField
            value={email}
            onChange ={(e)=>setEmail(e.target.value)}
            style={{width:'70%'}}
             id="outlined-basic" label="Your email adress" variant="outlined" />
            <Button
            onClick = {handleSubmit}
            style = {{padding:'14.8px'}}
             variant="contained">Send</Button>
            </form>

        </div>
    );
};

export default SignUp;