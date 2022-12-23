import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import styles from './singlepostpage.module.css'
import Footer from '../../components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { addNews } from '../../redux/newsSlice';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import {MdFavorite} from 'react-icons/md'

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  

const SingleNewsPage = (props) => {
    const paramsURL = useParams()
    const postId = paramsURL.id
    const dispatch = useDispatch()
    

    const [news , setNews ] = useState({})
    const [editMode , setEditMode ] = useState(false)
    const [newImg , setNewImg] = useState('')
    const [newTitle , setNewTitle ] = useState('')
    const [newDescr , setNewDescr] = useState('')
    const [open , setOpen ] = useState(false)
    const [comments , setComments ] = useState('')
    const navigate = useNavigate()
    const [saveMove , setSaveMove] = useState(false)
    const [favoriteMove ,setFavoriteMove] = useState(false)
    

    useEffect(() => {
        axios.get(`http://localhost:3009/posts/${postId}`)
            .then(res => setNews(res.data))
    },[])


    const deleteNews = () => {
        axios.delete(`http://localhost:3009/posts/${postId}`)
            .then(res => {
                console.log(res)
                setOpen(true)
                navigate('/news')
                // alert('1')
            })
    }

    const handleEditNews = () => {
        setNewImg(news.img)
        setNewTitle(news.title)
        setNewDescr(news.descr)
        setEditMode(true)
    }


    const changedNews = (e) => {
        e.preventDefault()
        axios.patch(`http://localhost:3009/posts/${postId}`,{
            img : newImg , 
            title : newTitle,
            descr : newDescr
        })
        .then(res => {
            console.log(res.data)
            setNews(res.data)
            setEditMode(false)
            setSaveMove(true)
        })
    }


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setFavoriteMove(false);
        setSaveMove(false)
      };


    const user = useSelector(state => state?.user?.currentUser)
    
    const addFavoriteNews = () => {
        console.log(user.favorites)
        console.log(user.favorites.concat(+postId))
        axios.patch(`http://localhost:3009/users/${user.id}`,{
            favorites: user.favorites.concat(Number(postId))
        }).then(
            dispatch(addNews(news)),
            setFavoriteMove(true)
        )  
        
    }



    

    return (
        
        <div className={styles.wrapper}>

        <div className={styles.newsWrapper}>
             <div className={styles.imgWrapper}>
                <img src={news.img} alt="" />
            </div>

            <div className={styles.infoWrapper}>
                <h2>{news.title}</h2>                
                <p>{news.descr}</p>
            </div>
            {
                    user?.status === 'guest' && <>
                      <Button 
                    // variant="contained"
                    // color="error"
                    style={{'marginLeft':'10px'}}
                    onClick ={addFavoriteNews}
                    ><MdFavorite style={{
                        position:'absolute',
                        right:'0'
                    }} className={styles.favoriteAddBtn}/></Button>

                    </>
                }
        </div>

            {
                user?.status === 'admin' && <>
                     {
                    editMode ? (
                        <>
                        

                        <div className={styles.formWrapper}>
                                <form className={styles.form}>
                                <TextField 
                                id="outlined-basic"
                                label="New Url images" 
                                value = {newImg}
                                onChange = {(e)=>setNewImg(e.target.value)}
                                variant="outlined" />

                                <TextField 
                                id="outlined-basic" 
                                value={newTitle}
                                label="New Title News" 
                                onChange={(e)=>setNewTitle(e.target.value)}
                                variant="outlined" />

                                <TextField 
                                id="outlined-basic" 
                                onChange={(e)=>setNewDescr(e.target.value)}
                                value={newDescr}
                                label="New Description News" 
                                variant="outlined" />

                                <Button 
                                variant="contained"
                                color ="success"
                                onClick = {(e) => changedNews(e)}
                                >Save</Button>

                                </form>
                        </div>
                                            
                       
                        </>
                    ) : (
                             <>
             <div className={styles.btnWrapper}>

                    <Button 
                    variant="contained"
                    onClick = {handleEditNews}
                    >Edit </Button>

                    <Button 
                    variant="contained"
                    color="error"
                    style={{'marginLeft':'10px'}}
                    onClick ={deleteNews}
                    >Delete</Button>

                    <Button 
                    // variant="contained"
                    // color="error"
                    style={{'marginLeft':'10px'}}
                    onClick ={addFavoriteNews}
                    ><MdFavorite className={styles.favoriteAddBtn}/></Button>

                </div>
                        </>
                    )
                }
                </>
            }


               


                {/* <div className={styles.commentsWrapper}>
                    

                    <form>
                        <input 
                        
                        type="text" />
                        <button>Оставить комментарий</button>
                    </form>

                    <div className={styles.comments}>

                    </div>

                </div> */}


           

          
           
<Stack spacing={2} sx={{ width: '100%' }}>
      {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}
      <Snackbar open={saveMove} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Тews successfully changed!
        </Alert>
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
      <Snackbar open={favoriteMove} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
            news added to favorites !
        </Alert>
      </Snackbar>
      {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert> */}
      {/* <Alert severity="success">This is a success message!</Alert> */}
    </Stack>


        
        <Footer />
        </div>
    );
};

export default SingleNewsPage;