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

  // useEffect(() => {
  //   const oldData = JSON.parse(localStorage.getItem("data"));
  //   console.log(oldData);
  //   setData(oldData);
  // }, []);
  /** CURRENT ENTRIES */
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const oldData = localStorage.getItem('data');
    if (oldData) {
      setData(JSON.parse(oldData));
      setEntries(JSON.parse(oldData)[currYear][currQuarter][currWeek]);
    } else {
      const newYear = {
        id: Date.now() * Math.random(),
        year: new Date().getFullYear(),
        q1: models.week,
        q2: models.week,
        q3: models.week,
        q4: models.week,
      };
      setData([newYear]);
      localStorage.setItem('data', JSON.stringify([newYear]));
    }
  }, []);


  useEffect(() => {
    if (data.length > 0) {
      const newData = data;
      newData[currYear][currQuarter][currWeek] = [...entries];
      localStorage.setItem("data", JSON.stringify(newData));
    }
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
