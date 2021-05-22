/* eslint-disable no-param-reassign */
import styles from '../styles/EntryCard.module.css';
import Row from './row-card';

export default function EntryCard({ entry, entries }) {
  function addRow() {
    const index = entries.val.findIndex((currE) => currE.id === entry.id);
    entry.rows = [...entry.rows, { id: Date.now() * Math.random(), type: 'hw', text: '' }];
    const newEntries = [...entries.val];
    newEntries[index] = entry;
    entries.set(newEntries);
  }

  function updateRow(data, id) {
    const index = entries.val.findIndex((currE) => currE.id === entry.id);
    const rowIndex = entry.rows.findIndex((currRow) => currRow.id === id);
    entry.rows[rowIndex].text = data;
    const newEntries = [...entries.val];
    newEntries[index] = entry;
    entries.set(newEntries);
  }

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{entry.title}</h1>
      <div className={styles.rowwrap}>
        {entry.rows.map((row) => (
          <Row
            updateRow={(data) => updateRow(data, row.id)}
            key={row.id}
            row={row}
          />
        ))}
      </div>
      <button className={styles.addbtn} onClick={() => addRow()} type="button">
        +
      </button>
    </div>
  );
}
