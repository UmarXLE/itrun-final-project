import axios from 'axios';
import React, { useEffect , useState } from 'react';
import { useParams ,useNavigate } from 'react-router-dom';
import styles from './singledonationpage.module.css'
import Button from '@mui/material/Button';
import Footer from '../../components/Footer/Footer'
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom'


const SingleDonationPage = (props) => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [donate , setDonate ] = useState({})
    const [edit , setEdit ] = useState(false)
    const [newImg , setNewImg ] = useState('')
    const [ newTitle , setNewTitle ] = useState('')
    const [ newDescr , setNewDescr] = useState('')
    const [ newPrice , setNewPrice ] = useState('')
    const [ newTime , setNewTime ] = useState('')
    
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
        }).catch(err => console.log(err))
    }


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
                    <p>{donate.descr}</p>
                    <p>Price : {donate.price}</p>
                    <p>Date : {donate.time}</p>
                    <div className ={styles.btnWrapper}>
                        <Link to='/payment/:id'> <Button color="success" variant="contained">Donate</Button></Link>
                        <Button 
                        style={{margin:'0 10px'}} 
                        onClick = {handleEditMode}
                        variant="contained">Edit</Button>

                        <Button 
                        variant="contained"
                        color="error"
                        onClick = {handleDelete}
                        >delete</Button>

                    </div>
                    </div>
            </div></>)
                }

                   

                
        <Footer />
        </div>
    );
};

export default SingleDonationPage;