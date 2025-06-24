const fs = require('fs');
const readline = require('readline');

const HEX_DEC = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
}

const rl = readline.createInterface({
  input: fs.createReadStream('dataset.csv', {encoding: 'utf8'}),
  crlfDelay: Infinity,
})
const [,, row ,column] = process.argv;
const dataSet = [];

function logCoordVal(){
  const hexVal = dataSet?.[row-1]?.[column-1];
  hexVal
  ? console.log(`Coord: [${row},${column}]\n`, `Hex: ${hexVal}\n`, `Dec: ${hexToDec(hexVal)}`)
  : console.log('Invalid row or column')
}

function hexToDec(hex){
  const hexDigits = hex.split('').slice(2);
  const indexRef = hexDigits.length - 1;

  return hexDigits.reduce( (acc, digit, i) => acc + HEX_DEC[digit] * Math.pow(16, indexRef - i), 0);
}

function loadDataSet(csvLine){
  dataSet.push(csvLine.match(/\dx(\d|[A-F])+/g))
}

rl.on('line', loadDataSet)
.on('error', err => console.log('Something really bad just happened!!:', err))
.on('close', logCoordVal)
