import { Breadcrumbs } from '@mui/material';
import React from 'react';
import styles from './createnewspage.module.css'
import BreadCrums from '../../components/BreadCrums/BreadCrums';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';


const CreateNewsPage = () => {

    const [img , setImg] = useState('')
    const [title , setTitle] = useState('')
    const [descr , setDescr]  = useState('')
    const [open, setOpen] = useState(false);


    const createNews = (e) => {
        e.preventDefault(e)
        axios.post('http://localhost:3009/posts',{
            img,
            title,
            descr
        }).then(res => {
            console.log(res)
            setImg('')
            setTitle('')
            setDescr('')
            setOpen(true);

        })
    }

    const handleClose = () => {
        setOpen(false)
    }

    const action = (
        <React.Fragment>
          <Button color="secondary" size="small" onClick={createNews}>
            UNDO
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            Закрыть 
          </IconButton>
        </React.Fragment>
      );
      

    return (

        <div>
            <BreadCrums title='Create News'/>  
            <div className={styles.wrapper}>
            <form className={styles.form}>
                <TextField
                margin = "dense"
                id="outlined-basic" 
                value={img}
                onChange={(e)=>setImg(e.target.value)}
                label="URL images news" 
                variant="outlined" />

                <TextField 
                margin = "dense"
                id="outlined-basic"
                 label="Name news" 
                 value={title}
                 onChange={(e)=>setTitle(e.target.value)}
                 variant="outlined" />

                <TextField 
                margin = "dense"
                value={descr}
                onChange={(e)=>setDescr(e.target.value)}
                id="outlined-basic" 
                label="Description news" 
                variant="outlined" />
                
                <Button 
                margin = "normal"
                variant="contained"
                color ="success"
                style = {{
                    'padding':'12px',
                    'marginTop':'10px'
                }}
                onClick={createNews}
                >Create News</Button>

<Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        action={action}
      />

            </form>
            </div>  
        </div>
    );
};

export default CreateNewsPage;