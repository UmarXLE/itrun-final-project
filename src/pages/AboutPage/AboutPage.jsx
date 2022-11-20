import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrums from '../../components/BreadCrums/BreadCrums'
import CardAbout from '../../components/CardAbout/CardAbout';
import DonationFindInfo from '../../components/DonationFindInfo/DonationFindInfo';
import Letter from '../../components/Letter/Letter';
import styles from './aboutpage.module.css'
// import joinIcon from 'img/about.jpeg'


const AboutPage = () => {


    const infoDataAbout = `GlobalGiving is a nonprofit that supports other nonprofits by connecting them to donors and companies. Since 2002, we've helped trusted, community-led organizations from Afghanistan to Zimbabwe (and hundreds of places in between) access the tools, training, and support they need to make our world a better place.`


    return (
        <div className={styles.wrapper}>
            <BreadCrums img='' title ='About Us'/>

            <marquee className={styles.marquee} behavior="alternate" direction="left" bgcolor="#ffcc00">
    Lorem ipsum dolor sit amet...
            </marquee>

            <Letter infoData={infoDataAbout}/>

            {/* придумать чтонибудь как на сайте , типо карты и тд */}

            <DonationFindInfo styles={styles}/>


            <div className={styles.joinUs}>

                <div className={styles.joinBack}>

                    <img src='img/about.jpeg' alt="" />

                </div>


                <div className={styles.joinFront}>
                    <h2 className={styles.joinTitle}>Join us!
</h2>
                    <span className={styles.lineDonation}></span>
                    <p className={styles.joinText}>We’ve partnered with nonprofits in 175+ countries who work on the ground and post the projects that their communities really need. Want to post your project?

</p>
                    <button>Apply here</button>
                </div>



            </div>




            {/*  */}


            <div className={styles.cardAboutWrapper}>


                <CardAbout styles={styles}/>
                <CardAbout styles={styles}/>
                <CardAbout styles={styles}/>
                <CardAbout styles={styles}/>


                   

            </div>


        </div>
    );
};

export default AboutPage;