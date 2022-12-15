# Season Date Parser
- Returns the year, month and days based on the seasons between the 2 dates you enter. In its first version, it calculates only the beginning of the months. The second version will also be added at the end of the months.

# Using
```js
const seasonDateParser = require('season-date-parser');

const winter = seasonDateParser.dateParser('2022-05-13','2022-12-13','W') // Winter
const summer =  seasonDateParser.dateParser('2022-05-13','2022-12-13','S') // Summer
const spring =  seasonDateParser.dateParser('2022-05-13','2022-12-13','Sp') // Spring
const autumn =  seasonDateParser.dateParser('2022-05-13','2022-12-13','A') // Autumn

console.log(autumn) // [ { Season: 'Autumn' }, '2022-09-01', '2022-10-01', '2022-11-01' ]
```
```js
const seasonDateParser = require('season-date-parser');
const ListSeasonDate = seasonDateParser.ListSeasonDate('2021-01-13', '2022-01-13'); 
console.log(ListSeasonDate) 
// {
//   Winter: [ '2021-01-01', '2021-02-01', '2021-12-01', '2022-01-01' ],
//   Summer: [ '2021-06-01', '2021-07-01', '2021-08-01' ],
//   Spring: [ '2021-03-01', '2021-04-01', '2021-05-01' ],
//   Autumn: [ '2021-09-01', '2021-10-01', '2021-11-01' ]
// }

```

# Additional Info
- It doesn't matter if the season parameter we last entered in the seasonDateParser method is uppercase or lowercase.
