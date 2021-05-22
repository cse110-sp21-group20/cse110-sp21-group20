import styles from '../styles/Content.module.css';
import Image from 'next/image'

/**
 * This file will contain all necessary UI+Implementation
 * For the main content of the web-app
 * @returns Content Object
 */
export default function Content({ changePage }) {
  return (
    <div className={styles.wrap}>
      {/** HEADER: YEAR, SETTINGS, PROFILE, QUARTERS, PREVIOUS */}
      <div className={styles.topheader}> 
        {/*<p className={styles.yearelement}>  INSERT YEAR FROM YEAR CARD HERE </p>*/}
        <button className={styles.settingsbtn}><span><Image src={'/../public/Gear.png'} alt="gear" width={14} height={14}/> Settings</span> </button>
        <button id={styles.profilepic} className={styles.profilebtn}><Image src={'/../public/Profile.png'} alt="profile picture"  width={40} height={40}/></button>
      </div> 

      <div className={styles.header}>

        {/** TEMP BACK BTN FOR EASE OF USE */}
        <button className={styles.backbtn} type="button" onClick={() => changePage()}>
          Go Back
        </button>

        {/** QUARTER HEADERS */}
        <div className={styles.quarterheader}> 
          {/**
           * TO DO
           * - figure out where buttons lead to
           * - ui of the overall header
           */}
          <button className={styles.qtrbtn} type="button">
            Fall
          </button>
          <button className={styles.qtrbtn} type="button">
            Winter
          </button>
          <button className={styles.qtrbtn} type="button">
            Spring
          </button>
          <button className={styles.qtrbtn} type="button">
            Summer
          </button>
          <button className={styles.qtrbtn} type="button">
            Notes
          </button> 
        </div>
        <div className="line"></div> {/* wanted a dotted line at the bottom of the header */}
      </div>
      
      <div className={styles.main}>
        
      <div className={styles.index} />
      </div>
    </div>
  );
}
