import axios from 'axios';
import React , { useState } from 'react';
import styles from './register.module.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { TextField } from '@mui/material';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

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
                // setStatus('')
                handleClick()
            })
            .catch(error => console.log(error))
    }

    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

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

      <Stack spacing={2} sx={{ width: '100%' }}>
      {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          The user has been successfully created !
        </Alert>
      </Snackbar>
      {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert> */}
      {/* <Alert severity="success">This is a success message!</Alert> */}
    </Stack>
    </form>
    );
};

export default Register;