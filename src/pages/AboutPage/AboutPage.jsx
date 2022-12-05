import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrums from '../../components/BreadCrums/BreadCrums'
import CardAbout from '../../components/CardAbout/CardAbout';
import DonationFindInfo from '../../components/DonationFindInfo/DonationFindInfo';
import Letter from '../../components/Letter/Letter';
import styles from './aboutpage.module.css'
// import joinIcon from 'img/about.jpeg'
import Footer from '../../components/Footer/Footer'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const AboutPage = () => {

    const [form , setForm] = useState(false)
    const handleForm = () => {
        setForm(true)
    }

    const handleCloseForm = () => {
        setForm(false)
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
            <iframe src="https://www.youtube.com/embed/4ElUAHWC2PY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

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
                    <Typography>Leadership</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
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
                    <Typography>Collabaration</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
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
                    <Typography>Equity</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
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
                    <Typography>Fairness</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
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
                    <Typography>Usefulness</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                    We provide fair, transparent evaluations, and valuable tools to enable a diverse set of donors to find and support an ever-greater number of nonprofits they can trust.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                
            </div>



            <div className={styles.contactUs}>
                <div className={styles.contactInfo}>
                    <h2 className={styles.contactTitle}>Contact Us</h2>
                    <p className={styles.contactSubTitle}>Get in touch with our team to answer questions, <br /> explore partnerships, or fund our work.</p>
                    <Button variant="contained" onClick={handleForm}>Get in touch</Button>
                </div>

                
                <div className={styles.contactImg}>
                    <img src="https://www.charitynavigator.org/content/dam/cn/cn/people/mars-sector-6-IgUR1iX0mqM-unsplash.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg" alt="" />
                </div>


                   { form && <> <div>
                     <h2>form actived</h2>
                     <button onClick={handleCloseForm}>close</button>
                        <form className={styles.formContact}>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                        <Button variant="contained">Contained</Button>

                        </form>
                 </div></>
                    
                   }

            </div>



            <Footer />
        </div>
    );
};

export default AboutPage;