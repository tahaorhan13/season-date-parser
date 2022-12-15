
function dateRange(startDate, endDate) {
    var start = startDate.split('-');
    var end = endDate.split('-');
    var startYear = parseInt(start[0]);
    var endYear = parseInt(end[0]);
    var dates = [];

    for (var i = startYear; i <= endYear; i++) {
        var endMonth = i != endYear ? 11 : parseInt(end[1]) - 1;
        var startMon = i === startYear ? parseInt(start[1]) - 1 : 0;
        for (var j = startMon; j <= endMonth; j = j > 12 ? j % 12 || 11 : j + 1) {
            var month = j + 1;
            var displayMonth = month < 10 ? '0' + month : month;
            dates.push([i, displayMonth, '01'].join('-'));
        }
    }
    return dates;
}

 exports.dateParser = function(firstDate,lastDate,checkSeason) {
    const range =  dateRange(firstDate, lastDate);
    let result = [];
    let newValue = [];
    if (checkSeason.toUpperCase() == "W") {
        for (let i = 0; i < range.length; i++) {
            const monthly = range[i].split('-');
            if ((monthly[1] == 1) || (monthly[1] == 2) || (monthly[1] == 12)) {
                result.push(monthly);
            }
        }
        newValue.push({ "Season": "Winter" });
        for (let j = 0; j < result.length; j++) {
            const filterDate = result[j].join('-')
            newValue.push(filterDate);
        }
        return newValue;
    }
    else if (checkSeason.toUpperCase() == "Sp") {
        for (let i = 0; i < range.length; i++) {
            const monthly = range[i].split('-');
            if ((monthly[1] == 3) || (monthly[1] == 4) || (monthly[1] == 5)) {
                result.push(monthly);
            }
        }
        newValue.push({ "Season": "Spring" });
        for (let j = 0; j < result.length; j++) {
            const filterDate = result[j].join('-')
            newValue.push(filterDate);
        }
        return newValue;
     }
    else if (checkSeason.toUpperCase() == "S") {
        for (let i = 0; i < range.length; i++) {
            const monthly = range[i].split('-');
            if ((monthly[1] == 6) || (monthly[1] == 7) || (monthly[1] == 8)) {
                result.push(monthly);
            }
        }
        newValue.push({ "Season": "Summer" });
        for (let j = 0; j < result.length; j++) {
            const filterDate = result[j].join('-')
            newValue.push(filterDate);
        }
        return newValue;
     }
    else if (checkSeason.toUpperCase() == "A") {
        for (let i = 0; i < range.length; i++) {
            const monthly = range[i].split('-');
            if ((monthly[1] == 9) || (monthly[1] == 10) || (monthly[1] == 11)) {
                result.push(monthly);
            }
        }
        newValue.push({ "Season": "Autumn" });
        for (let j = 0; j < result.length; j++) {
            const filterDate = result[j].join('-')
            newValue.push(filterDate);
        }
        return newValue;
     }
}

function Winter(firstDate, lastDate){
    const range = dateRange(firstDate, lastDate);
    let result = [];
    let obj = [];
    for(let i =0; i<range.length;i++){
      const monthly = range[i].split('-');
      if((monthly[1]== 1) || (monthly[1] == 2) || (monthly[1] == 12)){        
        result.push(monthly);
      }
    }
        for (let j = 0; j < result.length; j++) {
            const filterDate = result[j].join('-')
            obj.push(filterDate);
        }
        return obj;
}
function Summer(firstDate, lastDate){
    const range = dateRange(firstDate, lastDate);
    let result = [];
    let obj = [];
    for(let i =0; i<range.length;i++){
      const monthly = range[i].split('-');
      if((monthly[1]== 6) || (monthly[1] == 7) || (monthly[1] == 8)){        
        result.push(monthly);
      }
    }
        for (let j = 0; j < result.length; j++) {
            const filterDate = result[j].join('-')
            obj.push(filterDate);
        }
        return obj;
}
function Spring(firstDate, lastDate){
    const range = dateRange(firstDate, lastDate);
    let result = [];
    let obj = [];
    for(let i =0; i<range.length;i++){
      const monthly = range[i].split('-');
      if((monthly[1]== 3) || (monthly[1] == 4) || (monthly[1] == 5)){        
        result.push(monthly);
      }
    }
        for (let j = 0; j < result.length; j++) {
            const filterDate = result[j].join('-')
            obj.push(filterDate);
        }
        return obj;
}
function Autumn(firstDate, lastDate){
    const range = dateRange(firstDate, lastDate);
    let result = [];
    let obj = [];
    for(let i =0; i<range.length;i++){
      const monthly = range[i].split('-');
      if((monthly[1]== 9) || (monthly[1] == 10) || (monthly[1] == 11)){        
        result.push(monthly);
      }
    }
        for (let j = 0; j < result.length; j++) {
            const filterDate = result[j].join('-')
            obj.push(filterDate);
        }
        return obj;
}
exports.ListSeasonDate = function(firstDate,lastDate){
    const [winter,summer,spring,autumn] =[Winter(firstDate, lastDate),Summer(firstDate, lastDate),Spring(firstDate, lastDate),Autumn(firstDate, lastDate)];
    const newValue={
        Winter:winter,
        Summer:summer,
        Spring:spring,
        Autumn:autumn
    }
    return newValue;
}