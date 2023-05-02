import axios from 'axios';
import React, { useEffect , useState } from 'react';
import { useParams ,useNavigate } from 'react-router-dom';
import styles from './singledonationpage.module.css'
import Button from '@mui/material/Button';
import Footer from '../../components/Footer/Footer'
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  


const SingleDonationPage = (props) => {
    const user = useSelector(state => state.user.currentUser)
    const {id} = useParams()
    const navigate = useNavigate()
    const [donate , setDonate ] = useState({})
    const [edit , setEdit ] = useState(false)
    const [newImg , setNewImg ] = useState('')
    const [ newTitle , setNewTitle ] = useState('')
    const [ newDescr , setNewDescr] = useState('')
    const [ newPrice , setNewPrice ] = useState('')
    const [ newTime , setNewTime ] = useState('')
    const [saveMove , setSaveMove] = useState(false)
    const [deleteMove , setDeleveMove] = useState(false)
    
    useEffect(()=>{
        axios.get(`http://localhost:3009/donations/${id}`)
            .then(res => setDonate(res.data))
    },[])
    
    const handleDelete = () => {
        axios.delete(`http://localhost:3009/donations/${id}`)
            .then(res => {
                console.log(res.data)
                navigate('/donation')
            })
            .catch(err => console.log(err))
    }

    const handleEditMode = () => {
        setEdit(true)
        setNewImg(donate.img)
    }



    console.log(id)
    console.log(donate.id)
    console.log(donate)

    const handleSave = (e) => {
        axios.patch(`http://localhost:3009/donations/${donate.id}`,{
            img:newImg,
            title: newTitle , 
            descr:newDescr, 
            price:newPrice,
            time:newTime
        }).then(res =>{
            setDonate(res.data)
            setEdit(false)
            console.log(res.data)
            setSaveMove(true)
        }).catch(err => console.log(err))
    }


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setSaveMove(false)
      };


    return (
        <div className={styles.wrapper}>

            

                {
                    edit ? (<> <div  className={styles.formEditWrapper}>
                        <form className={styles.formEdit}>
                            <TextField 
                            id="filled-basic"
                            margin = 'dense'
                             label="URl Image" 
                             value = {newImg}
                             onChange = {e => setNewImg(e.target.value)}
                             variant="outlined" />

                            <TextField 
                            id="filled-basic"
                             label="Title" 
                             margin = 'dense'
                             value = {newTitle}
                             onChange = {e => setNewTitle(e.target.value)}
                             variant="outlined" />

<TextField 
                            id="filled-basic"
                             label="Descriptions"
                             margin = 'dense'
                             value = {newDescr}
                             onChange = {e => setNewDescr(e.target.value)}
                             variant="outlined" />

<TextField 
                            id="filled-basic"
                            margin = 'dense'
                             label="Price" 
                             value = {newPrice}
                             onChange = {e => setNewPrice(e.target.value)}
                             variant="outlined" />

<TextField 
                            id="filled-basic"
                             label="Date" 
                             margin = 'dense'
                             value = {newTime}
                             type = 'date'
                             onChange = {e => setNewTime(e.target.value)}
                             variant="outlined" />

<Button 
                        style={{
                            margin:'10px',
                            padding:'10px'
                    }} 
                        color = 'success'
                        onClick = {(e)=> handleSave(e.target.value)}
                        variant="contained"
                        >Save</Button>

                        </form>
                    </div></>):(<><div className={styles.infoWrapper}>
                <div className={styles.icon}>
                    <img src={donate.img} alt="" />
                </div>
                <div className={styles.info}>
                    <h2>{donate.title}</h2>
                    <p className={styles.descr}>{donate.descr}</p>
                    <p className={styles.price}>Price : {donate.price}</p>
                    <p className={styles.date}>Date : {donate.time}</p>
                    <div className ={styles.btnWrapper}>
                        <Link to={`/payment/${donate.id}`}> <Button color="success" variant="contained">Donate</Button></Link>
                        {user?.status === 'admin' && <>
                            <Button 
                            style={{margin:'0 10px'}} 
                            onClick = {handleEditMode}
                            variant="contained">Edit</Button>

                            <Button 
                            variant="contained"
                            color="error"
                            onClick = {handleDelete}
                            >delete</Button>
                        </>}
                        

                    </div>
                    </div>
            </div></>)
                }

                   

                
        <Footer />

           
<Stack spacing={2} sx={{ width: '100%' }}>
      {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}
      <Snackbar open={saveMove} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Donate successfully changed!
        </Alert>
      </Snackbar>
      {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert> */}
      {/* <Alert severity="success">This is a success message!</Alert> */}
    </Stack>

   
        


        
        </div>
    );
};

export default SingleDonationPage;