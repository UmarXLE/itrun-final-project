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
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';



const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


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
                // console.log(res)
                setLogin(res.data.user.login)
                setOpenSucces(true)
                // здесь будет проищсходит суета с редакс
                setEmail('')
                setPassword('')
                dispatch(loginSuccess(res.data.user))
            })
            .catch(error => {
                setOpen(true)
                console.log(error)
            })
        
    }


    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
      setOpenSucces(false)
    };

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
{/* 
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
      /> */}


<Stack spacing={2} sx={{ width: '100%' }}>
      {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        Пользователь не найден !           </Alert>
      </Snackbar>
      {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert> */}
      {/* <Alert severity="success">This is a success message!</Alert> */}
    </Stack>

    <Stack spacing={2} sx={{ width: '100%' }}>
      {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}
      <Snackbar open={openSucces} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                Welcome {user?.login} !
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

export default Login;