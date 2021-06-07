import { useState, useRef, useEffect } from 'react';

import styles from '../styles/Dash.module.css';
import YearCard from './year-card';
import Settings from './settings';

/**
 * This file will contain all necessary UI+Implementation
 * For the user's dashboard
 * @returns Dash Object
 */
export default function Dash({ data, changePage, setYear }) {
  const [resetJournal, setResetJournal] = useState(false);
  const [tutorialOn, setTutorialOn] = useState(false);
  // const [theme, setTheme] = useState(false);

  return (
    <div className={styles.wrap}>
      <button 
        className={resetJournal ? styles.helpbtnh : styles.helpbtn} 
        onClick={() => setTutorialOn(!tutorialOn)}
      >
        ?
      </button>
      {tutorialOn ? (
        <>
        <button 
        className={styles.exitTutorial} 
        onClick={() => setTutorialOn(!tutorialOn)}
        >
        EXIT TUTORIAL
        </button>
        <img 
          className={styles.dashtutorial}
          src="/tutorial_dash.png" 
          alt="Tutorial of Dash"
        />
        </>
      ) : null}
      <Settings
        data={{ val: data, set: data.set }}
        rj={resetJournal}
        setrj={() => setResetJournal(!resetJournal)}
      />
      <div
        aria-hidden="true"
        onClick={() => data.set([...data.val,
          {
            id: Date.now() * Math.random(),
            year: data.val[data.val.length - 1].year + 1,
            q1: {
              w1: [],
              w2: [],
              w3: [],
              w4: [],
              w5: [],
              w6: [],
              w7: [],
              w8: [],
              w9: [],
              w10: [],
              w11: [],
            },
            q2: {
              w1: [],
              w2: [],
              w3: [],
              w4: [],
              w5: [],
              w6: [],
              w7: [],
              w8: [],
              w9: [],
              w10: [],
              w11: [],
            },
            q3: {
              w1: [],
              w2: [],
              w3: [],
              w4: [],
              w5: [],
              w6: [],
              w7: [],
              w8: [],
              w9: [],
              w10: [],
              w11: [],
            },
          }])}
        className={resetJournal ? styles.newyearbtnh : styles.newyearbtn}
      >
        <img className={styles.plusimg} src="/icons/plussign.svg" alt="plus sign" />
        <p>Add Year</p>
      </div>
      <div className={resetJournal ? styles.welcomeh : styles.welcome}>
        {/** Order of HTML reversed to accomodate
         * flex-column-reverse property */}
        <h2>Click on a year to get started!</h2>
        <h1>Welcome</h1>
      </div>
      <div className={resetJournal ? styles.mainh : styles.main}>
        {data.val.map((year) => (
          <YearCard
            key={year.id}
            data={year}
            index={data.val.indexOf(year) + 1}
            onClick={() => { setYear(data.val.indexOf(year)); changePage(); }}
          />
        ))}
      </div>

    </div>
  );
}
