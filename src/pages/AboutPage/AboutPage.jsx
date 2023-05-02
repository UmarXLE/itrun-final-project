import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrums from '../../components/BreadCrums/BreadCrums'
import CardAbout from '../../components/CardAbout/CardAbout';
import DonationFindInfo from '../../components/DonationFindInfo/DonationFindInfo';
import Letter from '../../components/Letter/Letter';
import styles from './aboutpage.module.css'
import Footer from '../../components/Footer/Footer'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios'
import { useSelector } from 'react-redux';
import {IoClose} from 'react-icons/io5'

const AboutPage = () => {
    const user = useSelector(state  => state.user.currentUser)
    console.log(user)
    const [name , setName] = useState('')
    const [number , setNumber] = useState('')
    const [form , setForm] = useState(false)
    const handleForm = () => {
        setForm(true)
    }

    const handleCloseForm = () => {
        setForm(false)
    }
    
    const handleSend = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3009/datausers',{
            name,
            number
        }).then(res => {
            console.log(res.data)
            setForm(false)
        })
    }

    const infoDataAbout = `GlobalGiving is a nonprofit that supports other nonprofits by connecting them to donors and companies. Since 2002, we've helped trusted, community-led organizations from Afghanistan to Zimbabwe (and hundreds of places in between) access the tools, training, and support they need to make our world a better place.`


    return (
        <div className={styles.wrapper}>
            <BreadCrums img='' title ='About Us'/>

            <marquee className={styles.marquee} behavior="alternate" direction="left" bgcolor="#ffcc00">
    Lorem ipsum dolor sit amet...
            </marquee>

            <Letter infoData={infoDataAbout}/>

            {/* придумать чтонибудь как на сайте , типо карты и тд */}
            <div className={styles.video}>
            <iframe  src="https://www.youtube.com/embed/vxqZQXJ7uZg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div>

            <DonationFindInfo styles={styles}/>



            <div className={styles.cardAboutWrapper}>

                <CardAbout styles={styles}/>
                <CardAbout styles={styles}/>
                <CardAbout styles={styles}/>
                <CardAbout styles={styles}/>

            </div>

            <div className={styles.accordionWrapper}>

                <div className ={styles.accordionInfo}>
                    <h2 className={styles.accordionTitle}>Our Values</h2>
                    <p className={styles.accordionSubtitle}>These are the beliefs and principles that guide Charity Navigator and our team.</p>
                </div>
                        <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography variant="h6" component="h6">Leadership</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography variant="h7" component="h7">
                    We dream big and strive toward making the seemingly impossible possible, lifting the sector as we go.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography variant="h6" component="h6">Collabaration</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography variant="h7" component="h7">
                    We collaborate internally and externally to accelerate our work and achieve more together.
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography variant="h6" component="h6">Equity</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography variant="h7" component="h7">
                    We stand for equity, diversity, and inclusion within our organization and through our evaluations and guidance.
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography variant="h6" component="h6">Fairness</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography variant="h7" component="h7">
                    We assume good intent, leading with trust within our organization and through our work to catalyze giving wherever there is need.
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography variant="h6" component="h6">Usefulness</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography variant="h7" component="h7">
                    We provide fair, transparent evaluations, and valuable tools to enable a diverse set of donors to find and support an ever-greater number of nonprofits they can trust.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                
            </div>

                {
                    form ? (<>
                                <div className={styles.mt50px}>
                                    <form className={styles.formContact}>
                                    <button onClick={handleCloseForm} className={styles.formCloseBtn}><IoClose/></button>

                                    <TextField margin='dense' value={name} onChange={e=>setName(e.target.value)} id="standard-basic" label="Your Name" variant="outlined" />
                                    <TextField margin='dense' value ={number} onChange={e=>setNumber(e.target.value)} id="standard-basic" label="Your Number" type='tel' variant="outlined" />
                                    <Button style={{padding:'8px 75px'}} variant="contained" onClick={handleSend}>Send</Button>

                                    </form>
                                </div>
                    </>) : (<>
                            <div className={styles.contactUs}>
                        <div className={styles.contactInfo}>
                            <h2 className={styles.contactTitle}>Contact Us</h2>
                            <p className={styles.contactSubTitle}>Get in touch with our team to answer questions, <br /> explore partnerships, or fund our work.</p>
                            <Button variant="contained" onClick={handleForm}>Get in touch</Button>
                        </div>

                        
                        <div className={styles.contactImg}>
                            <img src="https://www.charitynavigator.org/content/dam/cn/cn/people/mars-sector-6-IgUR1iX0mqM-unsplash.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg" alt="" />
                        </div>

                    </div>
                    </>)
                }

           



            <Footer />
        </div>
    );
};

export default AboutPage;

