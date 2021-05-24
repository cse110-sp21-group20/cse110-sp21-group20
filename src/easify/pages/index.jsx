/** GET RID OF LINE BELOW WHEN DATA IS REAL */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import styles from '../styles/Main.module.css';
import models from '../models/models';
import Dash from '../components/dash';
import Content from '../components/content';

/**
 * @file This file will contain the necessarry UI+Implementation
 * for the index page of the web-app, either showing the
 * dashboard or main year/quarter/week content page
 * @module Pages
 */

/**
 * @todo Needs a description.
 * @returns Index Page Object
 * @author Josh Dreben
 * @name Main
 * @function
 */
export default function Main() {
  /** @todo FAKE DATA FOR DEBUG PURPOSES */

  const [showContent, setShowContent] = useState(false);

  /** FULL DATA FROM */
  const [data, setData] = useState([]);

  /** STATE USED TO LOOK UP SPECIFIC WEEK OF ENTRIES */
  const [currYear, setCurrYear] = useState(0);
  const [currQuarter, setCurrQuarter] = useState('q1');
  const [currWeek, setCurrWeek] = useState('w1');

  /** CURRENT ENTRIES */
  const [entries, setEntries] = (data.length > 0)
    ? useState(data[currYear][currQuarter][currWeek]) : useState([]);

  useEffect(() => {
    // TODO: UPDATE LOCAL STORAGE HERE
  }, [entries]);
  return (
    <div className={styles.container}>
      {showContent
        ? (
          <Content
            data={{ val: data, set: setData }}
            entries={{ val: entries, set: setEntries }}
            year={{ val: currYear, set: setCurrYear }}
            quarter={{ val: currQuarter, set: setCurrQuarter }}
            week={{ val: currWeek, set: setCurrWeek }}
            changePage={() => setShowContent(false)}
          />
        )
        : (
          <Dash
            data={{ val: data, set: setData }}
            changePage={() => setShowContent(true)}
          />
        )}
    </div>
  );
}
