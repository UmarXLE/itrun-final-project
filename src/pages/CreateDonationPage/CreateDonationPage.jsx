import React , {useState} from 'react';
import BreadCrums from '../../components/BreadCrums/BreadCrums';
import styles from './createdonationpage.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
import Footer from '../../components/Footer/Footer'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const CreateDonationPage = () => {

    const [title , setTitle] = useState('')
    const [img , setImg] = useState('')
    const [descr , setDescr ] = useState('')
    const [price , setPrice ] = useState(0)
    const [time , setTime ] = useState('')
    const [category, setCategory] = useState('');

    const [disasters , setDisasters ] = useState('disasters')
    const [ animals , setAnimals ] = useState('animals')
    const [ poaching , setPoaching ] = useState('poaching')
    const [ war , setWar ] = useState('war')
    const [elderly , setElderly ] = useState('elderly')


    const handleChangeCategory = (event) => {
        setCategory(event.target.value);
    };

    const handleCreateDonation = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3009/donations',{
                img,
                title,
                descr , 
                price,
                time,
                category
        }).then(res  => {
            setTitle('')
            setImg('')
            setDescr('')
            setPrice('')
            setTime('')
            setCategory('')
        })
    }


    return (
        <div className={styles.wrapper}>
            <BreadCrums title ='Create Donation'></BreadCrums>
            <div className={styles.formWrapper}>


                <form className={styles.form} onSubmit={handleCreateDonation}>

                <TextField 
                value={img}
                onChange={(e) => setImg(e.target.value)}
                id="outlined-basic" 
                label="URL img" 
                margin="dense"
                variant="outlined" />

                <TextField
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    id="outlined-basic" 
                    label="Name" 
                    margin="dense"
                    variant="outlined" />

                <TextField
                    value = {descr}
                    onChange={(e) => setDescr(e.target.value)}
                    id="outlined-basic"
                    label="Description"
                    margin="dense"
                    variant="outlined" />
                   
                <TextField
                    value = {price}
                    onChange={(e) => setPrice(e.target.value)}
                    id="outlined-basic"
                    label="Price"
                    margin="dense"
                    variant="outlined" />

                <TextField
                    value = {time}
                    onChange={(e) => setTime(e.target.value)}
                    id="outlined-basic"
                    label="Date"
                    type='date'
                    margin="dense"
                    variant="outlined" />


                    <FormControl fullWidth  margin="dense">
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select

                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={category}
                            label="Category"
                            onChange={handleChangeCategory}

                            >
                            <MenuItem value={disasters}>Natural Disasters</MenuItem>
                            <MenuItem value={animals}>Halping Animals</MenuItem>
                            <MenuItem value={poaching}>Poaching</MenuItem>
                            <MenuItem value={war}>War</MenuItem>
                            <MenuItem value={elderly}>Halping for the elderly</MenuItem>

                            </Select>
                        </FormControl>

                <Button 
                variant="contained"
                margin="dense"
                style = {{
                    'padding':'12px',
                    'marginTop':'10px'
                }}
                 type='submit'>Create Donation</Button>

                </form>
                

            </div>
            <Footer />
        </div>
    );
};

export default CreateDonationPage;