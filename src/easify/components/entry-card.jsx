/* eslint-disable no-param-reassign */
import styles from '../styles/EntryCard.module.css';
import Row from './row-card';

export default function EntryCard({ entry, entries }) {
  function addRow() {
    const index = entries.val.indexOf((currE) => currE.id === entry.id);
    entry.rows = [...entry.rows, { id: Date.now(), type: 'hw', text: '' }];
    const newEntries = [...entries.val];
    newEntries[index] = entry;
    entries.set(newEntries);
  }

  function updateRowData() {
  }

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{entry.title}</h1>
      <div className={styles.rowwrap}>
        {entry.rows.map((row) => (
          <Row updateRowData={(newData) => updateRowData(newData)} key={row.id} row={row} />
        ))}
      </div>
      <button className={styles.addbtn} onClick={() => addRow()} type="button">
        +
      </button>
    </div>
  );
}
