import { useState, useEffect, useRef } from 'react';
import styles from '../styles/Row.module.css';

export default function Row({ row, updateRow }) {
  const [showPopup, setShowPopup] = useState(false);
  const popup = useRef(null);

  /** HIDE DROPDOWN WHEN CLICKED OFF */
  useEffect(() => {
    // only add the event listener when the dropdown is opened
    if (!showPopup) return;
    function handleClick(event) {
      if (popup.current && !popup.current.contains(event.target)) {
        setShowPopup(false);
      }
    }
    window.addEventListener('click', handleClick);
    // eslint-disable-next-line consistent-return
    return () => window.removeEventListener('click', handleClick);
  }, [showPopup]);

  return (
    <div className={styles.row}>
      <div>
        <img onClick={() => setShowPopup(!showPopup)} aria-hidden="true" className={styles.icon} src="/icons/rarrow.svg" alt="bullet icon" />
        {showPopup
          ? (
            <div ref={popup} className={styles.popup}>
              <h2>BULLET TYPE</h2>
            </div>
          ) : null }
      </div>
      <input
        value={row.text}
        onInput={(e) => updateRow(e.target.value)}
      />
    </div>
  );
}
