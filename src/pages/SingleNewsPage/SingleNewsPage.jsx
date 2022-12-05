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
        })
    }


    const handleClose = () => {
        setOpen(false)
    }


    const action = (
        <React.Fragment>

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
     
    const user = useSelector(state => state?.user?.currentUser)
    
    const addFavoriteNews = () => {
        console.log(user.favorites)
        console.log(user.favorites.concat(+postId))
        axios.patch(`http://localhost:3009/users/${user.id}`,{
            favorites: user.favorites.concat(Number(postId))
        }).then(
            dispatch(addNews(news))
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
                    variant="contained"
                    color="error"
                    style={{'marginLeft':'10px'}}
                    onClick ={addFavoriteNews}
                    >add to favorite</Button>

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


           

          
           

<Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={<p style={{'color':'green'}}>News success create ! </p>}
        action={action}
      />

        
        <Footer />
        </div>
    );
};

export default SingleNewsPage;