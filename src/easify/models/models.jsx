const emptyRow = {
  id: Date.now() * Math.random(),
  type: 'hw',
  text: '',
};

const emptyEntry = {
  id: Date.now() * Math.random(),
  title: new Date().toDateString(),
  rows: [],
};

const weekDataModel = {
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
};

const emptyYear = {
  id: Date.now() * Math.random(),
  year: new Date().getFullYear(),
  q1: weekDataModel,
  q2: weekDataModel,
  q3: weekDataModel,
  q4: weekDataModel,
};

const Export = {
  year: emptyYear,
  entry: emptyEntry,
  row: emptyRow,
};

export default Export;
