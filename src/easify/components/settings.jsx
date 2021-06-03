/* eslint-disable no-restricted-globals */
import { useState, useEffect, useRef } from 'react';

import styles from '../styles/Settings.module.css';
// import models from '../models/models';

/**
 * Dark/light mode button set up but currently commented out
 * because that functionality hasn't been set up.
 */

/**
 * This is the file for the settings button. Settings handles
 * reseting the journal and maybe later on dark/light mode
 * @param {data} The data that holds the journal entries
 * @param {rj} The resetJournal passed in, needed to keep the blur effects
 * @param {setrj} The setResetJournal passed in, same reason as above
 * @returns
 */
export default function Settings({ rj, setrj }) {
  const [showPopup, setShowPopup] = useState(false);
  const [resetJournal, setResetJournal] = useState(rj);
  // const [theme, setTheme] = useState(false);
  const popupSettings = useRef(null);

  useEffect(() => {
  // only add the event listener when the dropdown is opened
    if (!showPopup) return;
    function handleClick(event) {
      if (popupSettings.current && !popupSettings.current.contains(event.target)) {
        setShowPopup(false);
      }
    }
    window.addEventListener('click', handleClick);
    // eslint-disable-next-line consistent-return
    return () => window.removeEventListener('click', handleClick);
  }, [showPopup]);

  return (
    <>
      <div className={styles.header}>
        {/** 'Settings' button and subsequent popup menu */}
        <div>
          <p
            className={resetJournal ? styles.settingsbtnh : styles.settingsbtn}
            aria-hidden="true"
            onClick={() => setShowPopup(!showPopup)}
            ref={popupSettings}
          >
            <img className={styles.gear} src="/icons/gear.svg" alt="gear" />
            Settings
          </p>
          {showPopup ? (
            <div className={styles.popup} data-testid="dropdown">
              <p
                aria-hidden="true"
                onClick={() => {
                  setResetJournal(!resetJournal);
                  setrj();
                }}
              >
                Reset Journal
              </p>
              {/** !theme ? (
                <p aria-hidden="true" onClick={() => setTheme(!theme)}>
                  Dark Mode
                </p>
              ) : (
                <p aria-hidden="true" onClick={() => setTheme(!theme)}>
                  Light Mode
                </p>
              ) */}
            </div>
          ) : null}
        </div>
      </div>
      {resetJournal ? (
        // Warning message for when 'reset journal' is clicked
        <div className={styles.warning}>
          <p>Are You Sure?</p>
          <div className={styles.warnbtnwrap}>
            <p
              aria-hidden="true"
              onClick={() => {
                localStorage.setItem('data', '');
                location.reload();
                setResetJournal(false);
                setrj();
              }}
            >
              YES
            </p>
            <p
              id="warnno"
              aria-hidden="true"
              onClick={() => {
                setResetJournal(false);
                setrj();
              }}
            >
              NO
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
