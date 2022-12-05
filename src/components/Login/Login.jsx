import React, { useState } from 'react';
import axios  from 'axios';
import styles from './login.module.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/userSlice';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import { useSelector } from 'react-redux';

const Login = () => {


    const [email , setEmail ] = useState('')
    const [password , setPassword ] = useState('')
    const [login , setLogin ] = useState('')  //грубо иммя не обязательное поле 
    const dispatch = useDispatch()
    const [open , setOpen] = useState(false)
    const [openSucces , setOpenSucces] = useState(false)
    const user = useSelector(state => state.user.currentUser)
    console.log(user)

    const handleLogin = (e) => {
        e.preventDefault()
        const user = {
            email,
            password
        }

        axios.post('http://localhost:3009/login',user)
            .then(res => {
                console.log(res)
                setLogin(res.data.user.login)
                setOpenSucces(true)
                // здесь будет проищсходит суета с редакс
                setEmail('')
                setPassword('')
                dispatch(loginSuccess(res.data.user))
            })
            .catch(error => {
                console.log(error)
                setOpen(true)
            })
        
    }


    const handleClose = () => {
        setOpen(false)
    }

    const action = (
        <React.Fragment>
          <Button color="secondary" size="small" onClick={handleLogin}>
        
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={()=>handleClose()}
          >
            Закрыть 
          </IconButton>
        </React.Fragment>
      );

    return (
        <form className={styles.form} onSubmit={handleLogin}>

            <h2 className={styles.title}>Login</h2>
            <TextField 
            type="text" 
            value={email}
            margin="dense"
            placeholder='Email'
            onChange={(e)=>setEmail(e.target.value)}
            />

            <TextField 
            value={password}
            placeholder='Password'
            margin="dense"
            onChange = {(e) => setPassword(e.target.value)}
            type="password" 
            />

            <Button  
            type='submit' 
            style={{'marginTop':'10px','padding':'12px'}} 
            variant="contained">Войти</Button>

<Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message = {<p style={{'color':'red' ,'fontWeight':'700'}}> Пользователь не найден ! </p>}
        action={action}
      />

<Snackbar
        open={openSucces}
        autoHideDuration={6000}
        onClose={handleClose}
        message = {<p style={{'color':'green' ,'fontWeight':'700'}}> Добро пожаловать {user?.login} </p>}
        action={action}
      />

        </form>

    );
};

export default Login;