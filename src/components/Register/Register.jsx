import axios from 'axios';
import React , { useState } from 'react';
import styles from './register.module.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';


const Register = () => {

    const [email , setEmail ] = useState('')
    const [password , setPassword ] = useState('')
    const [login , setLogin ] = useState('') //грубо иммя не обязательное поле 
    const [open, setOpen] = useState(false);
    const [photo , setPhoto ] = useState('')
    const [favorites , setFavorites ] = useState([])
    const [status , setStatus] = useState('guest')


    const register = (e) => {
        e.preventDefault()
        const newUser = {
            email,
            password,
            login,
            photo,
            favorites,
            status
        }

        axios.post(`http://localhost:3009/register`,newUser)
            .then(res => {
                console.log(res.data)
                setOpen(true);
                setEmail('')
                setPassword('')
                setLogin('')
                setPhoto('')
                setStatus('')
            })
            .catch(error => console.log(error))
    }

    const handleClose = () => {
        setOpen(false)
    }

    const action = (
        <React.Fragment>
          {/* <Button color="secondary" size="small" onClick={register}>
            UNDO
          </Button> */}
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <p style={{'color':'green'}}>Закрыть</p> 
          </IconButton>
        </React.Fragment>
      );

    return (
        <form className={styles.form}>
            <h2 className={styles.title}>Register</h2>
            <TextField 
            type="text" 
            placeholder='Email'
            value={email}
            margin="dense"

            onChange={(e)=>setEmail(e.target.value)}
            />

            <TextField 
            placeholder='Password'
            value={password}
            onChange = {(e) => setPassword(e.target.value)}
            type="password" 
            margin="dense"

            />

            <TextField 
            margin="dense"
            placeholder='Name'
            type="text" 
            value={login}
            onChange={(e)=>setLogin(e.target.value)}
            />

            <TextField 
            margin="dense"
            placeholder='Photo URL'
            type="text" 
            value={photo}
            onChange={(e)=>setPhoto(e.target.value)}
            />

          
          <Button 
         onClick={register} 
         style={{'marginTop':'10px','padding':'12px'}} 
         color="success"
         variant="contained">Зарегистрироваться</Button>

<Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Пользователь успешно создан"
        action={action}
      />
    </form>
    );
};

export default Register;